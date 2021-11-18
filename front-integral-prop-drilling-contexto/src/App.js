import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import { PerfilProvder } from './contexts/PerfilContext';

function App() {

  return (
    <PerfilProvder>
      <>
      <Header />
      <Main />
    </>
    </PerfilProvder>
  );
}

export default App;
