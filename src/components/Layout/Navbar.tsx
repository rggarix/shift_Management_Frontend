import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from '../../constants/URL';
import type { User } from '../../interfaces/common.interface';

export const Navbar = () => {
  const router=useNavigate();
  const navigate = useNavigate();
  const userId: string = localStorage.getItem('userId')?? "";
  const userDetail = localStorage.getItem('userDetail');
  const user: User = userDetail ? JSON.parse(userDetail)[0] : {};
  const userName = user?.username || user?.name || 'User';

  const handleLogout = async () => {
    const res = await axios.post(`${BASE_URL}/api/users/logout/${userId}`)
    if(res.status === 200){
      router("/login")
      localStorage.clear();
    }
  };

  return (
    <div className="w-full h-16 flex justify-between items-center px-6 bg-teal-800 shadow-md sticky top-0 z-50">
      <div
        className="text-xl font-bold text-white cursor-pointer"
        onClick={() => navigate('/')}
      >
        Healthcare Shift Management APP
      </div>
      <div className="flex items-center gap-4">
        <span className="text-white font-medium">{userName}</span>
        <Button variant="outlined" size="small" onClick={handleLogout} style={{ color: 'white', borderColor: 'white' }}>
          Logout
        </Button>
      </div>
    </div>
  );
};
