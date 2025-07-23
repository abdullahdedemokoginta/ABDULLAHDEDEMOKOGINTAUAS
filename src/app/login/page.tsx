'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/auth-provider';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (activeTab === 'register') {
      setTimeout(() => {
        setError('Registrasi berhasil! Silakan login.');
        setActiveTab('login');
        setIsLoading(false);
      }, 1500);
      return;
    }

    const success = await login(username, password);
    if (success) {
      router.push('/dashboard');
    } else {
      setError('Username atau password salah');
    }
    setIsLoading(false);
  };

  const handleForgotPassword = () => {
    setError('Link reset password telah dikirim ke email Anda');
    setShowForgotPassword(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-gray-900 to-green-800 relative overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">📚 Digital Library</h1>
          <p className="text-gray-300 text-sm mt-1">Akses koleksi digital terbaik</p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 rounded-full bg-white/10 p-1">
          <button
            onClick={() => { setActiveTab('login'); setError(''); }}
            className={`flex-1 py-2 text-sm font-semibold rounded-full transition ${
              activeTab === 'login' ? 'bg-green-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Masuk
          </button>
          <button
            onClick={() => { setActiveTab('register'); setError(''); }}
            className={`flex-1 py-2 text-sm font-semibold rounded-full transition ${
              activeTab === 'register' ? 'bg-green-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Daftar
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email/Username */}
          <div>
            <label className="text-sm text-gray-200 mb-1 block">
              {activeTab === 'register' ? 'Email' : 'Username'}
            </label>
            <input
              type={activeTab === 'register' ? 'email' : 'text'}
              placeholder={activeTab === 'register' ? 'nama@email.com' : 'Masukkan username'}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Full Name for register */}
          {activeTab === 'register' && (
            <div>
              <label className="text-sm text-gray-200 mb-1 block">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                required
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label className="text-sm text-gray-200 mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Confirm password */}
          {activeTab === 'register' && (
            <div>
              <label className="text-sm text-gray-200 mb-1 block">Konfirmasi Password</label>
              <input
                type="password"
                placeholder="Konfirmasi password"
                required
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          {/* Forgot Password */}
          {activeTab === 'login' && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-sm text-green-400 hover:underline"
              >
                Lupa password?
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-3xl hover:from-green-600 hover:to-green-800 transition transform hover:scale-[1.02] disabled:opacity-50"
          >
            {isLoading ? (activeTab === 'login' ? 'Masuk...' : 'Mendaftar...') : activeTab === 'login' ? 'Masuk' : 'Daftar'}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-xs text-center text-gray-400">
          Dengan {activeTab === 'login' ? 'masuk' : 'mendaftar'}, Anda menyetujui{' '}
          <a href="#" className="text-green-400 underline hover:text-green-300">Syarat & Ketentuan</a>
        </p>
      </div>
    </div>
  );
}
