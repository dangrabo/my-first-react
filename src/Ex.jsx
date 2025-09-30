function Header() {
  return (
    <header className="header">
      <img src="src/assets/react.svg" alt="react-logo" className="nav-logo"/>
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>"© 2025 Grabowski development. All rights reserved."</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Page;
