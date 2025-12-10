import React from 'react'
import Adminsidebar from '../componets/dashboard/Adminsidebar'
import Navbar from '../componets/dashboard/Navbar'
import Main from '../componets/dashboard/Main'

const AdminDashboard = () => {
  return (
    <div >
      {/* Sidebar */}
      <Adminsidebar />
      
      {/* Main Content Area */}
      <div>
        <Navbar />
         <Main />
      </div>
    </div>
  )
}

export default AdminDashboard