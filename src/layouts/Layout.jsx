import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";
import ScrollButton from "../components/navigation/ScrollButton";
import { ScrollProgress } from "../components/ui/ScrollProgress";

const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ScrollProgress className="top-[63px]" />

      <main className="mt-6 min-h-screen flex flex-col justify-center">
        {children}
        <ScrollButton />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
