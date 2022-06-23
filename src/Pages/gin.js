import Header from "../components/Header";

export default function Gin() {
  return (
    <section id="gin">
      <Header />
      <div className="drink-title">
        <img src="https://unsplash.it/1700/300" alt="" />
        <div className="drink-info">
        <h1>Gin</h1>
        <p>
          Gin is a distilled alcoholic drink that derives its predominant
          flavour from juniper berries. Gin originated as a medicinal liquor
          made by monks and alchemists across Europe, particularly in southern
          Italy, Flanders and the Netherlands, to provide aqua vita from
          distillates of grapes and grains.
        </p>
        </div>
      </div>
      <div className="card-section">
        <div className="card">
          <img src="https://unsplash.it/200/200" alt="" />
          <h3 className="card-title">Gin Drink Title</h3>
          <div className="card-group">A few ingredients go here.</div>
        </div>
        <div className="card">
          <img src="https://unsplash.it/200/200" alt="" />
          <h3 className="card-title">Gin Drink Title 2</h3>
          <div className="card-group">A few ingredients go here.</div>
        </div>
      </div>
    </section>
  );
}
