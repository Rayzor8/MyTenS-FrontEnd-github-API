import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import MainSection from '../components/MainSection';

const Homepage = () => {
   return (
      <>
         <Header />
         <main className="App p-10">
            <Form />
            <MainSection />
         </main>
      </>
   );
};

export default Homepage;
