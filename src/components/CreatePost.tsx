import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile, MapPin } from "lucide-react";
import { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا سيتم إضافة منطق نشر المحتوى لاحقاً
    setContent("");
  };

  return (
    <Card className="p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="ماذا يدور في ذهنك؟"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-4 resize-none"
          dir="rtl"
        />
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <Button type="button" variant="ghost" size="icon">
              <Image className="w-5 h-5 text-gray-600" />
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <Smile className="w-5 h-5 text-gray-600" />
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <MapPin className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
          <Button type="submit" disabled={!content.trim()}>
            نشر
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreatePost;