import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <header className="w-100 py-4 px-10 bg-gray-900 flex justify-around items-center font-mono">
         <h1 className='text-yellow-200 text-xl md:text-2xl font-bold'>Test MyTens</h1>
         <nav>
            <Link  to="/" className="text-white text-sm">
               Homepage
            </Link>
         </nav>
      </header>
   );
};

export default Header;
