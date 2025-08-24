import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Share2, Plus, Search, User, Calendar, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";

const Testimonies = () => {
  const testimonies = [
    {
      id: 1,
      title: "God Healed My Marriage",
      content: "After 15 years of marriage, my husband and I were on the brink of divorce. Through prayer, counseling, and God's grace, He completely restored our relationship. We're stronger than ever and more in love than when we first met. God truly works miracles!",
      author: "Jennifer M.",
      date: "2024-01-10",
      category: "Marriage",
      likes: 234,
      featured: true,
    },
    {
      id: 2,
      title: "Miraculous Financial Provision",
      content: "I lost my job during the pandemic and didn't know how I'd pay rent. I prayed and trusted God, and within two weeks, I received an unexpected insurance refund that covered exactly what I needed. God's timing is perfect!",
      author: "Marcus T.",
      date: "2024-01-08",
      category: "Finance",
      likes: 189,
      featured: false,
    },
    {
      id: 3,
      title: "Delivered from Addiction",
      content: "I struggled with alcohol addiction for 10 years. Every rehab program failed, but when I surrendered my life to Jesus, He set me free instantly. I've been sober for 3 years now and my life is completely transformed.",
      author: "David R.",
      date: "2024-01-05",
      category: "Deliverance",
      likes: 456,
      featured: true,
    },
    {
      id: 4,
      title: "God Opened Doors for My Education",
      content: "I dreamed of going to college but couldn't afford it. After months of prayer, I received a full scholarship from an organization I never heard of. God made a way where there seemed to be no way!",
      author: "Maria S.",
      date: "2024-01-03",
      category: "Education",
      likes: 167,
      featured: false,
    },
    {
      id: 5,
      title: "Healing from Cancer",
      content: "The doctors gave me 6 months to live, but I chose to trust God instead of fear. After countless prayers from my church family and unwavering faith, my latest scans show no trace of cancer. I'm completely healed!",
      author: "Robert K.",
      date: "2023-12-28",
      category: "Healing",
      likes: 789,
      featured: true,
    },
    {
      id: 6,
      title: "Found My Purpose in Ministry",
      content: "I felt lost and purposeless for years until I started volunteering at our local shelter. God revealed my calling to serve the homeless, and now I run a nonprofit that has helped hundreds find hope and homes.",
      author: "Sarah L.",
      date: "2023-12-25",
      category: "Calling",
      likes: 234,
      featured: false,
    },
  ];

  const categories = ["All", "Healing", "Marriage", "Finance", "Deliverance", "Education", "Calling"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
            Testimonies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Share how God has moved in your life and be encouraged by others' testimonies of His faithfulness
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Share Your Testimony
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Share Your Testimony</DialogTitle>
                <DialogDescription>
                  Tell us how God has worked in your life
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Testimony title" />
                <Textarea placeholder="Share your testimony..." rows={6} />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex gap-2">
                  <Button className="flex-1">Share Testimony</Button>
                  <Button variant="outline" className="flex-1">
                    Anonymous
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search testimonies..." className="pl-10" />
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

        {/* Featured Testimonies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Testimonies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonies.filter(t => t.featured).map((testimony) => (
              <Card key={testimony.id} className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Featured
                      </Badge>
                      <Badge variant="outline">{testimony.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{testimony.date}</span>
                    </div>
                  </div>
                  <CardTitle className="flex items-start gap-2">
                    <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    {testimony.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-4">
                    {testimony.content}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{testimony.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                        <Heart className="h-3 w-3 mr-1" />
                        {testimony.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Testimonies */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Recent Testimonies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonies.filter(t => !t.featured).map((testimony) => (
              <Card key={testimony.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{testimony.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{testimony.date}</span>
                    </div>
                  </div>
                  <CardTitle className="flex items-start gap-2 group-hover:text-primary transition-colors">
                    <Quote className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    {testimony.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {testimony.content}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{testimony.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                        <Heart className="h-3 w-3 mr-1" />
                        {testimony.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Testimonies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;