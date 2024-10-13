import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    
    <div className='nav-flex'>
     
      <div className='logo'>
      EthAi
      </div>
      <div  className='mid-nav'>
       <span >Features</span>
       <span>Why Us</span>
       <span>Tokenomics</span>
       <span>RoadMap</span>
      </div>

      <div>
        <button className='login'>Log in</button>
        <button className='white-btn'>Whitepaper</button>
      </div>
    </div>
  )
}

export default Navbar
