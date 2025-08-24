import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Clock, User, Search } from "lucide-react";
import Navigation from "@/components/Navigation";

const DailyDevotions = () => {
  const devotions = [
    {
      id: 1,
      title: "Walking in Faith Through Uncertainty",
      excerpt: "When the path ahead seems unclear, remember that faith is the light that guides us through the darkest valleys. God's plan unfolds in His perfect timing...",
      author: "Pastor Sarah Johnson",
      category: "Faith",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "The Power of Gratitude in Daily Life",
      excerpt: "Cultivating a heart of thankfulness transforms not only our perspective but our entire approach to life's challenges...",
      author: "Rev. Michael Chen",
      category: "Gratitude",
      date: "2024-01-14",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Finding Peace in God's Presence",
      excerpt: "In the midst of life's storms, we can find an anchor of peace that surpasses all understanding...",
      author: "Sister Mary Elizabeth",
      category: "Peace",
      date: "2024-01-13",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Serving Others with Joy",
      excerpt: "True fulfillment comes not from what we receive, but from what we give to others in love...",
      author: "Deacon James Wilson",
      category: "Service",
      date: "2024-01-12",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Trust in God's Perfect Timing",
      excerpt: "Learning to wait on the Lord teaches us patience and strengthens our faith in His sovereignty...",
      author: "Pastor Sarah Johnson",
      category: "Trust",
      date: "2024-01-11",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "The Gift of Forgiveness",
      excerpt: "Forgiveness is not just a commandment, but a gift we give ourselves and others for true healing...",
      author: "Rev. Michael Chen",
      category: "Forgiveness",
      date: "2024-01-10",
      readTime: "7 min read",
    },
  ];

  const categories = ["All", "Faith", "Gratitude", "Peace", "Service", "Trust", "Forgiveness"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
            Daily Devotions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strengthen your faith with daily inspirational readings and reflections from our spiritual community
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search devotions..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Devotion */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Today's Featured Devotion</h2>
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Featured
                </Badge>
                <Badge variant="outline">{devotions[0].category}</Badge>
              </div>
              <CardTitle className="text-2xl">{devotions[0].title}</CardTitle>
              <CardDescription className="text-base">
                {devotions[0].excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{devotions[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{devotions[0].readTime}</span>
                  </div>
                </div>
                <Button className="group">
                  <BookOpen className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Read Full Devotion
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Devotions Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Recent Devotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devotions.slice(1).map((devotion) => (
              <Card key={devotion.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{devotion.category}</Badge>
                    <span className="text-xs text-muted-foreground">{devotion.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {devotion.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {devotion.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{devotion.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{devotion.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      <BookOpen className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Devotions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DailyDevotions;