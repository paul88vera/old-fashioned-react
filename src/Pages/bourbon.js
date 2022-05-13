import Header from "../components/Header";

export default function Bourbon() {
  return (
    <section id="bourbon">
      <Header />
      <div className="card-section">
        <div className="card">
          <h3 className="card-title">Bourbon Drink Title</h3>
          <div className="card-group">A few ingredients go here.</div>
        </div>
      </div>
    </section>
  );
}
