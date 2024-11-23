import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile, MapPin } from "lucide-react";
import { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="ماذا يدور في ذهنك؟"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-4 resize-none border-none focus:ring-1 focus:ring-primary/20 text-lg"
          dir="rtl"
          rows={3}
        />
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon"
              className="hover:text-primary hover:bg-primary/10"
            >
              <Image className="w-5 h-5" />
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              size="icon"
              className="hover:text-primary hover:bg-primary/10"
            >
              <Smile className="w-5 h-5" />
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              size="icon"
              className="hover:text-primary hover:bg-primary/10"
            >
              <MapPin className="w-5 h-5" />
            </Button>
          </div>
          <Button 
            type="submit" 
            disabled={!content.trim()}
            className="bg-primary hover:bg-primary/90 text-white px-6"
          >
            نشر
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;