import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";



function ChatList() {
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
      <div className=" mt-9 flex justify-center items-center flex-col">
        {user.map((item) => (
          <div
            key={item.uid}
            onClick={() => navigate("/chat", { state: { ...item, myUid } })}
            className="flex hover:cursor-pointer justify-between items-center  my-4 border-black border bg-orange-100 w-11/12 rounded-md px-10 py-5 shadow-md shadow-gray-400"
          >
            <div className="flex items-center ">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg"
                className="w-16 h-16 mr-4 rounded-full"
              />
              <div>
                <h1 className="font-semibold text-xl uppercase">{item.name}</h1>
                <h1 className="text-gray-700 text-base">{item.email}</h1>
              </div>
            </div>
            <button>Message</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ChatList;
