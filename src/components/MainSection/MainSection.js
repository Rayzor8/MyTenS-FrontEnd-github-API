import React from 'react';
import { useContextApp } from '../../context/AppContext';

const MainSection = () => {
   const { user, userRepo, isDisabled, setIsClicked, error } = useContextApp();

   const repoAlert = userRepo && userRepo.length === 0 && (
      <p> Repository is empty</p>
   );
   return (
      <section>
         {user && !error && (
            <div>
               <h1>{user.login}</h1>
               <p>{user.id}</p>
               <button
                  onClick={() => setIsClicked(true)}
                  className={`${
                     isDisabled ? 'bg-gray-600' : 'bg-green-600'
                  } text-white px-4 py-2 rounded-sm`}
               >
                  Repository
               </button>
               {userRepo &&
                  userRepo.map((repo) => (
                     <div key={repo.id}>
                        <h1>{repo.name}</h1>
                        <p>{repo.description}</p>
                     </div>
                  ))}
               {repoAlert}
            </div>
         )}
      </section>
   );
};

export default MainSection;
