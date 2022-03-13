import React from 'react';
import { useContextApp } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const MainSection = () => {
   const { user, setIsClicked, error } = useContextApp();

   return (
      <>
         {user && !error && (
            <div className="bg-gray-900 my-4 rounded-md flex flex-col text-white gap-2 overflow-hidden shadow-xl">
               <img src={user.avatar_url} alt="user" className="w-full md:h-80" />
               <div className='p-4 flex flex-col gap-2'>
                  <i className='text-xs'>ID : {user.id}</i>
                  <h1 className='text-2xl font-bold'>{user.login}</h1>
                  <p className='text-xl'>{user.bio}</p>
                  <Link
                     to="/repository"
                     onClick={() => setIsClicked(true)}
                     className="
                        bg-yellow-200
                      text-gray-900 px-4 py-2 rounded-sm block w-max"
                  >
                     Repository List
                  </Link>
               </div>
            </div>
         )}
      </>
   );
};

export default MainSection;
