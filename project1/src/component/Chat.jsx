import moment from "moment";
import {
  addDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config/firebase";
import { useLocation, useNavigate } from "react-router-dom";

function Chat() {
  const [message, setMessage] = useState(""); // Correctly initializing as a string
  const [chatlist, setChatlist] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const q = query(
      collection(db, "chat"),
      where(state.uid, "==", true) & where(state.myUid, "==", true)
    );
    const unsubscribe = onSnapshot(q, (docSnap) => {
      const list = [];
      docSnap.forEach((doc) => {
        list.push(doc.data());
      });
      list.sort((a, b) => a.createdAt - b.createdAt);
      setChatlist(list);
    });

    return () => unsubscribe();
  }, [state.uid, state.myUid]);

  const sendMsg = async () => {
    await addDoc(collection(db, "chat"), {
      message,
      [state.myUid]: true,
      senderUid: state.myUid,
      [state.uid]: true,
      createdAt: Date.now(),
    });
    // console.log("state.myUid",state.myUid);
    // console.log("state.uid",state.uid);

    setMessage(""); // Clear the input field after sending the message
  };

  return (
    <div className="h-screen">
      <div className="flex items-center bg-orange-500 w-full px-6 py-4">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg"
          className="w-12 h-12 mr-2 rounded-full"
        />
        <h1 className="text-2xl font-bold text-white font-serif">
          {state.name}
        </h1>
      </div>
      <div className="bg-slate-200 h-3/4 overflow-y-scroll">
        {chatlist.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate("/chat", { state: { ...item, myUid } })}
            className={`flex px-10
               ${item.senderUid === state.uid ? "justify-end" : "justify-start"}
               `}
          >
            <div
              className=" hover:cursor-pointer  items-center
               my-4  border-black border bg-green-200 rounded-md px-4 py-2 shadow-md shadow-gray-400"
            >
              <h1 className="font-semibold text-xl uppercase">
                {item.message}
              </h1>
              <h1 className=" text-base ">
                {moment(item.createdAt).startOf("seconds").fromNow()}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex px-6 mt-6 gap-2 items-center justify-center">
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          className="w-full py-3 px-3 border-2 border-gray-500 rounded-md bg-slate-100"
        />
        <button
          onClick={sendMsg}
          className="bg-orange-400 py-3 px-6 rounded-md font-serif font-bold text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
