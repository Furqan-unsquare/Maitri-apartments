import React from "react";

const subCommittees = [
  {
    name: "Parking Committee",
    members: [
      "Sh. Arun Nagpal",
      "Sh. Ravikant Arya",
      "Sh. Ritesh Malhotra",
      "Sh. Ravi",
      "Sh. Sumit Chatterjee",
      "Sh. Apoorv"
    ],
    description: "Manages parking allocations and related facilities for residents."
  },
  {
    name: "CCTV & Security Committee",
    members: [
      "Sh. Arun Nagpal",
      "Sh. Ravikant Arya",
      "Sh. Ritesh Malhotra",
      "Sh. Ravi",
      "Sh. Sumit Chatterjee",
      "Sh. Apoorv",
      "Sh. Rajesh Khattar",
      "Sh. S.K. Sharma",
      "Sh. Vikrant Bharadwaj"
    ],
    description: "Oversees CCTV systems and general security management of the society."
  },
  {
    name: "Cleanliness Committee",
    members: ["Sh. Prateek Abrol", "Sh. Rajiv", "Sh. Ritesh Malhotra", "Dr. Madhukar Krishna"],
    description: "Maintains cleanliness and hygiene across the society premises."
  },
  {
    name: "Guards and Fire Safety",
    members: ["Sh. Rajesh Khattar", "Sh. S.K. Sharma", "Sh. Vikrant Bharadwaj"],
    description: "Ensures proper deployment of security guards and fire safety measures."
  },
  {
    name: "Cultural Committee",
    members: ["Smt. Anjali Batra", "Smt. Deepika Nagpal", "Smt. Pooja Bharadwaj", "Smt. Yashita Arya", "Smt. Anita Khattar"],
    description: "Organizes festivals, cultural events, and community engagement programs."
  },
];

const SubCommittees = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sub-Committees</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subCommittees.map((committee, index) => {
          const isLast = index === subCommittees.length - 1;
          return (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border border-teal-200 hover:shadow-lg transition-all duration-300 ${
                isLast ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{committee.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{committee.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {committee.members.map((member, idx) => (
                  <p key={idx} className="text-sm text-gray-700">
                    • {member}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubCommittees;
