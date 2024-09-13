import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userID");
    navigate("/login");
  };

  return (
    <div>
      <div className=" text-2xl flex items-center justify-between font-medium   bg-orange-500 w-full px-10 py-4 text-white">
        <h1 className=" ">React-SMIT</h1>
        <div className=" text-xl space-x-10">
        <Link to={"/home"}>Home</Link>
          <Link to={"/chatList"}>Chat</Link>
          <Link to={"/Location"}>Location</Link>
          <Link to={"/MarketPlace"}>MarketPlace</Link>
          <Link to={"/Profile"}>Profile</Link>
        </div>
        <button className="" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
