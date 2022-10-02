import "./App.css";
import Todo  from "./Todo";
import React, { useState } from "react";
import Header from "./Components/Header";
import Contries from "./Components/Countries";
import Details from "./Components/Details"
import Search from "./Components/Search";


export default function App() {
  
  const [contriesData, setContriesData] = React.useState([]);
  const [filterCountries, setFilterCountries] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [theme, setTheme] = React.useState("light")

  React.useEffect(() => {
    getContries();
  }, []);
  const getContries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    setContriesData(data);
  };

  
  
  let contriesElement = contriesData.map((ele) => (
    <Contries
      name={ele.name.common}
      img={ele.flags.png}
      population={ele.population}
      region={ele.region}
      capital={ele.capital}
      clickCountrie={clickCountrie}
    />
  ));

  let filteredElement = filterCountries.map((ele) => (
    <Contries
      name={ele.name.common}
      img={ele.flags.png}
      population={ele.population}
      region={ele.region}
      capital={ele.capital}
      theme={theme}
      clickCountrie={clickCountrie}
    />
    ));

  function handel(event) {
    let SearchValue = event.target.value;
    setSearchInput(SearchValue);

    if (event.target.value) {
      let filterCountriesElement = contriesData.filter((ele) =>
        Object.values(ele.name.common)
          .join("")
          .toLowerCase()
          .includes(SearchValue)
      );
      setFilterCountries(filterCountriesElement);
    } else {
      setFilterCountries(contriesData);
    }
  }

  function changeTheme(){
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }
  
  const [showDetails, setShowDetails] = React.useState([])
  const [getDetails, setGetDetails] = React.useState([])
  
  function clickCountrie(name){
    let clickCountriesElement = contriesData.filter((ele) => 
     { 
      if(ele.name.common === name){
        setShowDetails(1)
        setGetDetails(ele)
      }}
    )
  }
  function back(){
    setShowDetails([])
  }


  return (
    <div className="app">
      
      <Header changeTheme={changeTheme}  theme={theme} />
      {showDetails.length < 1 ? 
      <div className="main">
      <Search theme={theme} handel={handel} />
      {searchInput.length > 0 ? (
        <div id={theme} className="Contries-container">{filteredElement}</div>
        ) : (
          <div id={theme} className="Contries-container">{contriesElement}</div>
          )}
    </div>
       : 
       <Details
        back={back}
        getDetails={getDetails}
        theme={theme}
        />
     
      }
    </div>
  );
}
