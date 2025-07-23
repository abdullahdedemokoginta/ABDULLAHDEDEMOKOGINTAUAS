'use client';

import React from 'react';
import { Bell, Search, User, Settings, ChevronDown } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 shadow-xl border-b border-green-600/60 backdrop-blur-xl">
      <div className="px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left section - Search */}
          <div className="flex items-center">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-100 group-hover:text-white transition-colors duration-300" />
              <input
                type="search"
                placeholder="Cari buku, pengarang, atau kategori..."
                className="pl-12 pr-6 py-4 w-96 bg-green-800/40 border border-green-600/40 text-white placeholder-green-200 rounded-2xl focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 focus:bg-green-800/60 transition-all duration-300 backdrop-blur-sm shadow-inner"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Settings button */}
            <div className="relative group">
              <button className="p-4 hover:bg-green-700/40 rounded-2xl relative transition-all duration-300 group">
                <Settings className="h-6 w-6 text-green-100 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </button>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></div>
            </div>

            {/* Notifications */}
            <div className="relative group">
              <button className="p-4 hover:bg-green-700/40 rounded-2xl relative transition-all duration-300">
                <Bell className="h-6 w-6 text-green-100 group-hover:text-white group-hover:animate-swing transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 flex items-center justify-center">
                  <span className="h-6 w-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-white">5</span>
                  </span>
                  <div className="absolute h-6 w-6 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </button>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></div>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-green-300/40 mx-2"></div>

            {/* User Profile */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-green-700/30 to-emerald-600/20 rounded-2xl p-3 hover:from-green-700/50 hover:to-emerald-600/30 transition-all duration-300 cursor-pointer group relative border border-green-600/30">
              {/* Online status indicator */}
              <div className="absolute -top-2 -right-2 z-10">
                <div className="relative">
                  <div className="h-4 w-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-green-800 shadow-lg"></div>
                  <div className="absolute inset-0 h-4 w-4 bg-green-400 rounded-full animate-ping opacity-50"></div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-white group-hover:text-green-100 transition-colors duration-300">
                  Dede Mokoginta
                </p>
                <p className="text-xs text-green-200 group-hover:text-green-100 transition-colors duration-300">
                  Pustakawan Senior
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="relative overflow-hidden rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-green-500/20">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <ChevronDown className="h-4 w-4 text-green-100 group-hover:text-white group-hover:rotate-180 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
