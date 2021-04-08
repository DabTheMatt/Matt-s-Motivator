import React from "react";

class MainInput extends React.Component {

  handleClick() {
    
  }

  render() {
    const { numbers } = this.props;
    console.log(numbers);
    return (
      <div>
        {numbers.map((el, index) => {
          return (
            <div key={index}>
              <p >{el.title}</p>
            </div>
          );
        })}
        <button onClick={this.handleClick}>Add "Dupa"</button>
      </div>
    );
  }
}

export default MainInput;
