import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const SinglePage = () => {
  return (
    <>
    <Navbar/>
    <div className='singlePage grid grid-cols-1 sm:grid-cols-2 px-8 py-4'>
      <div className="details p-10">
        <div className="wrapper">
          <div className="info">
            <div className="top flex justify-between">
              <div className="post flex flex-col gap-5">
                <h1 className='text-2xl font-semibold'>Beautiful Apartment</h1>
                <div className="address flex gap-1 align-middle text-[#888] text-sm">
                  <Image src="/pin.png" width={20} height={20} alt='location' className='object-contain'/>
                  <span>Civil Lines</span>
                </div>
                <div className="price p-2 bg-orange-200 rounded-lg w-max text-xl font-light">$ 12000</div>
              </div>
              <div className="user bg-yellow-100 rounded-lg flex flex-col align-middle justify-center text-center gap-5 px-12 font-semibold">
                <Image src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&dpr=2&w=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE3MTgyMDM2NDZ8MA&ixlib=rb-4.0.3' width={50} height={50} alt='User' className='border mx-auto border-100 rounded-full'/>
                <span>Shreejai Raj</span>
              </div>
            </div>
            <div className="bottom mt-12 leading-5 text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>   
      </div>
      <div className="features bg-orange-50"></div>
    </div>
    <Footer/>
    </>
  )
}

export default SinglePage