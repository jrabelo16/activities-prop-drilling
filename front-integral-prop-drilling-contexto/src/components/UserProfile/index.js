import usePerfil from '../../hooks/usePerfil';
import './styles.css';

function UserProfile() {
  const { name, age } = usePerfil();
  
  return (
    <div className="container-profile">
      <div>
        <strong>Nome:</strong>
        <span>{name}</span>
      </div>
      <div>
        <strong>Age:</strong>
        <span>{age}</span>
      </div>
    </div>
  );
}

export default UserProfile;