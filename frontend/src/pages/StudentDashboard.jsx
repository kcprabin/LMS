import React, { Component } from 'react'
import Studentsidebar from '../componets/dashboard/Studentsidebar'
import Navbar from '../componets/dashboard/Navbar'
import Main from '../componets/dashboard/Main'

const StudentDashboard = () => {
  return (
    <div>
      <Studentsidebar/>
      <div >
        <Navbar/>
        <div>
          <Main/>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
