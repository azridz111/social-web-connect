import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Comment {
  id: number;
  username: string;
  content: string;
  timestamp: string;
}

interface PostProps {
  username: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
}

const Post = ({ username, content, timestamp, likes: initialLikes, comments: initialComments }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        username: "أنت",
        content: newComment,
        timestamp: "الآن"
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-4">
        <Link to={`/profile/${username}`}>
          <Avatar className="h-12 w-12 ring-2 ring-primary/10">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white w-full h-full flex items-center justify-center text-lg font-semibold">
              {username[0].toUpperCase()}
            </div>
          </Avatar>
        </Link>
        <div className="mr-3 flex-1">
          <Link to={`/profile/${username}`}>
            <h3 className="font-semibold text-lg hover:text-primary transition-colors cursor-pointer">
              {username}
            </h3>
          </Link>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      
      <p className="text-gray-800 mb-6 text-lg leading-relaxed" dir="rtl">
        {content}
      </p>
      
      <div className="flex items-center justify-between border-t pt-4">
        <Button 
          variant="ghost" 
          className={`flex items-center hover:text-primary hover:bg-primary/10 ${
            isLiked ? 'text-primary' : ''
          }`}
          onClick={handleLike}
        >
          <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex items-center hover:text-primary hover:bg-primary/10"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span>{comments.length}</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex items-center hover:text-primary hover:bg-primary/10"
        >
          <Share2 className="w-5 h-5 mr-2" />
          <span>مشاركة</span>
        </Button>
      </div>

      {showComments && (
        <div className="mt-4 space-y-4">
          <form onSubmit={handleAddComment} className="flex gap-2">
            <Input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="اكتب تعليقاً..."
              className="flex-1"
              dir="rtl"
            />
            <Button type="submit">تعليق</Button>
          </form>

          <div className="space-y-4 mt-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-3 border-b pb-3">
                <Link to={`/profile/${comment.username}`}>
                  <Avatar className="h-8 w-8">
                    <div className="bg-gradient-to-br from-primary to-primary/80 text-white w-full h-full flex items-center justify-center text-sm font-semibold">
                      {comment.username[0].toUpperCase()}
                    </div>
                  </Avatar>
                </Link>
                <div className="flex-1 mr-3">
                  <div className="flex items-center justify-between">
                    <Link to={`/profile/${comment.username}`}>
                      <h4 className="font-semibold hover:text-primary transition-colors">
                        {comment.username}
                      </h4>
                    </Link>
                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-700 mt-1" dir="rtl">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;