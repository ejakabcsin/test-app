import "./App.css" //All stylesheets run through App.css
import About from "./components/About"
import Navbar from "./components/Navbar"
import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import Chatbot from "./components/Chatbot"

const App = () => {
  return ( //combines all components. 
    <>
      <header>
        <Navbar /> 
      </header>

      <main>
        <div className="section">
          <div className="container">
            <h1>Profile App</h1>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <About />
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="profile-cards">
              <Card1 />
              <Card2 />
            </div>
          </div>
        </div>
        <Chatbot />
      </main>
    
    </>
  );
};

export default App;