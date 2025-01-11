import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {login} from "../redux/userSlice" 
import { useDispatch , useSelector} from 'react-redux'
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const name = useSelector((state) => state.auth.name);
    const Email = useSelector((state) => state.auth.Email);
    const role = useSelector((state) => state.auth.role);
    const AccountStatus = useSelector((state) => state.auth.AccountStatus);
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          console.log(`Email - ${email} Password - ${password}`)
          const response = await axios.post("http://localhost:5000/auth/login", { email, password });
          const {token} = response.data
          dispatch(login({token :token}))
          console.log(`Name - ${name}`)
          console.log(`Email - ${Email}`)
          console.log(`Role - ${role}`)
          console.log(`AccountStatus - ${AccountStatus}`)
    
          // Navigate based on role
          if (role === "admin") navigate("/adminpanel");
          else if (role === "executive") navigate("/executivepanel");
          else if (role === "student") navigate("/studentpanel");
          else if (role === "dev") navigate("/devpanel")
        } catch (err) {
          setError(`Invalid email or password ${err}`);
        }
      };
    
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Login
          </h2>

          {error && (
            <p className="text-red-500 text-center text-sm mb-4">{error}</p>
          )}

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600  text-white py-2 rounded hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default Login