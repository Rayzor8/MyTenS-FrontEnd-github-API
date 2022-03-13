import React, { useRef, useState } from 'react';
import { useContextApp } from '../../context/AppContext';

const Form = () => {
   const userRef = useRef(null);
   const { setUserInput, error } = useContextApp();
   const [validating, setValidating] = useState(false);
   const handleSubmit = (e) => {
      e.preventDefault();
      const enteredInput = userRef.current.value;
      if (enteredInput.trim().length < 1) {
         setValidating(true);
         return;
      }
      setUserInput(enteredInput);
      setValidating(false);
   };

   return (
      <form className="max-w-4xl flex gap-2 flex-col" onSubmit={handleSubmit}>
         <div className="flex justify-start items-start gap-2">
            <label htmlFor="inputSearch"></label>
            <input
               type="search"
               placeholder="Search here.."
               className="px-4 py-2 placeholder-gray-600 text-gray-800 relative  bg-white text-sm border border-gray-500 shadow outline-none focus:outline-none focus:ring w-96 max-full  rounded-md"
               ref={userRef}
               id="inputSearch"
            />
            <button
               type="submit"
               className="bg-blue-600 text-white px-4 py-2 rounded-md block"
            >
               Search
            </button>
         </div>
         {validating && (
            <span className="text-red-400 italic">
               Please fill out this input field
            </span>
         )}
         {error && (
            <span className="text-red-400 italic">
               User Not found
            </span>
         )}
      </form>
   );
};

export default Form;
