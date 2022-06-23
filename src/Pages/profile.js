import Header from "../components/Header";

export default function Create() {
  return (
    <section id="create">
      <Header />
      <div id="profile-page">
        <aside>
          <div>
            <img src="https://unsplash.it/100/100" alt="" />
          </div>
          <div>
            <p>Jack Reacher</p>
            <p>User Description</p>
          </div>
          <div id="add-drink">+</div>
        </aside>

        <div id="drink-profiles">
          
          {/* {Drinks} */}
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
        </div>

        <div id="create-drink"></div>
      </div>
    </section>
  );
}
