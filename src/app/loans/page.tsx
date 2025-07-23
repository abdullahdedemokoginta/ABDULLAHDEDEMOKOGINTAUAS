'use client';

import { useEffect, useState } from 'react';
import { loanApi } from '@/lib/api';
import { Loan } from '@/lib/types';
import { LoanList } from '@/components/ui/loan-list';

export default function LoansPage() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await loanApi.getAll();
        setLoans(response.data || []);
      } catch (error) {
        console.error('Error fetching loans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-green-400 text-xl animate-pulse">Loading Loans...</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-800 via-emerald-900 to-green-800 text-white shadow-lg p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6 border-b border-green-400 pb-2">
        <h1 className="text-3xl font-extrabold text-green-300">Manajemen Peminjaman</h1>
      </div>
      <LoanList loans={loans} />
    </div>
  );
}
