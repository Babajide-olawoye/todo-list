import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import NewTODO from './Pages/NewTODO/NewTODO';
import Navbar from './Components/Navbar/Navbar';
import EditTODO from './Pages/EditTOD/EditTODO';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/NewTodo' element={<NewTODO/>}/>
        <Route path='/EditTodo' element={<EditTODO/>}/>
      </Routes>
    </div>
  );
}

export default App;
