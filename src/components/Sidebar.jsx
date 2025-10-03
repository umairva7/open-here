import { Calendar, Tag, BookOpen, Settings, Home, X, User, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { icon: Home, label: "Today", active: true },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: Tag, label: "Tags", active: false },
  { icon: BookOpen, label: "All Entries", active: false },
  { icon: Heart, label: "Favorites", active: false },
  { icon: TrendingUp, label: "Insights", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 bottom-0 w-64 bg-card border-r border-border shadow-soft z-40 transition-smooth",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center lg:hidden">
          <h2 className="font-semibold text-foreground">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-border">
          <Link to="/profile">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-smooth cursor-pointer">
              <Avatar className="h-10 w-10 border-2 border-primary/30">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">Sarah Mitchell</p>
                <p className="text-xs text-muted-foreground truncate">Edit profile</p>
              </div>
            </div>
          </Link>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth",
                item.active
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
