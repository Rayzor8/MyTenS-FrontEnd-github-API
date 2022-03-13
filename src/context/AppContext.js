import { useState, createContext, useContext, useEffect } from 'react';

export const contextApp = createContext();

export const useContextApp = () => {
   return useContext(contextApp);
};

const AppContext = ({ children }) => {
   const API_ENDPOINT = 'https://api.github.com/users/';

   const [user, setUser] = useState(null);
   const [userRepo, setUserRepo] = useState(null);
   const [userInput, setUserInput] = useState('');
   const [isClicked, setIsClicked] = useState(false);
   const [error, setError] = useState(null);
   const [isLoading, setIsloading] = useState(false);
   
   // fetch user data
   useEffect(() => {
      const fetchUser = async () => {
         setError(null);
         if (userInput) {
            try {
               setIsloading(true);
               const response = await fetch(API_ENDPOINT + userInput);
               if (!response.ok) {
                  throw new Error('User Not Found');
               }
               const data = await response.json();
               setUser(data);
               setIsloading(false);
            } catch (err) {
               setError(err.message);
               setIsloading(false);
            }
         }
      };

      fetchUser();
   }, [userInput]);

   // fetch user repository
   useEffect(() => {
      const fetchRepo = async () => {
         if (user && isClicked) {
            setIsloading(true);
            const response = await fetch(user.repos_url);
            const data = await response.json();
            setUserRepo(data);
         }
         setIsloading(false);
      };
      fetchRepo();
   }, [user, isClicked]);

   return (
      <contextApp.Provider
         value={{
            user,
            userRepo,
            setUserInput,
            setIsClicked,
            error,
            isLoading,
         }}
      >
         {children}
      </contextApp.Provider>
   );
};

export default AppContext;
