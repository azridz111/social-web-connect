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
    <div className="min-h-screen bg-[#F6F7F9]">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <CreatePost />
            </div>
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <Post {...post} />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-sm">
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;