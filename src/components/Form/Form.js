import React, { useRef } from 'react';
import { useContextApp } from '../../context/AppContext';

const Form = () => {
   const userRef = useRef(null);
   const { setUserInput } = useContextApp();
   
   const handleSubmit = (e) => {
      e.preventDefault();
      const enteredInput = userRef.current.value;
      setUserInput(enteredInput);
   };

   return (
      <form className="max-w-4xl flex gap-2" onSubmit={handleSubmit}>
         <input
            type="search"
            placeholder="Placeholder"
            className="px-3 py-3 placeholder-gray-600 text-blue-600 relative  bg-white text-sm border border-gray-500 shadow outline-none focus:outline-none focus:ring w-full pl-10 rounded-md"
            ref={userRef}
         />
         <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
         >
            Search
         </button>
      </form>
   );
};

export default Form;
