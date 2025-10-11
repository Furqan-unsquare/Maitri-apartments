import React from "react";
import { Calendar } from "lucide-react";

const historyContent = [
  "After partition of India in 1947, Delhi’s population increased manifold as lakhs of refugees came to Delhi and other places. Heavy migration posed a big challenge to local authorities to resettle refugees in a planned land development and management system. Delhi Development Authority (DDA) was established in 1957 to undertake organized planned development and growth of Delhi.",
  "Our residential society is a result of this policy. DDA acquires the land, develops it, and creates basic facilities, then auctions or allots plots for construction. Due to increasing pressure for land, DDA started constructing flats and encouraged the public to form societies for purchasing land to construct group apartments.",
  "Our housing society was formed in 1971 by officers of the Central Information Service (C.I.S now Indian Information Service). Initially 100 members enrolled but finally 60 members remained, on the basis of which our Society was allotted one hectare of land on which the housing complex was built.",
  "Architect Sikand and Associates was appointed and R.C. Bhatia & Co. as contractor. Flats were divided into two categories HIG-1 and HIG-2 to accommodate members’ affordability. Construction started in 1982 and completed by end of 1984, first flat ready for inspection was flat no. 17.",
  "Flats were allotted through a draw of lots in presence of DDA officials. The first member to move in was Sh. P.N. Tripathi to flat no. 17, followed by other members. Initially, infrastructure like bus service and neighbouring markets were limited. The DDA sports complex was constructed in the late 1980s near our Society."
];

const HistoryMaitri = () => {
  return (
    <section id="history-maitri" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">History of Maitri Apartments</h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-4 max-h-[700px] overflow-y-auto">
          {historyContent.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed text-sm md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryMaitri;
