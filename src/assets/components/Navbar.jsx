import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-500 text-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo and Text */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img
              src="/flowerlogo1.png" // Replace with your logo image path
              alt="Logo"
              className="h-10" // Adjust the size of your logo as needed
            />
            <span className="ml-2 text-xl font-semibold">Flower Sophia</span>{" "}
            {/* Text next to the logo */}
          </Link>
        </div>

        {/* Links */}
        <div className="space-x-8 flex items-center">
          <Link
            to="/"
            className="hover:text-pink-200 transition-all duration-300 ease-in-out hover:underline"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-pink-200 transition-all duration-300 ease-in-out hover:underline"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="hover:text-pink-200 transition-all duration-300 ease-in-out hover:underline"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-200 transition-all duration-300 ease-in-out hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
