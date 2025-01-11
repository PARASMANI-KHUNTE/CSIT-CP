import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../redux/userSlice';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token not found. You are not logged in.');
      }

      // Hit the logout endpoint with the token in the Authorization header
      await axios.post(
        'http://localhost:5000/auth/logout',
        {}, // No body needed
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to Authorization header
          },
          withCredentials: true, // Include cookies if needed
        }
      );

      // Clear Redux state
      dispatch(logout());

      // Clear local storage
      localStorage.removeItem('token');

      // Navigate to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminPanel;
