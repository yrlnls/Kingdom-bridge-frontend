import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, MessageSquare, Plus, Search, User, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const PrayerWallPage = () => {
  const prayers = [
    {
      id: 1,
      title: "Healing for My Mother",
      description: "Please pray for my mother who is battling cancer. She starts chemotherapy next week and we're trusting God for complete healing.",
      author: "Sarah M.",
      timeAgo: "2 hours ago",
      prayedCount: 47,
      encouragementCount: 12,
      category: "Health",
      urgent: true,
    },
    {
      id: 2,
      title: "Job Interview Tomorrow",
      description: "I have an important job interview tomorrow that could change my family's financial situation. Praying for God's favor and wisdom.",
      author: "Michael R.",
      timeAgo: "5 hours ago",
      prayedCount: 23,
      encouragementCount: 8,
      category: "Work",
      urgent: false,
    },
    {
      id: 3,
      title: "Relationship Restoration",
      description: "My marriage is going through a difficult time. Please pray for healing, forgiveness, and restoration in our relationship.",
      author: "Anonymous",
      timeAgo: "1 day ago",
      prayedCount: 89,
      encouragementCount: 25,
      category: "Family",
      urgent: false,
    },
    {
      id: 4,
      title: "College Decision",
      description: "I'm trying to decide between two colleges and need God's guidance for my future. Pray for clarity and peace in this decision.",
      author: "Emma L.",
      timeAgo: "1 day ago",
      prayedCount: 34,
      encouragementCount: 15,
      category: "Education",
      urgent: false,
    },
    {
      id: 5,
      title: "Financial Breakthrough",
      description: "Our family is facing financial hardship after job loss. Trusting God to provide and open new doors of opportunity.",
      author: "David & Jennifer K.",
      timeAgo: "2 days ago",
      prayedCount: 156,
      encouragementCount: 42,
      category: "Finance",
      urgent: true,
    },
    {
      id: 6,
      title: "Recovery from Surgery",
      description: "Please pray for my quick recovery from surgery and that there are no complications. Thank you for your prayers.",
      author: "Robert H.",
      timeAgo: "3 days ago",
      prayedCount: 67,
      encouragementCount: 18,
      category: "Health",
      urgent: false,
    },
  ];

  const categories = ["All", "Health", "Work", "Family", "Education", "Finance", "Spiritual"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
            Prayer Wall
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Share your prayer requests and join our community in lifting each other up in prayer
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Submit Prayer Request
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Submit Prayer Request</DialogTitle>
                <DialogDescription>
                  Share your prayer need with our loving community
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Prayer request title" />
                <Textarea placeholder="Describe your prayer need..." rows={4} />
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
                  <Button className="flex-1">Submit Request</Button>
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
            <Input placeholder="Search prayer requests..." className="pl-10" />
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

        {/* Prayer Requests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {prayers.map((prayer) => (
            <Card key={prayer.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{prayer.category}</Badge>
                    {prayer.urgent && (
                      <Badge variant="destructive" className="bg-red-500/10 text-red-600 border-red-200">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{prayer.timeAgo}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {prayer.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {prayer.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>{prayer.author}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>{prayer.prayedCount} prayed</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                      <span>{prayer.encouragementCount}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="group-hover:bg-red-50 group-hover:text-red-600">
                      <Heart className="h-3 w-3 mr-1" />
                      Pray
                    </Button>
                    <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 group-hover:text-blue-600">
                      <MessageSquare className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Prayer Requests
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrayerWallPage;