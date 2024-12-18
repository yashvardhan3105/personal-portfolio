import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Header from "../src/Components/Header/Header.jsx";
import Body from "../src/Components/Body/Body.jsx";
import Footer from "../src/Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar />
        </div>
        <div>
          <Header />
        </div>
      </header>
      <body>
        <div>
          <Body />
        </div>
      </body>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
