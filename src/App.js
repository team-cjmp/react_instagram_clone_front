import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { UserFooter } from './components/UserFooter';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <UserFooter />
    </div>
  );
}

export default App;
