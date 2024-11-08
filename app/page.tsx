import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import Skills from "./components/skills";
import "./rizkyhu-style.css"

export default function Gallery() {
  return (
    <section className="text-center">
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
    </section>
  );
}