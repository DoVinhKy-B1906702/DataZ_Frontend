

import { TablePage } from "./pages/TablePage";

import { FormPage } from "./pages/FormPage";

import { Home } from "./pages/Home";
import {Routes, Route} from 'react-router-dom';
import { SurveyPage } from "./pages/SurveyPage/SurveyPage";

function App() {
  return (
    <div>
      <div style={{maxWidth:'75vw', padding:'0px 150px 0px 180px'}}>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table' element={<TablePage />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/survey' element={<SurveyPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
