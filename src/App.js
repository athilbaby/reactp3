import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Navbar from './Components/Navbar';
import StateBasics from './Components/StateBasics';
import Navigation from './Components/Navigation';
import Table1 from './Components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './Components/ApiGet';



function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<StateBasics/>} />
      <Route path='/First' element={<First/>} />
      <Route path='/table' element={<Table1/>}/>
      <Route path='/nav' element={<Navbar/>}/>
      <Route path='/navi' element={<Navigation/>}/>
      <Route path='/axios' element={<ApiGet/>}/>
    </Routes>


  
</div>
    
  );
}

export default App;
