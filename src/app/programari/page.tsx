import Navbar from "../../components/Navbar";

const navLabels: Record<string, string> = {
  home: "Acasă",
  services: "Servicii",
  appointments: "Programări",
  contact: "Contact"
};

export default function Programari() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-24 px-2 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="w-full max-w-3xl">
        <Navbar t={(key) => navLabels[key] || key} />
      </div>
      <section className="flex flex-col items-center gap-6 mt-16 w-full">
        <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800 text-center mb-4 animate-bounce">Programări</h2>
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 w-full max-w-md flex flex-col gap-4 items-center">
          <p className="text-blue-900">Calendarul interactiv și logica de programări vor fi adăugate în pașii următori.<br/>Vor fi afișate doar intervalele disponibile conform programului de lucru.</p>
        </div>
      </section>
    </div>
  );
}
