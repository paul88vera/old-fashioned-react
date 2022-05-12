import Header from "../components/Header";

export default function Gin() {
  return (
    <section id="gin">
      <Header />
      <div className="card-section">
        <div className="card">
          <h3 className="card-title">Drink Title</h3>
          <ul className="card-group">
            <li>A</li>
            <li>Few</li>
            <li>Ingredients</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-title">Drink Title 2</h3>
          <ul className="card-group">
            <li>A</li>
            <li>Few</li>
            <li>Ingredients</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
