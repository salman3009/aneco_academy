
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Expense from './components/Expense/Expense';
import './assets/icon/font-awesome/css/font-awesome.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="expense" element={<Expense/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
