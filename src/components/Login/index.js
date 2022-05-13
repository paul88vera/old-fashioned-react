import Header from '../Header';

export default function Login() {
  return(
    <section id="login">
      <Header />
      <div>
      <form>
        <h2>Sign In</h2>
        <input type="text" placeholder='Username' />
        <input type="email" placeholder='Email' />
        <button>Sign In</button>
      </form>
      <form>
        <h2>Sign Up</h2>
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <input type="text" placeholder='Username' />
        <input type="email" placeholder='Email' />
        <button>Sign Up</button>
      </form>
      </div>
    </section>
  )
}