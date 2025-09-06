import Navbar from '@/modules/Home/Components/Navbar'
import React, { Children } from 'react'

interface Props {
  children: React.ReactNode
}


const Homelayout = ({ children }: Props) => {
  return (
    <main className='flex flex-col min-h-screen max-h-screen '>
        <Navbar></Navbar>
      <div className='flex flex-col flex-1 pb-4 px-4' >
         <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] dark:bg-[size:16px_16px] bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-[size:16px_16px]" />
        {children}
      </div>
    </main>
  )
}

export default Homelayout
