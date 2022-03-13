import React from 'react';
import Loader from '../../components/Loader';
import { useContextApp } from '../../context/AppContext';
import styles from '../../styles/global.module.css';
import RepoContent from './RepoContent/RepoContent';

const Repository = () => {
   const { userRepo, isLoading } = useContextApp();

   if (isLoading) return <Loader />;
   if (!userRepo) return <p> Repository is empty</p>;

   return (
      <main className={styles.container}>
         <h1 className="text-center text-2xl font-bold">List Repository</h1>
         {userRepo &&
            userRepo.map((repo) => <RepoContent key={repo.id} {...repo} />)}
      </main>
   );
};

export default Repository;
