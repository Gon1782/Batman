import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <img className="mainlogo" alt="img" src={process.env.PUBLIC_URL + "/batman.png"} />
      </Link>
      <form>
        {/* <input className="inputsize" type="search" value="검색기능"></input> */}
      </form>
      <p
        className="navi"
        onClick={() => {
          navigate("/123");
        }}
      >
        커뮤니티
      </p>
    </div>
  );
}

export default Header;
