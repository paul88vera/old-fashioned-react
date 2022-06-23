import Header from "../components/Header";

export default function Bourbon() {
  return (
    <section id="bourbon">
      <Header />
      <div className="drink-title">
        <img src="https://unsplash.it/1700/300" alt="" />
        <div className="drink-info">
          <h1>Bourbon</h1>
          <p>
            Bourbon is a type of American whiskey, a barrel-aged distilled
            liquor made primarily from corn. The name derives from the French
            Bourbon dynasty, although the precise inspiration is uncertain;
            contenders include Bourbon County in Kentucky and Bourbon Street in
            New Orleans, both of which are named after the dynasty.{" "}
          </p>
        </div>
      </div>
      <div className="card-section">
        <div className="card">
          <img src="https://unsplash.it/200/200" alt="" />
          <h3 className="card-title">Bourbon Drink Title</h3>
          <div className="card-group">A few ingredients go here.</div>
        </div>
      </div>
    </section>
  );
}
