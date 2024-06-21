import Footer from '@/components/Footer'
import List from '@/components/List/List'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='profilePage grid grid-cols-2'>
        <div className="details p-4">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <button>Update Profile</button>
            </div>
            <div className="info flex flex-col">
              <span>Avatar: <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&dpr=2&w=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE3MTgyMDM2NDZ8MA&ixlib=rb-4.0.3" width={40} height={40} alt=''/></span>
              <span>Username: <b>John Doe</b></span>
              <span>Email: <b>john@gmail.com</b></span>
            </div>
            <div className="title">
              <h1>My List</h1>
              <button>Create New Post</button>
            </div>
            <div className="title">
              <h1>Saved List</h1>
            </div>
            <List/>
          </div>
        </div>
        <div className="chatContainer p-4">
          <div className="wrapper">
            Chat
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page