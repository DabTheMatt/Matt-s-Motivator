import React from "react";
import Quote from "./Quote";

let progressBcg;

class Tab extends React.Component {
  state = {
    time: "",
  };

  handleChange = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  handleSubmit(e, time, id, max) {
    e.preventDefault();

    this.props.addTime(time, id, max);
    console.log("timeeee");

    this.setState({
      time: "",
    });
  }

  calcGoalL = () => {
    const completePercentL = this.props.totalTime / (this.props.goal / 100);
    

    progressBcg = `conic-gradient(#6d4722 ${completePercentL}%, #ba7a3b ${completePercentL}% 100%)`;
  };

  render() {
    return (
      <div className="tabWrapper animate__animated animate__fadeIn">
        <div
          className=" topTab"
          style={{ background: `#${this.props.bcgColor}` }}
        >
          <h2 className="tabTitle">
            {this.props.name}
            <button
              onClick={() => this.props.toggleHide(this.props.id)}
              className="hideBtn"
            >
              {this.props.visibility === "show" ? <div>hide</div> : <div>show</div>}
            </button>
            
              
            
          </h2>
          <div className="topCircleWrapper">
          <div
                id="outerCircleS"
                style={{
                  background: `conic-gradient(#f865b0 ${
                    this.props.totalTime / (this.props.goal / 100)
                  }%, #2d3740 ${
                    this.props.totalTime / (this.props.goal / 100)
                  }% 100%)`,
                }}
              >
                <div id="innerCircleS"></div>
              </div>
              </div>
        </div>
        {this.props.visibility === "show" ? <div
          className="tab tabBody "
          style={{  background: `#${this.props.bcgColor}`}}
        >
          <div className="quote">
            {(this.props.seriuos === "false") ? 
            
            <div><i className="quoteText">{`"${this.props.quote}"`}</i>
            <p className="sign">{this.props.author}</p></div> : 
            <div><i className="quoteText">{this.props.joke}</i><br/><br/></div>
            }
            
            
          </div>
          
          
          <div className="info">
            <div className="full">
            <form
            className="topForm"
            onSubmit={(e) =>
              this.handleSubmit(e, e.target.timeInput.value, this.props.id)
            }
          >
            <label id="todayLabel">Today I was {this.props.name} for:</label>
            <br />
            <input
              type="number"
              value={this.state.time}
              id="timeInput"
              onChange={this.handleChange}
            />
            <br />
            <button>Add</button>
          </form>
            <div className="ulWrapper">
            <p className="lastWeek">Last week:</p>
            <ul className="weekTimes">
              {this.props.times.map((time) => (
                <li key={Math.random()} className="timeLi">{time}
                </li>
              ))}
            </ul>
          </div>
            <div className="infoLine">
              <p>Week total: </p>
              <span>{this.props.totalTime}</span>
            </div>
            <div className="infoLine">
              <p>Week average: </p>
              <span>{this.props.avarageTime}</span>
            </div>
            <div className="infoLine">
              <p>Week high: </p>
              <span>{this.props.max}</span>
            </div>
            </div>
            <br />
                  <div className="rightWrapper">
                  <p className="weekGoal">
              Your weekly goal:{" "}<br/>
              {this.props.totalTime >= this.props.goal
                ? `(${this.props.totalTime} hours) is complete!`
                : `${this.props.totalTime} / ${this.props.goal}`}
              <br />
            </p>
            <div className="progressCircleWrapper">
              <div
                id="outerCircle"
                style={{
                  background: `conic-gradient(#f865b0 ${
                    this.props.totalTime / (this.props.goal / 100)
                  }%, #2d3740 ${
                    this.props.totalTime / (this.props.goal / 100)
                  }% 100%)`,
                }}
              >
                <div id="innerCircle"></div>
              </div>
            </div>
            <div>
            
            <button
              className="delTab"
              onClick={() => this.props.delTab(this.props.id)}
            >
              delete activity
            </button>
            </div>
          </div>
          </div>
        </div> : <div></div>}
        
      </div>
    );
  }
}

export default Tab;
