import Header from "../components/Header";

export default function Create() {
  return (
    <section id="create">
      <Header />
      <div id="profile-page">
        <aside>
          <div>
            <img src="#" alt="" />
          </div>
          <div>
            <p>Jack Reacher</p>
            <p>User Profile</p>
          </div>
          <ul>
            <li>Settings</li>  
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </aside>

        <div id="drink-profiles">
          <div id="add-drink">+</div>
          {/* {Drinks} */}
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
        </div>

        <div id="create-drink"></div>
      </div>
    </section>
  );
}
