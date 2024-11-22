import Navbar from "@/components/Navbar";
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import SideBar from "@/components/SideBar";

const Index = () => {
  const posts = [
    {
      id: 1,
      username: "أحمد محمد",
      content: "مرحباً بكم في موقعنا الجديد للتواصل الاجتماعي! نتمنى أن تستمتعوا بتجربة استخدام منصتنا.",
      timestamp: "منذ 5 دقائق",
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      username: "سارة أحمد",
      content: "يوم جميل للغاية! أتمنى أن يكون يومكم مليئاً بالسعادة والإيجابية 🌟",
      timestamp: "منذ 15 دقيقة",
      likes: 8,
      comments: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto pt-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <CreatePost />
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
          
          <div className="hidden md:block">
            <div className="sticky top-20">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;