import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden  flex-col">
          <Navbar onLogout={() => {}} />
          <div className="flex flex-1 w-full overflow-hidden">
            <Sidebar />
            <main className="p-6 bg-gray-50 flex-1"><Outlet /></main>
          </div>
        </div>
  );
};