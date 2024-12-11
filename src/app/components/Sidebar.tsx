"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname()

  // Define menu items
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Profile', path: '/dashboard/profile' },
    { name: 'Settings', path: '/dashboard/settings' },
    { name: 'Notifications', path: '/dashboard/notifications' },
    { name: 'Logout', path: '/logout' },
    { name: 'Go Home', path: '/' },
  ];

  return (
    <div className="shadow-md h-screen w-64 flex flex-col">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        MyApp
      </div>
      
      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <div
                  className={`border text-black cursor-pointer block px-16 py-2 rounded-md ${
                    pathname === item.path
                      ? 'bg-gray-700 text-stone-100'
                      : 'hover:bg-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">© 2024 MyApp</p>
      </div>
    </div>
  );
};

export default Sidebar;
