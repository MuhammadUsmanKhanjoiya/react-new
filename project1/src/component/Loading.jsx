import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const userId = await localStorage.getItem("userId");
    if (userId !== null) navigate("/home");
    else navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center space-x-2">
        <span className="text-indigo-500 text-lg font-semibold">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
