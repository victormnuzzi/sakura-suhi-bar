import { Link, useNavigate } from 'react-router-dom';
import headerStyle from './header.module.css';
import logo from '../assets/img/icon.png';

function Nav() {
  const navigate = useNavigate();

  const getUser = sessionStorage.getItem('userData');
  const getPassword = sessionStorage.getItem('passwordData');

  const handleLogout = async () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('passwordData');
    alert("Saindo da sessão.");
    navigate('/');
  }

  return (
    <header>
      <div className={headerStyle.headerContent}>
        <div className={headerStyle.restaurantName}>
          <img src={logo} alt="Logo do restaurante" />
          <h2>SAKURA SUSHI BAR</h2>
        </div>
        <nav className={headerStyle.headerMenu}>
          <ul>
            <li><Link to="/" className={headerStyle.menuText}>Home</Link></li>
            {getUser && getPassword ? (
              <>
                <li><Link to="/produtos" className={headerStyle.menuText}>Produtos</Link></li>
                <li><Link to="/pedidos" className={headerStyle.menuText}>Pedido</Link></li>
                <li><Link to="/sobre" className={headerStyle.menuText}>Sobre</Link></li>
                <li><button onClick={handleLogout} className={headerStyle.logoutBtn}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/sobre" className={headerStyle.menuText}>Sobre</Link></li>
                <li><Link to="/login" className={headerStyle.menuText}>Login</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;