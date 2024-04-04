// TopBar.tsx
import { Link } from 'react-router-dom';
import '../styles/TopBar.css'; // Import your CSS file for styling

const TopBar = () => {
  return (
    <nav className="topbar">
      <ul>
        <li>
          <Link to="/user" className="button">Registro</Link>
        </li>
        <li>
          <Link to="/users" className="button">Lista de usuarios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
