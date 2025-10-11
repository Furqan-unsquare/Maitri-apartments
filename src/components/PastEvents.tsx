import { useState, useEffect } from 'react';

interface EventImage {
  src: string;
  alt: string;
}

interface EventCategory {
  name: string;
  images: EventImage[];
}

const PastEvents = () => {
  const [events, setEvents] = useState<EventCategory[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  // Define custom names for each event folder here
  const EVENT_NAMES: Record<string, string> = {
    'event1': 'Annual Conference 2023',
    'event2': 'Developer Workshop',
    'event3': 'Community Meetup',
    'event4': 'Tech Summit',
    'event5': 'Hackathon 2024',
    'event6': 'Innovation Day',
    'event7': 'Networking Event',
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Dynamically import all images from events subfolders - adjust path if needed (e.g., '/src/assets' without @ if alias not configured)
        const modules = import.meta.glob('@/assets/events/*/*.{jpg,jpeg,png,gif,webp}', { eager: true });
        
        console.log('Glob modules:', Object.entries(modules)); // Debug log to check if images are found

        const eventsMap = new Map<string, EventImage[]>();

        Object.entries(modules).forEach(([path, module]) => {
          // Adjust regex if path structure differs (e.g., full path like '/src/assets/events/event1/img.jpg')
          const match = path.match(/events\/([^\/]+)\//);
          if (match) {
            const folder = match[1];
            const imageName = path.split('/').pop()?.replace(/\.[^/.]+$/, "") || 'Event image'; // Clean filename for alt
            const image: EventImage = {
              src: (module as { default: string }).default,
              alt: `${folder} - ${imageName}`,
            };
            if (!eventsMap.has(folder)) {
              eventsMap.set(folder, []);
            }
            eventsMap.get(folder)?.push(image);
          }
        });

        // Convert to array and sort folders numerically if they follow 'eventN' pattern
        const eventsData: EventCategory[] = Array.from(eventsMap.entries())
          .filter(([, images]) => images.length > 0)
          .map(([folder, images]) => ({ 
            name: EVENT_NAMES[folder] || folder.replace(/event(\d+)/i, "Event $1"),
            images 
          }))
          .sort((a, b) => {
            const numA = parseInt(a.name.replace(/\D/g, ''), 10);
            const numB = parseInt(b.name.replace(/\D/g, ''), 10);
            return isNaN(numA) || isNaN(numB) ? a.name.localeCompare(b.name) : numA - numB;
          });

        setEvents(eventsData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const ImageSkeleton = () => (
    <div className="aspect-square bg-gray-200 animate-pulse rounded-lg"></div>
  );

  const ImagePlaceholder = ({ alt }: { alt: string }) => (
    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
      <span className="text-gray-400 text-sm">Image not found: {alt}</span>
    </div>
  );

  const ImageWithFallback = ({ src, alt }: EventImage) => {
    const [imgError, setImgError] = useState(false);
    return (
      <div className="aspect-square overflow-hidden rounded-lg relative">
        {imgError ? (
          <ImagePlaceholder alt={alt} />
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <section id="past-events" className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Past Events</h2>
          <p className="text-muted-foreground mb-8">A glimpse into our recent community gatherings.</p>
          {/* Skeleton for tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="px-4 py-2 bg-gray-200 animate-pulse rounded-md w-20 h-10"></div>
            ))}
          </div>
          {/* Skeleton grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ImageSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section id="past-events" className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Past Events</h2>
          <p className="text-muted-foreground mb-8">A glimpse into our recent community gatherings.</p>
          <div className="text-center py-12">
            <p className="text-gray-500">No events found. Check console for debug info.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="past-events" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Past Events</h2>
        <p className="text-muted-foreground mb-8">A glimpse into our recent community gatherings.</p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {events.map((event, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {event.name}
            </button>
          ))}
        </div>

        {/* Active Event Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {events[activeTab].images.map((image, idx) => (
            <ImageWithFallback key={idx} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;