import { Heart, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-sanctuary text-sanctuary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-divine" />
              <span className="text-2xl font-bold bg-gradient-to-r from-divine to-hope bg-clip-text text-transparent">
                FaithConnect
              </span>
            </div>
            <p className="text-sanctuary-foreground/80 mb-6 leading-relaxed">
              A sacred space where believers come together to share faith, grow spiritually, and support one another through prayer, devotions, and community connection.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-sanctuary-foreground/60 hover:text-divine">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-sanctuary-foreground/60 hover:text-divine">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-sanctuary-foreground/60 hover:text-divine">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-sanctuary-foreground/60 hover:text-divine">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sanctuary-foreground mb-4">Community</h3>
            <ul className="space-y-3 text-sanctuary-foreground/80">
              <li>
                <a href="#" className="hover:text-divine transition-colors">
                  Daily Devotions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-divine transition-colors">
                  Prayer Wall
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-divine transition-colors">
                  Testimonies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-divine transition-colors">
                  Bible Study
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sanctuary-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sanctuary-foreground/80">
              <li>
                <a href="#" className="hover:text-divine transition-colors">
                  Sermons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-divine transition-colors">
                  Prayer Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-divine transition-colors">
                  Faith Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-divine transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sanctuary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sanctuary-foreground/60 text-sm">
              © 2024 FaithConnect. Built with love and powered by faith.
            </p>
            <div className="flex gap-6 text-sm text-sanctuary-foreground/60">
              <a href="#" className="hover:text-divine transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-divine transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-divine transition-colors">
                Community Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;