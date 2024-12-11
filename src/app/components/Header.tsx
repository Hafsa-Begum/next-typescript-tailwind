import Link from 'next/link';

const Header = () => {
  return (
    <header className="shadow-md text-gray-600">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link className="hover:text-gray-300" href="/">
            Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link className="hover:text-gray-300" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
