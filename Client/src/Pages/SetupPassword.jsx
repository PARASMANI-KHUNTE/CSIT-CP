import  { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const SetupPassword = () => {
  const [searchParams] = useSearchParams(); // Extract the token from the URL
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const token = searchParams.get("token"); // Retrieve the token from the URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/setup-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token, // Include the token from the URL
          newPassword: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message || "Password setup successful!");
        setTimeout(() => {
          navigate("/login"); // Redirect user to login page
        }, 2000);
      } else {
        setError(data.message || "Failed to set password. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold text-center text-green-600">
          Set Your Password
        </h2>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {successMessage && (
          <p className="mt-4 text-green-500 text-center">{successMessage}</p>
        )}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupPassword;
