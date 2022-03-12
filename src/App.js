import Form from './components/Form';
import MainSection from './components/MainSection';

import AppContext from './context/AppContext';

function App() {

   return (
      <AppContext>
        <div className="App p-10">
           <Form />
           <MainSection/>
        </div>
      </AppContext>
   );
}

export default App;
