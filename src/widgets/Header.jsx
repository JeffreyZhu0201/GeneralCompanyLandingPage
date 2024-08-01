import React from 'react'
import Logo from '../assets/react.svg'

function Header() {
    return (
        <header className='flex justify-between items-center h-20'>
            <img src={Logo} alt="" className='w-8 h-8' />
            <nav className='flex items-center'>

                <a href="#" className=''>登录</a>
                <a href="#" className='ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 '>注册</a>

            </nav>
        </header >
    )
}

export default Header