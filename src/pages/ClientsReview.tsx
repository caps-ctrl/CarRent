const reviews = [
  {
    name: "Kasia Nowak",
    review:
      "Rewelacyjna obsługa i świetny stan techniczny auta. Rezerwacja zajęła mi dosłownie chwilę!",
    rating: 5,
  },
  {
    name: "Tomasz Kowalski",
    review:
      "Auto podstawione punktualnie, czyste i zatankowane. Na pewno skorzystam ponownie.",
    rating: 4,
  },
  {
    name: "Anna Wiśniewska",
    review:
      "Bardzo elastyczne podejście do klienta. Możliwość odbioru auta pod dom to ogromny plus.",
    rating: 5,
  },
  {
    name: "Marek Zawadzki",
    review:
      "Polecam każdemu. Szybko, bez zbędnych formalności i w przystępnej cenie.",
    rating: 4,
  },
];

const ClientsReview = () => {
  return (
    <div className="bg-neutral-950 text-white py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Opinie naszych klientów</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-neutral-800 rounded-xl p-6 shadow-md border border-neutral-700 hover:scale-[1.02] transition-transform"
            >
              <div className="text-lg font-semibold mb-2">{r.name}</div>
              <div className="text-yellow-400 mb-2">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
              <p className="text-gray-300 text-sm italic">"{r.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsReview;
