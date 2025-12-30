import React from "react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1F1D2B] py-16 px-6">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Help Center
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-orange-50 dark:bg-[#2A2838] rounded-xl">
          <h2 className="font-semibold text-xl mb-2">Order Issues</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Having problems with your order? We’re here to help.
          </p>
        </div>

        <div className="p-6 bg-orange-50 dark:bg-[#2A2838] rounded-xl">
          <h2 className="font-semibold text-xl mb-2">Payment Support</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Questions about payment methods or refunds.
          </p>
        </div>

        <div className="p-6 bg-orange-50 dark:bg-[#2A2838] rounded-xl">
          <h2 className="font-semibold text-xl mb-2">Account Settings</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your profile and personal information.
          </p>
        </div>

        <div className="p-6 bg-orange-50 dark:bg-[#2A2838] rounded-xl">
          <h2 className="font-semibold text-xl mb-2">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Still need help? Reach out to our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
