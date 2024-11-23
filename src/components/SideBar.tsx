import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const SideBar = () => {
  const suggestedFriends = [
    { id: 1, name: "أحمد محمد", mutualFriends: 5 },
    { id: 2, name: "سارة أحمد", mutualFriends: 3 },
    { id: 3, name: "محمد علي", mutualFriends: 7 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-6" dir="rtl">أشخاص قد تعرفهم</h2>
      <div className="space-y-6">
        {suggestedFriends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between group">
            <div className="flex items-center">
              <Avatar className="h-12 w-12 ring-2 ring-primary/10">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-white w-full h-full flex items-center justify-center text-lg font-semibold">
                  {friend.name[0]}
                </div>
              </Avatar>
              <div className="mr-3">
                <h3 className="font-medium group-hover:text-primary transition-colors cursor-pointer">
                  {friend.name}
                </h3>
                <p className="text-sm text-gray-500" dir="rtl">
                  {friend.mutualFriends} أصدقاء مشتركين
                </p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="hover:bg-primary hover:text-white border-primary/20"
            >
              متابعة
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;