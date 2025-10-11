import { Calendar, MapPin, Users, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import diwaliImage from "@/assets/diwali-event.jpg";
import yogaImage from "@/assets/yoga-event.jpg";

const CulturalEvents = () => {
  return (
    <section id="cultural-events" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Cultural Events</h2>
        <p className="text-muted-foreground mb-8">
          Upcoming events with dates, times, and brief descriptions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Diwali Mela */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-3">Diwali Mela</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                <span>Mon, Oct 20th • 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Central Courtyard</span>
              </div>
            </div>
            <img
              src={diwaliImage}
              alt="Diwali celebration"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Saanj, cultural performances, and fireworks. Families welcome.
            </p>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <Users size={16} className="mt-1 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Volunteer Signup</div>
                  <div className="text-xs text-muted-foreground">Help with stall organization</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={16} className="mt-1 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Cultural Participation</div>
                  <div className="text-xs text-muted-foreground">Performances and group events</div>
                </div>
              </div>
            </div>
            
          </Card>

          {/* Yoga Morning */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-3">Yoga Morning</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                <span>Sun, Nov 10 • 7:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Cloudless Lawn</span>
              </div>
            </div>
            <img
              src={yogaImage}
              alt="Yoga morning session"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Guided yoga session followed by healthy breakfast bowls.
            </p>
            
            <div className="mb-4">
              <Button variant="warning" size="sm" className="mb-3">
                Open to All Pass
              </Button>
            </div>
            
            {/* <Button variant="outline" className="w-full">
              Learn More
            </Button> */}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CulturalEvents;
