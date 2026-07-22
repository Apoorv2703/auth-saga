import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logOut } from '../features/auth/authSlice';
import { IconShield, IconLogOut, IconUser, IconSparkles } from './Icons';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gray-900 to-indigo-900 flex items-center justify-center text-white shadow-md shadow-gray-900/10 group-hover:scale-105 transition-transform duration-200">
              <IconShield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 tracking-tight leading-none group-hover:text-indigo-600 transition-colors">
                PaperAuth
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400">
                Secure Portal
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-3 p-1.5 pl-3 rounded-full border border-gray-200/80 bg-gray-50/50 hover:bg-gray-100/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                >
                  <span className="text-xs font-semibold text-gray-700 max-w-[120px] truncate hidden sm:inline">
                    {user.name || user.email || 'Account'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {getInitials(user.name || user.email)}
                  </div>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowDropdown(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-20 animate-fadeIn">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-xs font-medium text-gray-400">Signed in as</p>
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {user.email || user.name}
                        </p>
                      </div>
                      <Link
                        to="/"
                        onClick={() => setShowDropdown(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <IconSparkles className="w-4 h-4 text-indigo-500" />
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          setShowDropdown(false);
                          handleLogout();
                        }}
                        className="w-full text-left flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <IconLogOut className="w-4 h-4" />
                        Log out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                    location.pathname === '/login'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="text-xs font-semibold px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:bg-gray-800 active:scale-95 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;