import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <img className="mainlogo" src={process.env.PUBLIC_URL + "/batman.png"} />
      </Link>
      <form>
        <input className='inputsize' type='search' value='검색기능'></input>
      </form>
      <Link style={{ textDecoration: "none", color: "black" }} to="/community">
        커뮤니티
      </p>
    </div>
  );
}

export default Header;
