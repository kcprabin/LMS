import React from 'react';
import { FaBook, FaUsers, FaHandshake, FaUndoAlt, FaExclamationTriangle, FaSpinner, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDashboardStats } from '../hooks/useDashboardStats';

const Cards = () => {
  const { stats, loading, error } = useDashboardStats();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <FaSpinner className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
        <FaExclamationTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Statistics</h3>
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all font-medium"
        >
          Retry
        </button>
      </div>
    );
  }

  const cardData = [
    {
      title: 'Total Members',
      value: stats.totalMembers,
      icon: FaUsers,
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-500',
      link: 'members',
      trend: { value: '+12%', isPositive: true }
    },
    {
      title: 'Total Books',
      value: stats.totalBooks,
      icon: FaBook,
      gradient: 'from-purple-500 to-pink-500',
      bg: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-500',
      link: 'books',
      trend: { value: '+5%', isPositive: true }
    },
    {
      title: 'Books Issued',
      value: stats.booksIssued,
      icon: FaHandshake,
      gradient: 'from-amber-500 to-orange-500',
      bg: 'from-amber-50 to-orange-50',
      iconBg: 'bg-amber-500',
      link: 'issued',
      trend: { value: '+8%', isPositive: true }
    },
    {
      title: 'Books Returned',
      value: stats.booksReturned,
      icon: FaUndoAlt,
      gradient: 'from-green-500 to-emerald-500',
      bg: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-500',
      link: 'returned',
      trend: { value: '+15%', isPositive: true }
    },
    {
      title: 'Books Overdue',
      value: stats.booksNotReturned,
      icon: FaExclamationTriangle,
      gradient: 'from-red-500 to-rose-500',
      bg: 'from-red-50 to-rose-50',
      iconBg: 'bg-red-500',
      link: 'not-returned',
      trend: { value: '-3%', isPositive: true }
    }
  ];

  return (
    <div className="space-y-6 p-2">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-2">Welcome back! Here's what's happening with your library today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {cardData.map((card) => {
          const Icon = card.icon;
          
          return (
            <NavLink 
              key={card.title}
              to={card.link}
              className="group block"
            >
              <div className={`
                bg-gradient-to-br ${card.bg} rounded-2xl p-6 
                border border-white shadow-sm hover:shadow-lg
                transition-all duration-300 transform hover:-translate-y-1
                relative overflow-hidden
              `}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                
                {/* Header: Icon + Trend */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`
                    w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center
                    shadow-lg shadow-${card.iconBg}/30
                  `}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Trend Badge */}
                  <div className={`
                    flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold
                    ${card.trend.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                  `}>
                    {card.trend.isPositive ? <FaArrowUp className="w-3 h-3" /> : <FaArrowDown className="w-3 h-3" />}
                    <span>{card.trend.value}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {card.value.toLocaleString()}
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    {card.title}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-4 flex items-center text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors relative z-10">
                  <span>View Details</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
              <p className="text-sm text-gray-500 mt-1">Latest transactions in your library</p>
            </div>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              View All →
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { type: 'issue', title: 'Book Issued', subtitle: 'The Great Gatsby issued to John Doe', time: '2 hours ago', icon: FaHandshake, color: 'text-amber-600 bg-amber-50' },
              { type: 'return', title: 'Book Returned', subtitle: '1984 returned by Jane Smith', time: '3 hours ago', icon: FaUndoAlt, color: 'text-green-600 bg-green-50' },
              { type: 'member', title: 'New Member', subtitle: 'Alice Johnson joined the library', time: '5 hours ago', icon: FaUsers, color: 'text-blue-600 bg-blue-50' },
              { type: 'book', title: 'New Book Added', subtitle: 'To Kill a Mockingbird added to collection', time: '1 day ago', icon: FaBook, color: 'text-purple-600 bg-purple-50' }
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-gray-100">
                <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{activity.subtitle}</p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Performance</h3>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              
              </div>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white/90">Total Circulation</span>
                  <span className="text-xl font-bold">{stats.booksIssued + stats.booksReturned}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-white rounded-full h-2 w-3/4 shadow-lg"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white/90">Active Rate</span>
                  <span className="text-xl font-bold">75%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-white rounded-full h-2 w-3/4 shadow-lg"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white/90">On-Time Returns</span>
                  <span className="text-xl font-bold">92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-white rounded-full h-2 w-[92%] shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;