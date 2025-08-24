import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, MessageSquare } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Heart },
    { path: "/devotions", label: "Daily Devotions", icon: BookOpen },
    { path: "/prayer-wall", label: "Prayer Wall", icon: MessageSquare },
    { path: "/testimonies", label: "Testimonies", icon: Heart },
    { path: "/community", label: "Community", icon: Users },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Faith Community
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;