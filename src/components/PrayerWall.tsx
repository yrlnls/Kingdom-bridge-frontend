import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Plus } from "lucide-react";
import prayerImage from "@/assets/prayer-hands.jpg";

const PrayerWall = () => {
  const prayers = [
    {
      id: 1,
      title: "Healing for my grandmother",
      description: "Please pray for my grandmother's recovery from surgery. She's been in the hospital for a week and needs strength.",
      author: "Sarah M.",
      prayedCount: 47,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      title: "Guidance in new job",
      description: "Starting a new position next week and feeling nervous. Pray for wisdom and confidence as I begin this journey.",
      author: "Michael K.",
      prayedCount: 23,
      timeAgo: "5 hours ago",
    },
    {
      id: 3,
      title: "Family reconciliation",
      description: "My family has been struggling with division. Please pray for healing, forgiveness, and restored relationships.",
      author: "Jennifer L.",
      prayedCount: 89,
      timeAgo: "1 day ago",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-peace/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Prayer <span className="text-divine">Wall</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lift each other up in prayer. Share your requests and pray for others in our community of faith.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Prayer Image */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-0 shadow-sanctuary">
              <img 
                src={prayerImage} 
                alt="Hands in prayer" 
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  Join in Prayer
                </h3>
                <p className="text-muted-foreground mb-4">
                  Share your heart and find strength in our community's prayers.
                </p>
                <Button variant="divine" className="w-full">
                  <Plus className="h-4 w-4" />
                  Add Prayer Request
                </Button>
              </div>
            </Card>
          </div>

          {/* Prayer Requests */}
          <div className="lg:col-span-2 space-y-6">
            {prayers.map((prayer) => (
              <Card key={prayer.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {prayer.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {prayer.timeAgo}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {prayer.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-card-foreground">
                    — {prayer.author}
                  </span>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="peace" size="sm">
                      <Heart className="h-4 w-4" />
                      Pray ({prayer.prayedCount})
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4" />
                      Encourage
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            
            <div className="text-center pt-8">
              <Button variant="sanctuary" size="lg">
                View All Prayer Requests
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerWall;