import Swal from 'sweetalert2';
import { signInWithEmailAndPassword  } from 'firebase/auth';
import { useState } from 'react';

import { auth } from '../firebase.config/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisloading(true)
   await signInWithEmailAndPassword(auth   , email, password)
      .then(async( response) => {    
        const uid = response.user.uid
        localStorage.setItem("userId",uid)
         Swal.fire({
            title: "signUp completed",
            text: "do you want to containue",
            icon: "success"
         });
         setisloading(false)
         navigate("/home");
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
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="/SingUp" className="text-indigo-600 hover:underline">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
