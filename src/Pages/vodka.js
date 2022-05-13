import Header from "../components/Header";

export default function Vodka() {
  return (
    <section id="vodka">
      <Header />
      <div className="card-section">
        <div className="card">
          <h3 className="card-title">Vodka Drink Title</h3>
          <div className="card-group">A few ingredients go here.</div>
        </div>
      </div>
    </section>
  );
}
