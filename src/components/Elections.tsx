import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Elections = () => {
  const schedule = [
    {
      title: "Last Election Day",
      subtitle: "Results were declared in January, 2025",
      date: "",
      variant: "warning" as const,
      label: "Listed",
    },
  ];

  return (
    <section id="elections" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Elections</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {schedule.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm font-medium mb-1">{item.subtitle}</p>
                  {item.date && <p className="text-xs text-muted-foreground">{item.date}</p>}
                </div>
                <Button variant={item.variant} size="sm" className="w-fit">
                  {item.label}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Elections;
