import { Card } from "@/components/ui/card";

const membershipDocuments = [
  "Covering letter requesting membership",
  "The Delhi Co-Operative Society Rules, 2007 Form nos. 20 & 21",
  "Photocopy of registration copy/Conveyance Deed",
  "Photocopy of Allotment Letter",
  "Photocopy of Possession Letter",
  "Photocopy of Aadhar card",
  "Photocopy of PAN card",
  "Two passport size photographs",
  "Cheque of Rs. 4000/-",
  "Photocopy of Share Certificate (original share certificate has to be surrendered, once member is approved by MC)",
];

// PDF files in public folder
const membershipPDFs = [
  { name: "Membership Form", file: "/rcs_form_20.pdf" },
  { name: "Affidavit Form", file: "/rcs_form_21.pdf" },
];

const MembershipDocuments = () => {
  return (
    <section id="membership-documents" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Documents Required for Membership
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {membershipDocuments.map((doc, index) => (
            <Card key={index} className="p-6">
              <p className="text-sm text-foreground">{doc}</p>
            </Card>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Download Forms</h3>
        <div className="flex flex-wrap gap-4">
          {membershipPDFs.map((pdf, index) => (
            <a
              key={index}
              href={pdf.file}
              download
              className="px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              {pdf.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipDocuments;
