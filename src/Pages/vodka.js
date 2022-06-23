import Header from "../components/Header";

export default function Vodka() {
  return (
    <section id="vodka">
      <Header />
      <div className="drink-title">
        <img src="https://unsplash.it/1700/300" alt="" />
        <div className="drink-info">
          <h1>Vodka</h1>
          <p>
            Vodka is a clear distilled alcoholic beverage. Different varieties
            originated in Poland, Russia, and Sweden. Vodka is composed mainly
            of water and ethanol but sometimes with traces of impurities and
            flavourings. Traditionally, it is made by distilling liquid from
            fermented cereal grains.
          </p>
        </div>
      </div>
      <div className="card-section">
        <div className="card">
          <img src="https://unsplash.it/200/200" alt="" />
          <h3 className="card-title">Vodka Drink Title</h3>
          <div className="card-group">A few ingredients go here.</div>
        </div>
      </div>
    </section>
  );
}
