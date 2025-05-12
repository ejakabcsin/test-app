import "./App.css" //All stylesheets run through App.css
import About from "./components/About"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
// import Card1 from "./components/Card1"
// import Card2 from "./components/Card2"
import Chatbot from "./components/Chatbot"
import male_image from "./assets/default-man.png"
import female_image from "./assets/default-woman.png"
import { useState } from "react"

const App = () => {

  const profiles = [
    {
      img: male_image,
      name: "Basic Humanbeing",
      title: "Just a person", //gets used below, fills in info for prop
      email: "basic@humanbeing.com",
    },
    {
      img: female_image,
      name: "Another Humanbeing",
      title: "VIP of person",
      email: "wow@important.com",
    },
  ];

const [clicked, setClicked] = useState(true);
const handleClick = () => {
  setClicked(!clicked);
};


  return ( //combines all components. 
    <>
      <header>
        <Navbar /> 
      </header>

      <main>
      <Wrapper> 
          <h1>Profile App</h1>
          <button onClick={handleClick}>
            {clicked ? "Click me" : "Clicked"}
          </button>
        </Wrapper>

        <Wrapper>
          <About />
        </Wrapper>

        {/* The profile cards NEED to be within a container div, otherwise they will just go to the far left */}

        <Wrapper />
          <div className="container">
            <div className="profile-cards">
              {profiles.map((profile) => (
                <Card key={profile.email} {...profile} />
              ))}
            </div>
          </div>
        <Wrapper />

        <Chatbot />
      </main>
    
    </>
  );
};

export default App;