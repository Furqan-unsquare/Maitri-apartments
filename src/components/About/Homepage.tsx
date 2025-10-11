import React from "react";
import { BookOpen } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      {/* Hero + Story Section */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Maitri RWA</h1>
            <p className="text-xl text-teal-50 max-w-3xl mx-auto">
              Building a stronger community together since 1995
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
          </div>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p>
              Maitri Apartments is a cooperative group housing society located in A-4 Block, Paschim Vihar, West Delhi. 
              Established in 1971 by officers of the Central Information Service (now Indian Information Service), 
              the society was formed with the goal of creating a peaceful, well-connected residential community in the capital.
            </p>
            <p>
              As part of Delhi’s post-independence urban planning, the Delhi Development Authority (DDA) allotted one hectare 
              of land to the society in the then-developing Paschim Vihar area. Designed by Sikand and Associates and built 
              by R.C. Bhatia & Co., construction began in 1982 and was completed by the end of 1984. Despite challenges such 
              as limited infrastructure and material shortages at the time, the flats were officially allotted in early 1985.
            </p>
            <p>
              Over the years, Maitri Apartments has grown into a well-maintained and vibrant community of 60 flats. The locality 
              has developed into a major residential hub, offering excellent connectivity via the Paschim Vihar West Metro 
              Station and Outer Ring Road. The area is home to reputed schools, hospitals like Action Balaji, and shopping 
              centres such as Jwala Heri Market.
            </p>
            <p>
              Located next to the DDA Sports Complex and surrounded by parks, Maitri Apartments offers residents a blend of 
              urban convenience and green, peaceful living. The society continues to thrive as a cooperative community, fostering 
              harmony, safety, and quality of life for all residents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
