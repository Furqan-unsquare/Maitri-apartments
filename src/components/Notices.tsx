import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Notices = () => {
  const notices = [
    {
      title: "Water Tank Cleaning",
      details: "Scheduled on Oct 15, 7:00 AM - 4:00 PM. Expect low water pressure.",
      variant: "reminder" as const,
      label: "Reminder",
    },
    {
      title: "Clubhouse Renovation",
      details: "Phase 2 begins Nov 8. Some areas will be restricted.",
      variant: "noted" as const,
      label: "Noted",
    },
    {
      title: "Gate Security Upgrade",
      details: "New access card distribution on Oct 20, 9:00-7:00 AM.",
      variant: "noted" as const,
      label: "Today",
    },
  ];

  return (
    <section id="notices" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Notices</h2>
        <p className="text-muted-foreground mb-8">
          Important announcements and maintenance schedules.
        </p>

        <div className="space-y-4">
          {notices.map((notice, index) => (
            <Card key={index} className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground">{notice.details}</p>
                </div>
                <Button variant={notice.variant} size="sm" className="w-fit">
                  {notice.label}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notices;
