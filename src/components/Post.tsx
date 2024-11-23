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
    <div className="p-6">
      <div className="flex items-center mb-4">
        <Avatar className="h-12 w-12 ring-2 ring-primary/10">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-white w-full h-full flex items-center justify-center text-lg font-semibold">
            {username[0].toUpperCase()}
          </div>
        </Avatar>
        <div className="mr-3 flex-1">
          <h3 className="font-semibold text-lg hover:text-primary transition-colors cursor-pointer">
            {username}
          </h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      
      <p className="text-gray-800 mb-6 text-lg leading-relaxed" dir="rtl">
        {content}
      </p>
      
      <div className="flex items-center justify-between border-t pt-4">
        <Button 
          variant="ghost" 
          className="flex items-center hover:text-primary hover:bg-primary/10"
        >
          <Heart className="w-5 h-5 mr-2" />
          <span>{likes}</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex items-center hover:text-primary hover:bg-primary/10"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span>{comments}</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex items-center hover:text-primary hover:bg-primary/10"
        >
          <Share2 className="w-5 h-5 mr-2" />
          <span>مشاركة</span>
        </Button>
      </div>
    </div>
  );
};

export default Post;