
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Home() {
  const [user, setUsers] = useState([]);
  const [myUid, setUid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let uid = await localStorage.getItem("userId");
    setUid(uid);
    const list = [];
    const dbSnap = await getDocs(collection(db, "user"));

    dbSnap.forEach((item) => {
      // console.log("list", list.name);
      list.push(item.data());
    });

    setUsers(list);
  };

  const handleLogout = () => {
    localStorage.removeItem("userID")
    navigate("/login")   

  };

  return (
    <div>
      <Navbar/>
      <h1>vvkdfvndlkvnsdklvsldv</h1>
    </div>
  );
}


export default Home;
