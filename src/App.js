import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppContext from './context/AppContext';
import Homepage from './pages/Homepage';
import Repository from './pages/Repository';

function App() {
   return (
      <AppContext>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Homepage />}></Route>
               <Route path="/repository" element={<Repository />}></Route>
            </Routes>
         </BrowserRouter>
      </AppContext>
   );
}

export default App;
