import { Home, Bell, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const notifications = [
    {
      id: 1,
      text: "قام أحمد بالتعليق على منشورك",
      time: "منذ 5 دقائق",
      isRead: false,
    },
    {
      id: 2,
      text: "سارة بدأت بمتابعتك",
      time: "منذ ساعة",
      isRead: false,
    },
    {
      id: 3,
      text: "لديك ذكرى من عام مضى",
      time: "منذ 3 ساعات",
      isRead: true,
    },
  ];

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
            
            <Popover>
              <PopoverTrigger>
                <button className="text-gray-600 hover:text-primary relative">
                  <Bell className="w-6 h-6" />
                  {notifications.some(n => !n.isRead) && (
                    <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="py-2">
                  <h3 className="text-lg font-semibold px-4 py-2 border-b">الإشعارات</h3>
                  <div className="max-h-[300px] overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                          !notification.isRead ? 'bg-blue-50' : ''
                        }`}
                      >
                        <p className="text-sm">{notification.text}</p>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <button className="text-gray-600 hover:text-primary">
              <MessageSquare className="w-6 h-6" />
            </button>
            <Link to="/profile" className="text-gray-600 hover:text-primary">
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;