import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const RulesRegulations = () => {
  return (
    <section id="rules-&-regulations" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Bylaws</h2>

        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <FileText className="text-primary mt-1" size={20} />
              <div>
                <h3 className="text-lg font-bold mb-1">Bylaws (PDF)</h3>
                <p className="text-sm text-muted-foreground">
                  House rules, amenities usage, and code of conduct.
                </p>
              </div>
            </div>
            <a href="/By-laws_merged.pdf" download>
              <Button variant="success" size="sm" className="w-fit">
                Download
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RulesRegulations;
