import React from "react";
import data from "../src/sampleData";
import "./App.css";
import TabsWrapper from "./components/TabsWrapper";
import MainInput from "./components/MainInput"

class App extends React.Component {
  

  render() {
    return (
      <div>
        <TabsWrapper data = {"dupa"} />
        <MainInput numbers = {[
          {
            id: 1,
            title: "dupa1"
          },
          {
            id: 2,
            title: "dupa2"
          },
          {
            id: 3,
            title: "dupa3"
          },
          {
            id: 4,
            title: "dupa4"
          },
        ]} />
      </div>
    );
  }
}

export default App;
