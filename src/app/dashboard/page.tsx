'use client';

import { StatsCards } from '@/components/dashboard/stats-cards';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { bookApi, userApi, loanApi } from '@/lib/api';
import type { Loan, Book } from '@/lib/types';
import { useEffect, useState } from 'react';

interface DashboardStats {
  totalUsers: number;
  totalBooks: number;
  activeLoans: number;
  overdueLoans: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loans, setLoans] = useState<Loan[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [users, booksResponse, loansResponse] = await Promise.all([
          userApi.getAll(),
          bookApi.getAll(),
          loanApi.getAll(),
        ]);

        setBooks(booksResponse.data);
        setLoans(loansResponse.data);

        setStats({
          totalUsers: users.data.length,
          totalBooks: booksResponse.data.length,
          activeLoans: loansResponse.data.filter((loan: Loan) => loan.status === 'active').length,
          overdueLoans: loansResponse.data.filter((loan: Loan) => loan.status === 'overdue').length,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !stats) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-green-400 text-xl animate-pulse">Loading Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white p-6 rounded-xl shadow-xl">
      <h1 className="text-3xl font-extrabold mb-6 text-green-300 border-b border-green-500 pb-2">
        Dashboard Perpustakaan
      </h1>

      <StatsCards stats={stats} />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity
          title="Peminjaman Terbaru"
          activities={loans.slice(0, 5)}
          type="loans"
        />
        <RecentActivity
          title="Buku Baru Ditambahkan"
          activities={books.slice(0, 5)}
          type="books"
        />
      </div>
    </div>
  );
}
