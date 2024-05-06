import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Tasks from './layouts/Tasks';
import Add from './layouts/Add';
import SoloTasks from './layouts/SoloTasks';
import './App.css'
import EditTasks from './layouts/EditTasks';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Layout />}>
            <Route index element={ <Tasks /> } />
            <Route path='/add' element={<Add/>} />
            <Route path=':id' element={<SoloTasks/>} />
            <Route path='/edit/:id' element={<EditTasks/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
