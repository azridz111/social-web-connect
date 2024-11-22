import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface PostProps {
  username: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const Post = ({ username, content, timestamp, likes, comments }: PostProps) => {
  return (
    <Card className="mb-4 p-4">
      <div className="flex items-center mb-4">
        <Avatar className="h-10 w-10">
          <div className="bg-primary text-white w-full h-full flex items-center justify-center">
            {username[0].toUpperCase()}
          </div>
        </Avatar>
        <div className="mr-3 flex-1">
          <h3 className="font-semibold text-lg">{username}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      
      <p className="text-gray-800 mb-4" dir="rtl">{content}</p>
      
      <div className="flex items-center justify-between border-t pt-4">
        <Button variant="ghost" className="flex items-center">
          <Heart className="w-5 h-5 mr-2" />
          <span>{likes}</span>
        </Button>
        <Button variant="ghost" className="flex items-center">
          <MessageCircle className="w-5 h-5 mr-2" />
          <span>{comments}</span>
        </Button>
        <Button variant="ghost" className="flex items-center">
          <Share2 className="w-5 h-5 mr-2" />
        </Button>
      </div>
    </Card>
  );
};

export default Post;