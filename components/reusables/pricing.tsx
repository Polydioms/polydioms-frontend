import React, { useState } from "react";

const Pricing = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const courses = [
    {
      title: "Trial",
      price: "Free",
      features: [
        "Access to course content",
        "Limited resources",
        "Certificate of completion",
      ],
    },
    {
      title: "Basic",
      price: "$19.99",
      features: [
        "Access to course content",
        "Downloadable resources",
        "Certificate of completion",
      ],
    },
    {
      title: "Pro",
      price: "$39.99",
      features: [
        "Access to course content",
        "Downloadable resources",
        "Certificate of completion",
        "Live Q&A sessions",
        "Priority support",
      ],
    },
    {
      title: "Pro",
      price: "$39.99",
      features: [
        "Access to course content",
        "Downloadable resources",
        "Certificate of completion",
        "Live Q&A sessions",
        "Priority support",
      ],
    },
    {
      title: "Pro",
      price: "$39.99",
      features: [
        "Access to course content",
        "Downloadable resources",
        "Certificate of completion",
        "Live Q&A sessions",
        "Priority support",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`bg-white p-8 shadow-lg transition-all duration-300 ${
                selectedIndex === index ? "border-l-4 border-slate-500" : ""
              } hover:shadow-xl transform hover:-translate-y-1 cursor-pointer`}
              onClick={() => setSelectedIndex(index)}
            >
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                {course.title}
              </h3>
              <h2 className="text-5xl font-medium text-gray-800 mb-4">
                {course.price}
              </h2>
              <ul className="list-disc list-inside">
                {course.features.map((feature) => (
                  <li key={feature} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
