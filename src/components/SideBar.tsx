import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const SideBar = () => {
  const suggestedFriends = [
    { id: 1, name: "أحمد محمد", mutualFriends: 5 },
    { id: 2, name: "سارة أحمد", mutualFriends: 3 },
    { id: 3, name: "محمد علي", mutualFriends: 7 },
  ];

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4" dir="rtl">أشخاص قد تعرفهم</h2>
      <div className="space-y-4">
        {suggestedFriends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <div className="bg-primary text-white w-full h-full flex items-center justify-center">
                  {friend.name[0]}
                </div>
              </Avatar>
              <div className="mr-3">
                <h3 className="font-medium">{friend.name}</h3>
                <p className="text-sm text-gray-500" dir="rtl">
                  {friend.mutualFriends} أصدقاء مشتركين
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              متابعة
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SideBar;