import tlo from "../assets/tlo.jpg";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {" "}
      <div
        className="absolute top-0 left-0 right-0  p-4 text-white border-b-[2px] border-white text-center   min-h-[48vh] max-h-[50vh]  "
        style={{
          backgroundImage: `url(${tlo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
        }}
      >
        <div className="p-10">
          <h1 className="text-4xl font-bold">Wypożyczalnia aut</h1>
          <p className="p-4 "> Znajdź idealny samochód na swoją podróż.</p>
        </div>
        <NavLink to={"/calendar"}>
          {" "}
          <button
            className="px-6 py-3 rounded-md font-semibold transition-colors cursor-pointer
              
              bg-black text-gray-200 hover:bg-white hover:text-black border-[0.2px] shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          >
            Sprawdz Dostep
          </button>
        </NavLink>
      </div>{" "}
      <div className="  border-white bg-neutral-900 text-white">
        <div className="pt-[40vh]">
          <div>
            <section className="bg-neutral-900 py-16 px-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wypożycz auto – szybko, bezpiecznie, wygodnie
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                Oferujemy nowoczesne, zadbane samochody dostępne od ręki.
                Minimum formalności, maksimum komfortu – jedź gdzie chcesz!
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="text-5xl mb-3">⚡</div>
                  <h2 className="text-xl font-semibold mb-1">
                    Szybka rezerwacja
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Zarezerwuj auto w mniej niż 2 minuty – w pełni online.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-5xl mb-3">🔒</div>
                  <h2 className="text-xl font-semibold mb-1">
                    100% Bezpieczeństwa
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Regularnie serwisowane auta i pełne ubezpieczenie w cenie.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-5xl mb-3">🛋️</div>
                  <h2 className="text-xl font-semibold mb-1">Pełna wygoda</h2>
                  <p className="text-gray-400 text-sm">
                    Minimum formalności i elastyczny odbiór auta – nawet pod
                    dom!
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-neutral-800 py-16 px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Dlaczego warto wybrać nas?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-300">
                <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                  <div className="text-5xl mb-4">🚘</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Nowoczesna flota
                  </h3>
                  <p>
                    Regularnie serwisowane, czyste i komfortowe samochody – od
                    miejskich po SUV-y.
                  </p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                  <div className="text-5xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold mb-2">Wsparcie 24/7</h3>
                  <p>
                    Masz pytania lub problem? Nasza infolinia działa przez całą
                    dobę.
                  </p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                  <div className="text-5xl mb-4">💸</div>
                  <h3 className="text-xl font-semibold mb-2">Brak kaucji</h3>
                  <p>
                    Wypożycz auto bez blokowania środków na karcie – zero
                    stresu.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
