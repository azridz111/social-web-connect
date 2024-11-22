import { Home, Bell, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            تواصل
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary">
              <Home className="w-6 h-6" />
            </Link>
            <button className="text-gray-600 hover:text-primary">
              <Bell className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-primary">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-primary">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;