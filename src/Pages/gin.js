import Header from "../components/Header";

export default function Gin() {
  return (
    <section id="gin">
      <Header />
      <div className="card-section">
        <div className="card">
          <h3 className="card-title">Gin Drink Title</h3>
          <div className="card-group">A few ingredients go here.</div>
        </div>
        <div className="card">
          <h3 className="card-title">Gin Drink Title 2</h3>
          <div className="card-group">A few ingredients go here.</div>
        </div>
      </div>
    </section>
  );
}
