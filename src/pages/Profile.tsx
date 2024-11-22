import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Post from "@/components/Post";
import Navbar from "@/components/Navbar";
import { Camera, MapPin, Link as LinkIcon } from "lucide-react";

const Profile = () => {
  const userPosts = [
    {
      id: 1,
      username: "أحمد محمد",
      content: "سعيد جداً بتجربة هذا الموقع الجديد!",
      timestamp: "منذ ساعتين",
      likes: 15,
      comments: 3,
    },
    {
      id: 2,
      username: "أحمد محمد",
      content: "يوم جميل مع العائلة 🌟",
      timestamp: "منذ يومين",
      likes: 24,
      comments: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto pt-20 px-4">
        <Card className="p-6 mb-6">
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <Avatar className="h-32 w-32 ring-4 ring-white">
                <div className="bg-primary text-white w-full h-full flex items-center justify-center text-2xl">
                  أ
                </div>
              </Avatar>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white"
            >
              <Camera className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-20 text-center">
            <h1 className="text-2xl font-bold">أحمد محمد</h1>
            <p className="text-gray-600 mt-2">مطور برمجيات</p>
            
            <div className="flex items-center justify-center gap-4 mt-4 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 ml-1" />
                <span>الرياض، السعودية</span>
              </div>
              <div className="flex items-center">
                <LinkIcon className="h-4 w-4 ml-1" />
                <a href="#" className="hover:text-blue-500">ahmed.dev</a>
              </div>
            </div>
            
            <div className="flex justify-center gap-8 mt-6">
              <div className="text-center">
                <div className="font-bold text-xl">٢٥٠</div>
                <div className="text-gray-600">متابِع</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">١٨٠</div>
                <div className="text-gray-600">متابَع</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">٤٥</div>
                <div className="text-gray-600">منشور</div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="space-y-6">
          {userPosts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;