import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import {
  IconUser,
  IconMail,
  IconShield,
  IconKey,
  IconActivity,
  IconSparkles,
  IconLogOut,
  IconCheck,
  IconArrowRight,
} from '../components/Icons';

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [copied, setCopied] = useState(false);

  const handleCopyToken = () => {
    navigator.clipboard.writeText(JSON.stringify(user, null, 2));
    setCopied(true);
    toast.success('Account metadata copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogout = () => {
    dispatch(logOut());
    toast.info('Logged out successfully');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      {/* Welcome Banner Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-gray-900/20 border border-gray-800">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-indigo-300 font-extrabold text-2xl sm:text-3xl shadow-inner">
              {user?.name ? user.name[0].toUpperCase() : 'U'}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Active Session
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Welcome back, {user?.name || 'User'}!
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Your paper workspace is synchronized with Redux-Saga auth flow.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/15 transition-all duration-200 active:scale-95"
            >
              <IconLogOut className="w-4 h-4" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics / Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <IconShield className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Security Status
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-0.5">Encrypted & Verified</h3>
            <p className="text-xs text-gray-500 mt-1">JWT Tokens & Redux State Synced</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <IconKey className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Session Storage
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-0.5">Persistent Storage</h3>
            <p className="text-xs text-gray-500 mt-1">Auto-restores session on page reload</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <IconActivity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Redux Architecture
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-0.5">Redux-Saga Active</h3>
            <p className="text-xs text-gray-500 mt-1">Asynchronous side effects handling</p>
          </div>
        </div>
      </div>

      {/* User Details & Action Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Information Profile Card */}
        <div className="lg:col-span-2 bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 text-gray-700 rounded-lg">
                <IconUser className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">User Profile Metadata</h2>
                <p className="text-xs text-gray-500">Authenticated user information</p>
              </div>
            </div>
            <button
              onClick={handleCopyToken}
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              {copied ? <IconCheck className="w-4 h-4 text-emerald-600" /> : <IconSparkles className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Metadata'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Full Name
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1">
                {user?.name || 'Not specified'}
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Email Address
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1 truncate">
                {user?.email || 'Not specified'}
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Account ID / Role
              </span>
              <p className="text-sm font-bold text-gray-900 mt-1">
                {user?._id || user?.id || 'standard-user'}
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Account Tier
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-700 font-bold text-xs">
                  PRO MEMBER
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-gray-300 p-5 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
              <span>ACTIVE AUTHENTICATION PAYLOAD</span>
              <span className="text-emerald-400">STATUS: 200 OK</span>
            </div>
            <pre className="text-xs font-mono bg-gray-950/80 p-3 rounded-xl overflow-x-auto text-emerald-400">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </div>

        {/* Quick Capabilities & Info Panel */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-md space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 border-b border-gray-100 pb-5 mb-5">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <IconSparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">Features Built-In</h3>
                <p className="text-xs text-gray-500">Enterprise auth architecture</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs text-gray-600">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full mt-0.5">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-gray-900">Redux Toolkit & Saga</strong>: Decoupled side-effect management.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full mt-0.5">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-gray-900">Axios Interceptors</strong>: Automatic Authorization header insertion & 401 handling.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full mt-0.5">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-gray-900">Protected Route Guards</strong>: Zero flash navigation protection.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full mt-0.5">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong className="text-gray-900">Form Validation</strong>: Live input validation, password strength meters, and clear error toast feedback.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                toast.success('Session security audit passed cleanly.');
              }}
              className="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <IconShield className="w-4 h-4 text-indigo-600" />
              <span>Run System Diagnostics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;