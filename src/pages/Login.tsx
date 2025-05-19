import React, { useState } from "react";
import { BASE_URL } from "../constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation (you'll likely have more robust validation)
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Simulate API call or authentication logic
    const res = await axios.post(`${BASE_URL}/api/user/validate`, {
      email: username,
      password: password,
    });

    console.log(res?.data);
    if (res?.data?.status == "success") {
      localStorage.setItem("userDetails", JSON.stringify(res?.data?.data));
      navigate("/home");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col items-center"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
      {error && <p className="text-red-500 text-sm italic mb-4">{error}</p>}
      <div className="mb-4 w-full">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChangeUsername}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-6 w-full">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
