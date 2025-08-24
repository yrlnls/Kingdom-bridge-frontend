import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Clock, MessageSquare, Heart, Star } from "lucide-react";
import Navigation from "@/components/Navigation";

const Community = () => {
  const events = [
    {
      id: 1,
      title: "Weekly Bible Study",
      description: "Join us for an in-depth study of the Book of Romans. All are welcome!",
      date: "2024-01-20",
      time: "7:00 PM",
      location: "Fellowship Hall",
      attendees: 24,
      category: "Bible Study",
    },
    {
      id: 2,
      title: "Youth Ministry Gathering",
      description: "Fun activities, worship, and discussion for ages 13-18.",
      date: "2024-01-22",
      time: "6:30 PM",
      location: "Youth Center",
      attendees: 18,
      category: "Youth",
    },
    {
      id: 3,
      title: "Community Service Day",
      description: "Help serve meals at the local homeless shelter.",
      date: "2024-01-25",
      time: "10:00 AM",
      location: "Hope Shelter",
      attendees: 32,
      category: "Service",
    },
  ];

  const members = [
    {
      id: 1,
      name: "Pastor Sarah Johnson",
      role: "Senior Pastor",
      bio: "Leading our community with love and wisdom for over 10 years.",
      avatar: "/placeholder.svg",
      posts: 45,
      prayers: 12,
      testimonies: 8,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Youth Pastor",
      bio: "Passionate about helping young people grow in their faith.",
      avatar: "/placeholder.svg",
      posts: 23,
      prayers: 8,
      testimonies: 5,
    },
    {
      id: 3,
      name: "Sister Mary Elizabeth",
      role: "Prayer Coordinator",
      bio: "Dedicated to lifting up our community through prayer.",
      avatar: "/placeholder.svg",
      posts: 34,
      prayers: 67,
      testimonies: 12,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Worship Leader",
      bio: "Creating an atmosphere of worship and praise.",
      avatar: "/placeholder.svg",
      posts: 19,
      prayers: 15,
      testimonies: 7,
    },
  ];

  const discussions = [
    {
      id: 1,
      title: "How do you maintain faith during difficult times?",
      author: "Jennifer M.",
      replies: 23,
      lastActivity: "2 hours ago",
      category: "Faith",
    },
    {
      id: 2,
      title: "Favorite Bible verses for encouragement",
      author: "Marcus T.",
      replies: 31,
      lastActivity: "4 hours ago",
      category: "Scripture",
    },
    {
      id: 3,
      title: "Prayer request: New job interview",
      author: "Emma L.",
      replies: 12,
      lastActivity: "6 hours ago",
      category: "Prayer",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
            Community
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow believers, join events, and grow together in faith
          </p>
        </div>

        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <Button>Create Event</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button className="w-full">Join Event</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Community Members</h2>
              <Button variant="outline">View All Members</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {members.map((member) => (
                <Card key={member.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary text-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {member.name}
                        </CardTitle>
                        <p className="text-primary font-medium">{member.role}</p>
                        <CardDescription className="mt-1">{member.bio}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span>{member.posts} posts</span>
                        <span>{member.prayers} prayers</span>
                        <span>{member.testimonies} testimonies</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Community Discussions</h2>
              <Button>Start Discussion</Button>
            </div>
            
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="group hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{discussion.category}</Badge>
                          <span className="text-sm text-muted-foreground">by {discussion.author}</span>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors cursor-pointer">
                          {discussion.title}
                        </CardTitle>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 mb-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Groups Tab */}
          <TabsContent value="groups" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Ministry Groups</h2>
              <Button>Create Group</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Young Adults Ministry
                  </CardTitle>
                  <CardDescription>
                    For adults ages 18-35 seeking community and spiritual growth
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>42 members</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>4.8</span>
                    </div>
                  </div>
                  <Button className="w-full">Join Group</Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Women's Bible Study
                  </CardTitle>
                  <CardDescription>
                    Weekly study and fellowship for women of all ages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>28 members</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>4.9</span>
                    </div>
                  </div>
                  <Button className="w-full">Join Group</Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Men's Fellowship
                  </CardTitle>
                  <CardDescription>
                    Brotherhood, accountability, and spiritual growth for men
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>35 members</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>4.7</span>
                    </div>
                  </div>
                  <Button className="w-full">Join Group</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;