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
   const [isDisabled, setIsDisabled] = useState(false);

   useEffect(() => {
      if (userInput) {
         fetch(API_ENDPOINT + userInput)
            .then((res) => res.json())
            .then((data) => {
               setUser(data);
            });
      }
   }, [userInput]);

   useEffect(() => {
      if (user && isClicked) {
         fetch(user.repos_url)
            .then((res) => res.json())
            .then((data) => {
               setUserRepo(data);
               setIsDisabled(true);
            });
      }
   }, [user, isClicked]);

   console.log(user);
   console.log(userRepo);

   return (
      <contextApp.Provider
         value={{ user, userRepo, isDisabled, setUserInput, setIsClicked }}
      >
         {children}
      </contextApp.Provider>
   );
};

export default AppContext;
