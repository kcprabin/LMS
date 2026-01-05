import React from 'react';

const Background = () => {
  return (
    <>
      {/* Base gradient background */}
      <div 
        className="fixed inset-0 z-[-10] bg-gradient-to-br from-gray-50 via-white to-gray-100"
        aria-hidden="true"
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="fixed inset-0 z-[-9] opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true"
      />

      {/* Animated gradient orbs - More subtle */}
      <div 
        className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full 
                   mix-blend-multiply filter blur-3xl opacity-[0.08] z-[-8]
                   bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300"
        style={{
          animation: 'float 25s ease-in-out infinite'
        }}
        aria-hidden="true"
      />
      
      <div 
        className="fixed bottom-0 left-0 w-[600px] h-[600px] rounded-full 
                   mix-blend-multiply filter blur-3xl opacity-[0.08] z-[-8]
                   bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300"
        style={{
          animation: 'float 30s ease-in-out infinite reverse'
        }}
        aria-hidden="true"
      />
      
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[600px] h-[600px] rounded-full 
                   mix-blend-multiply filter blur-3xl opacity-[0.06] z-[-8]
                   bg-gradient-to-br from-purple-300 via-pink-300 to-rose-300"
        style={{
          animation: 'float 20s ease-in-out infinite'
        }}
        aria-hidden="true"
      />

      {/* Subtle vignette */}
      <div 
        className="fixed inset-0 z-[-7] opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
        }}
        aria-hidden="true"
      />

      {/* Animation keyframes */}
      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          75% {
            transform: translate(20px, 30px) scale(1.02);
          }
        }
      `}</style>
    </>
  );
};

export default Background;