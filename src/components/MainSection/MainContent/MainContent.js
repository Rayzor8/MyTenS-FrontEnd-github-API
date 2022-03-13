import React from 'react';
import { useContextApp } from '../../../context/AppContext';
import { Link } from 'react-router-dom';

const MainContent = () => {
   const { user, setIsClicked } = useContextApp();
   return (
      <figure className="bg-gray-900 my-4 rounded-md flex flex-col text-white gap-2 overflow-hidden shadow-xl border-2 border-gray-900">
         <img src={user.image} alt="user" className="w-full md:h-80" />
         <figcaption className="p-4 flex flex-col gap-2">
            <i className="text-xs">ID : {user.id}</i>
            <h1 className="text-2xl font-bold">{user.login}</h1>
            <p className="text-xl">{user.bio}</p>
            <Link
               to="/repository"
               onClick={() => setIsClicked(true)}
               className="
             bg-yellow-200
             hover:bg-yellow-300
           text-gray-900 px-4 py-2 rounded-sm block w-max"
            >
               Repository List
            </Link>
         </figcaption>
      </figure>
   );
};

export default MainContent;
