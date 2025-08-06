import React from "react";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));
const Cars = React.lazy(() => import("./pages/Cars"));
const Faq = React.lazy(() => import("./pages/FaQ"));

const ClientsReview = React.lazy(() => import("./pages/ClientsReview"));
import { AnimatePresence, motion } from "framer-motion";
import CarAvailabilityCalendar from "./pages/CarAvaibility";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  const element = useRoutes([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          index: true,
          element: (
            <PageWrapper>
              <Home></Home>
            </PageWrapper>
          ),
        },
        {
          path: "cars",
          element: (
            <PageWrapper>
              {" "}
              <Cars />
            </PageWrapper>
          ),
        },
        {
          path: "faq",
          element: (
            <PageWrapper>
              {" "}
              <Faq />
            </PageWrapper>
          ),
        },
        {
          path: "clientsreview",
          element: (
            <PageWrapper>
              {" "}
              <ClientsReview />
            </PageWrapper>
          ),
        },
        {
          path: "calendar",
          element: (
            <PageWrapper>
              {" "}
              <CarAvailabilityCalendar></CarAvailabilityCalendar>
            </PageWrapper>
          ),
        },
        {
          path: "contact",
          element: (
            <PageWrapper>
              <Contact />
            </PageWrapper>
          ),
        },
      ],
    },
  ]);

  return (
    <AnimatePresence mode="wait">
      {" "}
      <React.Fragment key={location.pathname}>{element}</React.Fragment>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
