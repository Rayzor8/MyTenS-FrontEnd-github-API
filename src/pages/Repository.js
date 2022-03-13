import React from 'react';
import Loader from '../components/Loader';
import { useContextApp } from '../context/AppContext';
import styles from '../styles/global.module.css';

const Repository = () => {
   const { userRepo, isLoading } = useContextApp();

   const repoAlert = <p> Repository is empty</p>;
   if (isLoading) return <Loader />;
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
