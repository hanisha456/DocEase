import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>DocEase is a smart doctor appointment booking system designed to streamline the healthcare scheduling process for patients, doctors, and administrators. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers a seamless user experience with three levels of authentication—patients can book and manage their appointments, doctors can track schedules and earnings, and admins can oversee system operations. The platform integrates secure online payment gateways, enabling hassle-free transactions. With an intuitive interface and efficient management features, DocEase enhances accessibility and convenience in healthcare services.</p></div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>saihanisha.ch@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ DocEase.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
