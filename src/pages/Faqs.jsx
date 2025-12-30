import React from "react";

const faqs = [
  {
    q: "How can I order food?",
    a: "You can order food easily by selecting items and adding them to your cart.",
  },
  {
    q: "What payment methods are available?",
    a: "We accept cash on delivery and online payment.",
  },
  {
    q: "Can I cancel my order?",
    a: "Yes, you can cancel your order before it is prepared.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1F1D2B] py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-orange-500">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2A2838] p-6 rounded-xl shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
