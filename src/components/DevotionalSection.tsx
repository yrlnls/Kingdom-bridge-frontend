import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ChevronRight } from "lucide-react";
import bibleImage from "@/assets/bible-light.jpg";

const DevotionalSection = () => {
  const devotions = [
    {
      id: 1,
      title: "Walking in Faith, Not Fear",
      excerpt: "In times of uncertainty, we are called to trust in God's perfect plan. Discover how faith can overcome fear in your daily walk...",
      author: "Pastor David Chen",
      category: "Daily Devotion",
      date: "Today",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Power of Gratitude",
      excerpt: "A grateful heart transforms our perspective and draws us closer to God's presence. Learn practical ways to cultivate thankfulness...",
      author: "Rev. Sarah Johnson",
      category: "Spiritual Growth",
      date: "Yesterday",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Finding Peace in Prayer",
      excerpt: "Prayer is our direct line to God's heart. Explore how to deepen your prayer life and find true peace in His presence...",
      author: "Minister Grace Lee",
      category: "Prayer Life",
      date: "2 days ago",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Daily <span className="text-hope">Devotions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nourish your soul with inspiring messages, biblical insights, and spiritual guidance for your daily journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Featured Devotion */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-sanctuary">
              <img 
                src={bibleImage} 
                alt="Open Bible with divine light" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-divine/20 text-divine-foreground">
                    Featured Devotion
                  </Badge>
                  <Badge variant="outline">
                    New
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Walking in Faith, Not Fear
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  In times of uncertainty, we are called to trust in God's perfect plan. This devotion explores how we can overcome fear through faith, drawing strength from scripture and finding peace in God's promises.
                </p>
                
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Pastor David Chen
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Today
                  </div>
                  <span>5 min read</span>
                </div>
                
                <Button variant="divine" size="lg">
                  Read Full Devotion
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Recent Devotions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Recent Devotions
            </h3>
            
            {devotions.slice(1).map((devotion) => (
              <Card key={devotion.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <Badge variant="outline" className="mb-3">
                  {devotion.category}
                </Badge>
                
                <h4 className="font-semibold text-card-foreground mb-2">
                  {devotion.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {devotion.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{devotion.author}</span>
                  <span>{devotion.date} • {devotion.readTime}</span>
                </div>
              </Card>
            ))}
            
            <Button variant="sanctuary" className="w-full mt-6">
              View All Devotions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevotionalSection;