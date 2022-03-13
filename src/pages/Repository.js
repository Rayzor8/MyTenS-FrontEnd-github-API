import React from 'react';
import { useContextApp } from '../context/AppContext';
import styles from '../styles/global.module.css'

const Repository = () => {
   const { userRepo } = useContextApp();
   const repoAlert = <p> Repository is empty</p>;

   return (
      <main className={styles.container}>
         {userRepo &&
            userRepo.map((repo) => (
               <div key={repo.id}>
                  <h1>{repo.name}</h1>
                  <p>{repo.description}</p>
               </div>
            ))}
         {userRepo && userRepo.length === 0 && repoAlert}
      </main>
   );
};

export default Repository;
