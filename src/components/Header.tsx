import React from 'react'

const Header = () => {
  return (
    <header className='py-8 sticky top-0 z-20 bg-bgColor'>
        <nav className='w-[85%] max-w-[1440px] mx-auto flex justify-between'>
            <h1>KELOVE AUSTIN</h1>
            <div className='hidden md:flex gap-6'>
                <p>Home</p>
                <p>About</p>
                <p>Designs</p>
                <p>Videos</p>
                <p>Contact</p>
            </div>
            <div className='md:hidden'>ham</div>
        </nav>
    </header>
  )
}

export default Header