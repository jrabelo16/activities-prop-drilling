import usePerfil from '../../hooks/usePerfil';
import './styles.css';

function Header() {
  const { name } = usePerfil();
  
  return (
    <header>
      Bem vindo, {name}!
    </header>
  );
}

export default Header;