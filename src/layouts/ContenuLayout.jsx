import Header from "../components/Header";
import SideBarre from "../components/SideBarre";

export default function ContenuLayout({ children }) {
  return (
    <div className="contenu-layout">
      <Header />
      {children}
      <SideBarre />
    </div>
  );
}
