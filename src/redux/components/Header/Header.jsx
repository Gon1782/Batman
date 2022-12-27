import { Link } from 'react-router-dom';
import './Header.css';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useDarkMode } from '../../../pages/MainPage/context/DarkMode';

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  console.log(darkMode);
  return (
    <div className='header'>
      <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
        <img className='mainlogo' alt='img' src={process.env.PUBLIC_URL + '/batman.png'} />
      </Link>

      <div className='dark_mode_body'>
        <div onClick={toggleDarkMode} className='dark_mode'>
          {!darkMode && <BsToggleOff />}
          {darkMode && <BsToggleOn />}
        </div>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/community'>
          <div className='header_community'>커뮤니티</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
