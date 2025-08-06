const FAQ = () => {
  const faqs = [
    {
      question: "Jak mogę zarezerwować samochód?",
      answer:
        "Rezerwacji możesz dokonać online na naszej stronie w mniej niż 2 minuty – wystarczy kilka kliknięć.",
    },
    {
      question: "Czy muszę wpłacać kaucję?",
      answer:
        "Nie, nie pobieramy żadnej kaucji. Chcemy, aby wypożyczenie było jak najprostsze.",
    },
    {
      question: "Jakie dokumenty są wymagane?",
      answer:
        "Wystarczy ważne prawo jazdy i dowód osobisty. Nie wymagamy karty kredytowej.",
    },
    {
      question: "Czy mogę odebrać auto w innym mieście?",
      answer:
        "Tak, oferujemy elastyczny odbiór – za niewielką opłatą dowieziemy auto nawet pod Twój dom.",
    },
    {
      question: "Czy auta są ubezpieczone?",
      answer:
        "Tak, wszystkie pojazdy są w pełni ubezpieczone – OC, AC i Assistance są w cenie.",
    },
    {
      question: "Co jeśli auto się zepsuje?",
      answer:
        "W razie awarii zapewniamy auto zastępcze lub pomoc drogową 24/7 – bez dodatkowych kosztów.",
    },
    {
      question: "Czy mogę podróżować za granicę?",
      answer:
        "Tak, ale wymaga to wcześniejszego zgłoszenia. Niektóre kraje mogą podlegać ograniczeniom.",
    },
    {
      question: "Czy są zniżki przy dłuższym wynajmie?",
      answer:
        "Tak! Oferujemy atrakcyjne rabaty przy wynajmie na 7 dni lub dłużej – skontaktuj się z nami po szczegóły.",
    },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Najczęściej zadawane pytania (FAQ)
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
