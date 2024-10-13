import React from 'react';
import Navbar from './Navbar';
import '../styles/header.css'

const Header = () => {
  return (
    <div className="header-container">
      {/* Background video */}
      <video className="background-video" autoPlay loop muted>
        <source src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ClUd5f4zdna33~4ZVbPonPB9~8CtIEinsoLYa1fh4v-SigdD6Rm~sJa1SC6r7xbl5-Fr2VaFS0BVWni2vwwn-mKUfs1HGVbQ7DCGVqVb1H-mZntY6Q2QMs-ZE7m9VAAl2cSGA4~mip1BDlGpMSbRGknsvFf0hjL7NhNiMAG76dr6IZOitZVa-8D-UUKoMO-iDdb4oDVNrOgALkBwUH7J0eiDBL7oyJg4IB3ZxjO-Ef7pvbVgkWw9JGm0AItcRPJ7G17VkbWMW~Bb~nWLdkGkPoTpuBzhyLozoDyTciop1pyDvOUjZ5DzTGvoEMUyhYBIMqLQ~mhrNJjRMW2hlh7upQ__" type="video/mp4" />
      </video>

      {/* Navbar and content */}
      <div className="content">
        <Navbar />
        <div className="text-container">
          <h1>Welcome to My Website</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
