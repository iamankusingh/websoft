"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Websoft?",
    answer:
      "Websoft Solution is Bhuj based Cable and OTT services provideing company.",
  },
  {
    question: "What Websoft provides?",
    answer:
      "Websoft provideds Broadband, OTT, Routers, Installation, and DishTv services to its customers.",
  },
  {
    question: "How much does websoft cost?",
    answer:
      "OTT bundle cost ₹399 per month. Broadband cost starts from ₹499 per month. DishTv plans start from ₹299 per month.",
  },
  {
    question: "How do i cancel?",
    answer:
      "You can cancel your subscription at any time through your account settings or by contacting our support team.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-6 md:my-0 p-8 lg:px-16 flex flex-col">
      <h3 className="text-2xl font-bold mb-8 text-gray-900">
        Frequently Asked Questions
      </h3>

      <div className="space-y-2">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="bg-white rounded-lg px-4">
              {/* Clickable Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium text-gray-800">
                  {item.question}
                </span>

                <Plus
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </button>

              {/* Answers */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
