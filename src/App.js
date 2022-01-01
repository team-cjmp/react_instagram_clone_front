import styled from 'styled-components';
import './App.css';
import MainPage from './components/Main/MainPage';
import NavBar from './components/NavBar/NavBar';
import { UserFooter } from './components/UserFooter';
const Section = styled.section`
  position: relative;
  display: flex;
  max-width: 935px;
  width: 100%;
  flex-direction: column;
  width: calc(100% - 40px);
  align-items: center;
  justify-content: flex-start;
  padding: 30px 40px 0;
  margin: 0 240px 30px;
  height: 100%;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section>
        <MainPage />
      </Section>
      <UserFooter />
    </div>
  );
}

export default App;
