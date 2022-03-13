import React from 'react';
import { useContextApp } from '../../context/AppContext';
import Loader from '../Loader';
import MainContent from './MainContent';

const MainSection = () => {
   const { user, error, isLoading } = useContextApp();

   if (isLoading) return <Loader />;

   return <>{user && !error && <MainContent />}</>;
};

export default MainSection;
