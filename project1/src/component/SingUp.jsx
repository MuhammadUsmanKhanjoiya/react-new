import Swal from 'sweetalert2'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db,  auth } from "../firebase.config/firebase";
import { setDoc , doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloating, setisloading] = useState(false);
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisloading(true)
   await createUserWithEmailAndPassword(auth   , email, password)
      .then(async( response) => {    
        const uid = response.user.uid
        const userData = {name , email  , uid}
        localStorage.setItem("userId",uid)
        await setDoc(doc( db , "user" , uid), userData)
         Swal.fire({
            title: "signUp completed",
            text: "do you want to containue",
            icon: "success"
         });
         setisloading(false)
         navigate("/login");
        // alert("account created scussess fullly");
      })
      .catch((error) => {
            Swal.fire({
            title: "The Internet?",
            text: error.message,
            icon: "question"
          });
          
      });
      setisloading(false)
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
              <label
                htmlFor="Full name"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <button
              type="submit"
               disabled={isloating}
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
            >
            {isloating ? 'Signing wait...' : 'Sign In'}
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Dt have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
