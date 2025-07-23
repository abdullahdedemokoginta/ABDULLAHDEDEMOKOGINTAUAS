'use client';

import { useEffect, useState } from 'react';
import { BookList } from '@/components/ui/book-list';
import { bookApi } from '@/lib/api';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookApi.getAll();
        setBooks(response.data || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-green-400 text-xl animate-pulse">Loading Books...</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-300 border-b border-green-500 pb-2">
          Books Management
        </h1>
      </div>
      <BookList books={books} />
    </div>
  );
}