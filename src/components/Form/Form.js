import React, { useRef, useState } from 'react';
import { useContextApp } from '../../context/AppContext';

const Form = () => {
   const userRef = useRef(null);
   const { setUserInput, error, setError } = useContextApp();
   const [validating, setValidating] = useState(false);

   const handleSubmit = (e) => {
      setError(null);
      setValidating(false);
      e.preventDefault();
      const enteredInput = userRef.current.value;
      if (enteredInput.trim().length < 1) {
         setValidating(true);
         return;
      }
      setUserInput(enteredInput);
   };

   return (
      <form className="flex gap-2 flex-col" onSubmit={handleSubmit}>
         <div className="flex justify-start items-start gap-2">
            <label htmlFor="inputSearch"></label>
            <input
               type="search"
               placeholder="Search here.."
               className="px-4 py-2 placeholder-gray-600 text-gray-800 relative  bg-white text-sm border border-gray-500 shadow outline-none focus:outline-none focus:ring  rounded-md md:w-80"
               ref={userRef}
               id="inputSearch"
            />
            <button
               type="submit"
               className="bg-gray-900 text-white px-4 py-2 rounded-md block"
            >
               Search
            </button>
         </div>
         {validating && (
            <span className="text-red-400 italic">
               Please fill out this input field
            </span>
         )}
         {error && <span className="text-red-500 italic">{error}</span>}
      </form>
   );
};

export default Form;
