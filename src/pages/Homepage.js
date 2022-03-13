import React from 'react';
import Form from '../components/Form';
import MainSection from '../components/MainSection';
import Title from '../components/Title';
import styles from '../styles/global.module.css';

const Homepage = () => {
   return (
      <main className="bg-slate-200 w-100 min-h-screen flex justify-center">
         <section className={styles.container}>
            <Title />
            <Form />
            <MainSection />
         </section>
      </main>
   );
};

export default Homepage;
