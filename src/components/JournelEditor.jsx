import { Search, Save, Smile, Image, Paperclip, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const JournalEditor = () => {
  const [mood, setMood] = useState<string>("");
  
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Search bar */}
      <div className="p-4 lg:p-6 border-b border-border bg-card">
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search entries..."
            className="pl-10 bg-background border-input"
          />
        </div>
      </div>

      {/* Editor area */}
      <div className="flex-1 overflow-auto p-4 lg:p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Greeting Section */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">
              {getGreeting()}, Sarah 👋
            </h2>
            <p className="text-muted-foreground">How are you feeling today?</p>
          </div>

          {/* Mood Selector */}
          <div className="flex gap-2 flex-wrap">
            {["😊", "😔", "😡", "😴", "🤩", "😌"].map((emoji) => (
              <Button
                key={emoji}
                variant={mood === emoji ? "default" : "outline"}
                size="lg"
                onClick={() => setMood(emoji)}
                className="text-2xl h-12 w-12 p-0 transition-smooth"
              >
                {emoji}
              </Button>
            ))}
          </div>

          {/* Editor Card */}
          <div className="bg-card rounded-xl shadow-medium p-6 lg:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                {today}
              </p>
              <Input
                placeholder="Entry title..."
                className="text-2xl font-semibold border-0 px-0 focus-visible:ring-0 bg-transparent placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="border-t border-border pt-6">
              <Textarea
                placeholder="Start writing your thoughts..."
                className="min-h-[400px] resize-none border-0 px-0 focus-visible:ring-0 bg-transparent text-base leading-relaxed placeholder:text-muted-foreground/50"
              />
            </div>

            {/* Editor Toolbar */}
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="gap-2">
                <Smile className="h-4 w-4" />
                Mood
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Image className="h-4 w-4" />
                Image
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Paperclip className="h-4 w-4" />
                Attach
              </Button>
              <Button variant="ghost" size="sm" className="ml-auto">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating save button */}
      <Button
        size="lg"
        className="fixed bottom-8 right-8 shadow-medium hover:shadow-lg transition-all"
      >
        <Save className="h-5 w-5 mr-2" />
        Save Entry
      </Button>
    </div>
  );
};

export default JournalEditor;
