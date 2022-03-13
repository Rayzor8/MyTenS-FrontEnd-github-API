import React from 'react';
import Loader from '../../components/Loader';
import { useContextApp } from '../../context/AppContext';
import styles from '../../styles/global.module.css';
import RepoContent from './RepoContent/RepoContent';

const Repository = () => {
   const { userRepo, isLoading } = useContextApp();

   if (isLoading) return <Loader />;
   if (userRepo && userRepo.length < 1) return <p className="text-center my-4 font-bold font-mono text-2xl"> Repository is empty</p>;

   return (
      <main className={`${styles.container} pt-4`}>
         <h1 className="text-center text-2xl font-bold mb-6">
            List Repository
         </h1>
         <div className="grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {userRepo &&
               userRepo.map((repo) => <RepoContent key={repo.id} {...repo} />)}
         </div>
      </main>
   );
};

export default Repository;
