import { Card } from "@/components/ui/card";

const governingMembers = [
  "Smt. Deepika Nagpal – President",
  "Sh. Sushil Kumar Sharma – Vice President",
  "Sh. Rajesh Khattar – Secretary",
  "Smt. Sudarshana Kashyap – Treasurer",
  "Dr. Madhukar Krishna",
  "Sh. Ravikant Arya",
  "Smt. Prabha Gupta – Woman Member",
  "Smt. Urmil Bharadwaj – Woman Member",
  "Smt. Sangeeta Rani – Woman Member",
];

const GoverningBody = () => {
  return (
    <section id="governing-body" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Managing Committee
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {governingMembers.map((name, index) => (
            <Card key={index} className="p-6">
              <p className="text-sm text-foreground">{name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoverningBody;
