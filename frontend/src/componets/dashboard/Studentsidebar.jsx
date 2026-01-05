import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaHandshake, FaUndoAlt, FaTimes } from 'react-icons/fa';

const Studentsidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { path: '/student-dashboard', icon: FaTachometerAlt, label: 'Dashboard', end: true },
    { path: '/student-dashboard/books', icon: FaBook, label: 'Browse Books' },
    { path: '/student-dashboard/issue', icon: FaHandshake, label: 'My Books' },
    { path: '/student-dashboard/returned', icon: FaUndoAlt, label: 'History' }
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
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
              <FaBook className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">LibraryOS</h3>
              <p className="text-xs text-gray-500">Student Portal</p>
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
                      ? "bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-600 shadow-sm" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  {({isActive}) => (
                    <>
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-r-full" />
                      )}
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                        transition-all duration-200
                        ${isActive 
                          ? "bg-white shadow-sm" 
                          : "bg-gray-100 group-hover:bg-white group-hover:shadow-sm"
                        }
                      `}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-teal-600" : "text-gray-500 group-hover:text-gray-700"}`} />
                      </div>
                      <span className="font-semibold">{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Library Info Card */}
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-sm mb-1">Library Hours</h4>
              <p className="text-xs text-white/90 mb-0.5">Mon-Fri: 8AM - 8PM</p>
              <p className="text-xs text-white/90">Sat-Sun: 10AM - 6PM</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Studentsidebar;