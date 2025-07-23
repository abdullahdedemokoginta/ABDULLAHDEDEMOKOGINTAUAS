'use client';

import { useEffect, useState } from 'react';
import { AuthorList } from '@/components/ui/author-list';
import { authorApi } from '@/lib/api';

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await authorApi.getAll();
        setAuthors(response.data || []);
      } catch (error) {
        console.error('Error fetching authors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-green-400 text-xl animate-pulse">Loading Authors...</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-300 border-b border-green-500 pb-2">
          Authors Management
        </h1>
      </div>
      <AuthorList authors={authors} />
    </div>
  );
}
