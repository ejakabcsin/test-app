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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
    {
      img: male_image,
      name: "Jake Person",
      title: "Web developer",
      email: "super@person.com",
    },
    {
      img: female_image,
      name: "Jane Person",
      title: "Web developer",
      email: "super2@person.com",
    },
    {
      img: male_image,
      name: "Will Smith",
      title: "Software Engineer",
      email: "will@smith.com",
    },
    {
      img: female_image,
      name: "Jada Pinkett Smith",
      title: "Graphic designer",
      email: "jp@smith.com",
    },
  ];

  //Variable to store the animation state
 const [animation, setAnimation] = useState(false);
 //function to update the animation state
 const handleAnimation = () => {
     setAnimation(false);
 }

 //Variable to store the mode state
 const [mode, setMode] = useState("light");
 //function to update the mode state
 const handleModeChange = () => {
   setMode(mode === "light" ? "dark" : "light");
 };

  // get titles
  const titles = [...new Set(profiles.map((profile) => profile.title))]; //map profiles

  const [title, setTitle] = useState("");
  //update the title on change of the drowndrop
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setAnimation(true);
  };

  const [search, setSearch] = useState("");
  //update the search on change of the input
  const handleSearchChange = (event) => { //if search bar receives input, change state to that input
    setSearch(event.target.value);
    setAnimation(true);
  };

  //clear the title and search
  const handleClear = () => {
    setTitle("");
    setSearch("");
    setAnimation(true);
  };

  //filter the profiles based on the title
  const filtedProfiles = profiles.filter(
    (profile) =>
      (title === "" || profile.title === title) && //no title listed OR set to whatever title was inputted
      profile.name.toLowerCase().includes(search.toLowerCase()) //standardize search inputs
  );

  const buttonStyle = {
    border: "1px solid #ccc",
  };

  return ( //combines all components. 
    <>
      <header>
        <Navbar mode={mode} updateMode={handleModeChange}/> 
      </header>

      <main className={mode === "light" ? "light" : "dark"}>
      <Wrapper> 
          <h1>Profile App</h1>
        </Wrapper>

        <Wrapper>
          <About />
        </Wrapper>

        {/* The profile cards NEED to be within a container div, otherwise they will just go to the far left */}

        <Wrapper>
          <div className="filter-wrapper">
              <div className="filter--select">
                <label htmlFor="title-select">Select a title: </label>
                <select
                  id="title-select"
                  onChange={handleTitleChange}
                  value={title}
                >
                  <option value="">All</option>
                  {titles.map((title) => ( //if user searches for specific title, display any that fit search term, otherwise display all
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter--search">
                <label htmlFor="search">Search by name: </label>
                <input
                  type="text"
                  id="search"
                  onChange={handleSearchChange}
                  value={search}
                />
              </div>
              <button onClick={handleClear} style={buttonStyle}>
              <span className="sr-only">Reset</span>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            </div>

          <div className="container">
            <div className="profile-cards">
            {filtedProfiles.map((profile) => ( //display profile cards. find using email, then trigger animations
                 <Card
                 key={profile.email}
                 {...profile}
                 animate={animation}
                 updateAnimate={handleAnimation}
               />
              ))}
            </div>
          </div>
        </Wrapper>

        <Chatbot />
      </main>
    
    </>
  );
};

export default App;