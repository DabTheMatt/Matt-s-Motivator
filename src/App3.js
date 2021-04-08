import React from "react";
import TopForm from "./components3/TopForm";
import Tab from "./components3/Tab";
import "../src/App.css";

class App3 extends React.Component {
  state = {
    startId: 0,
    tasks: [],
    bcgColors: ["ddbea9", "ffae70", "b7b7a4", "a5a58d", "cb997e"],
    quote: "",
    author: "",
    dataF: [],
    errorMsgName: "",
    errorMsgGoal: "",
  };

  componentDidMount() {
    const that = this;
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        return jsonData;
      })
      .then((jsonData) => {
        this.setState({ dataF: jsonData });

        let random = parseInt(Math.random() * this.state.dataF.length);

        this.setState({
          quote: this.state.dataF[random].text,
          author: this.state.dataF[random].author,
        });
      });
  }

  randomQuote = () => {
    let random = parseInt(Math.random() * this.state.dataF.length);
    console.log("random", random);
    this.setState({
      quote: this.state.dataF[random].text,
      author: this.state.dataF[random].author,
    });

    console.log(this.state.quote);
  };

  addTask = (name, goal) => {
    this.randomQuote();

    this.setState({
      errorMsgGoal: "",
      errorMsgName: "",
    });

    if (!name) {
      this.setState({ errorMsgName: `Give activity a name` });
      return;
    }
    if (!goal) {
      this.setState({ errorMsgGoal: `Set a goal` });
      return;
    }

    const task = {
      id: this.state.startId,
      name: name,
      times: [],
      totalTime: 0,
      avarageTime: 0,
      goal: goal,
      weekMax: 0,
      bcgColor: this.state.bcgColors[
        parseInt(Math.random() * this.state.bcgColors.length)
      ],
      quote: this.state.quote,
      author: this.state.author,
      visibility: "show",
    };
    const tempTasks = [...this.state.tasks, task];
    tempTasks.reverse()
    this.setState({
      tasks: tempTasks,
      startId: this.state.startId + 1,
    });
  };

  delTask = (id) => {
    console.log("ddd");
    const delActivities = this.state.tasks.filter((task) => id !== task.id);
    this.setState({
      tasks: [...delActivities],
    });
  };

  addTime = (time, id) => {
    const tempActivities = [...this.state.tasks];
    tempActivities.map((task) => {
      if (id === task.id && !time) {
        time = "";
        console.log("mniej niz 0");
        task.totalTime = 0;
        task.avarageTime = 0;
        task.weekMax = 0;
      }

      if (task.times.length > 6) {
        task.times.shift();
      }

      if (id === task.id) {
        task.times.push(Number(time));
      } else {
        return;
      }

      task.totalTime = task.times.reduce((p, c) => p + c);
      task.avarageTime = (task.totalTime / task.times.length).toFixed(1);
      task.weekMax = Math.max(...task.times);
      console.log("total", task.totalTime);
      console.log("average", task.avarageTime);
      console.log("max", task.weekMax);
    });
    this.setState({
      tasks: tempActivities,
    });
    console.log("time from tab", time);
    console.log("tasks after time", tempActivities);
  };

  toggleHide = (id) => {
    const tempTasks = this.state.tasks;
    tempTasks.map((task) => {
      if (task.id === id) {
        task.visibility === "show"
          ? (task.visibility = "hidden")
          : (task.visibility = "show");
      }
      console.log(task.visibility);
    });
    this.setState({
      tasks: tempTasks,
    });
  };

  render() {
    const taskList = this.state.tasks.map((task) => (
      <Tab
        id={task.id}
        name={task.name}
        key={task.id}
        addTime={this.addTime}
        delTab={this.delTask}
        toggleHide={this.toggleHide}
        totalTime={task.totalTime}
        avarageTime={task.avarageTime}
        times={task.times}
        goal={task.goal}
        max={task.weekMax}
        bcgColor={task.bcgColor}
        quote={task.quote}
        author={task.author}
        visibility={task.visibility}
      />
    ));
    return (
      <div className="animate__animated animate__fadeIn">
        <TopForm
          addTask={this.addTask}
          errorMsgName={this.state.errorMsgName}
          errorMsgGoal={this.state.errorMsgGoal}
        />
        <div className="tabsWrapper">{taskList}</div>
        <div></div>
      </div>
    );
  }
}

export default App3;
