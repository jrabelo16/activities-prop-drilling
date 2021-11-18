import UsersList from '../../components/UsersList';
import { UsersListProvider } from '../../contexts/UsersListContext';
import UsersRegister from '../../components/UsersRegister';
import './styles.css';

export default function Main() {

  return (
    <UsersListProvider>
      <div className="container-main">
        <UsersRegister />
        <UsersList />
      </div>
    </UsersListProvider>
  );
}
