import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const menuItems = [
    { label: 'Staff', path: '/staff' },
  ];

  return (
    <div className="w-64 min-h-screen bg-teal-800 shadow-md flex flex-col pt-6">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-6 py-3 text-white hover:bg-teal-700 font-medium ${
              isActive ? 'bg-teal-600' : ''
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
