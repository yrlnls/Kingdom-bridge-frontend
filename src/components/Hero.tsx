import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, BookOpen, Users, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-spiritual.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-sanctuary/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-sanctuary-foreground mb-6 leading-tight">
            Connect in <span className="bg-gradient-to-r from-divine to-hope bg-clip-text text-transparent">Faith</span>
          </h1>
          <p className="text-xl md:text-2xl text-sanctuary-foreground/90 mb-8 leading-relaxed">
            A sacred space for devotions, prayers, and spiritual growth. Join our community of faith and find strength in shared belief.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="divine" size="lg" className="text-lg px-8 py-4">
              Join Our Community
            </Button>
            <Button variant="peace" size="lg" className="text-lg px-8 py-4">
              Explore Devotions
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="bg-card/90 backdrop-blur-sm p-6 text-center border-0 shadow-sanctuary">
              <div className="bg-divine/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-divine-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Daily Devotions</h3>
              <p className="text-muted-foreground text-sm">Inspiring spiritual content for daily growth</p>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm p-6 text-center border-0 shadow-sanctuary">
              <div className="bg-hope/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-hope-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Prayer Wall</h3>
              <p className="text-muted-foreground text-sm">Share and lift each other in prayer</p>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm p-6 text-center border-0 shadow-sanctuary">
              <div className="bg-peace/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-peace-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Testimonies</h3>
              <p className="text-muted-foreground text-sm">Share God's work in your life</p>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm p-6 text-center border-0 shadow-sanctuary">
              <div className="bg-sanctuary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-sanctuary-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Community</h3>
              <p className="text-muted-foreground text-sm">Connect with fellow believers</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;