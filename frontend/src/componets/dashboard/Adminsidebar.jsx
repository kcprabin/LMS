import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaBook, FaHandshake, FaUndoAlt, FaExclamationTriangle, FaTimes } from 'react-icons/fa';

const Adminsidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { path: '/admin-dashboard', icon: FaTachometerAlt, label: 'Dashboard', end: true },
    { path: '/admin-dashboard/members', icon: FaUsers, label: 'Members' },
    { path: '/admin-dashboard/books', icon: FaBook, label: 'Books' },
    { path: '/admin-dashboard/issued', icon: FaHandshake, label: 'Issued Books' },
    { path: '/admin-dashboard/returned', icon: FaUndoAlt, label: 'Returned' },
    { path: '/admin-dashboard/not-returned', icon: FaExclamationTriangle, label: 'Overdue' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-screen w-[280px] bg-white z-50 
        transform transition-all duration-300 ease-in-out
        shadow-[4px_0_24px_rgba(0,0,0,0.08)]
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <FaBook className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Yr Library</h3>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
            aria-label="Close sidebar"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  onClick={() => setIsOpen(false)}
                  className={({isActive}) => `
                    group flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm
                    transition-all duration-200 relative overflow-hidden
                    ${isActive 
                      ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 shadow-sm" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  {({isActive}) => (
                    <>
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-full" />
                      )}
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                        transition-all duration-200
                        ${isActive 
                          ? "bg-white shadow-sm" 
                          : "bg-gray-100 group-hover:bg-white group-hover:shadow-sm"
                        }
                      `}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-indigo-600" : "text-gray-500 group-hover:text-gray-700"}`} />
                      </div>
                      <span className="font-semibold">{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        
        
      </aside>
    </>
  );
};

export default Adminsidebar;