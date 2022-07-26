import '../styles/Navigation.scss';
import logo from '../images/instaLogo.png';
import searchIcon from '../images/searchIcon.png';
import Menu from './Menu';

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img 
          src={logo} 
          alt="instagram logo" 
          className="logo" 
        />
        <div className="search">
          <img 
            src={searchIcon} 
            alt="search icon" 
            className="searchIcon" 
          />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default Navigation;
