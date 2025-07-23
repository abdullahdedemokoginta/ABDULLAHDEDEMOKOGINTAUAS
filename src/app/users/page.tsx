'use client';

import { useEffect, useState } from 'react';
import { UserList } from '@/components/ui/user-list';
import { userApi } from '@/lib/api';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userApi.getAll();
        setUsers(response.data || []);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-green-400 text-xl animate-pulse">Loading Users...</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-800 via-emerald-900 to-green-800 text-white shadow-lg p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6 border-b border-green-400 pb-2">
        <h1 className="text-3xl font-extrabold text-green-300">Manajemen Pengguna</h1>
      </div>
      <UserList users={users} />
    </div>
  );
}
