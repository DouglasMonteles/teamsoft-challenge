import './styles.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-deliverize.png';
import ArrowDownIcon from '../../assets/arrow-down.png';
import AccountCircleLogo from '../../assets/account-circle.png';
import ShoppingCartIcon from '../../assets/shopping-cart.png';

function Navbar() {

  return (
    <nav className="navbar">
      <img className="navbar__logo" src={Logo} alt="logo from the interprise"/>

      <div className="navbar__options">
        <div className="navbar__address navbar--shadow">
          <div className="navbar__address__select">
            <label className="navbar--label">Entrega:</label>
            <select className="navbar--select">
              <option>R. Antonio Braune, 222</option>
            </select>
          </div>

          <img className="navbar--icon" src={ArrowDownIcon} alt="Arrow down"/>
        </div>

        <input className="navbar__input__search navbar--shadow" type="text" 
          name="search" placeholder="Busque por estabelecimento ou produtos" />

        <div className="navbar__user__options">
          <Link className="navbar__user__link" to="/">
            <img className="navbar--user--icon--left" src={AccountCircleLogo} alt="user account"/>
            Entrar
          </Link>

          <Link className="navbar__user__link" to="/">
            <span className="navbar__user__cart__index">2</span>
            <img className="navbar--user--icon--left" src={ShoppingCartIcon} alt="shopping cart"/>
            Carrinho
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;