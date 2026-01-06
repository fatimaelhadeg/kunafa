import React from "react";

// Foire aux questions
const faqs = [
  {
    q: "Comment puis-je commander de la nourriture ?",
    a: "Vous pouvez commander facilement en sélectionnant les articles et en les ajoutant à votre panier.",
  },
  {
    q: "Quels moyens de paiement sont disponibles ?",
    a: "Nous acceptons le paiement à la livraison et le paiement en ligne.",
  },
  {
    q: "Puis-je annuler ma commande ?",
    a: "Oui, vous pouvez annuler votre commande avant qu'elle ne soit préparée.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1F1D2B] py-16 px-6">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold text-center mb-10 text-orange-500">
        Questions Fréquemment Posées
      </h1>

      {/* Liste des questions */}
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
