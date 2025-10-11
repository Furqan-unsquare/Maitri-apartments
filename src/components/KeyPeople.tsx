import { Card } from "@/components/ui/card";
import person1 from "@/assets/people/event1.jpg";
import person2 from "@/assets/people/event5.jpg";
import person3 from "@/assets/people/event8.jpg";

const KeyPeople = () => {
  const people = [
    {
      name: "Deepika Nagpal",
      role: "President",
      image: person3,
    },
    {
      name: "S.K. Sharma",
      role: "Vice President",
      image: person1,
    },
    {
      name: "Rajesh Kumar",
      role: "General Secretary",
      image: person2,
    },
  ];

  return (
    <section id="key-people" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Key People</h2>
        <p className="text-muted-foreground mb-8">Reach out to the right person for quick assistance.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <Card key={index} className="p-6 flex items-center gap-4 w-full">
              {/* Image on left */}
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name & Role on right */}
              <div className="text-left">
                <h3 className="font-bold text-lg mb-1">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPeople;
