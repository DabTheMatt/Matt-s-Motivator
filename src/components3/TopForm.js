import React from "react"



class TopForm extends React.Component {

    state={
        tabName: "",
        goal: ""
    }
    

    handleChange = (e) => {
        this.setState({
            tabName: e.target.value
        })
    }

    handleGoalChange = (e) => {
        this.setState({
            goal: e.target.value
        })
    }

    handleSubmit(e, name, goal) {
        e.preventDefault();
        console.log("sss");

        this.props.addTask(name, goal);

        this.setState({
            tabName: "",
            goal: ""
            
        })
    }

    render() {
        return (
            <div className="topWrapper">
                <h1>Matt's Motivator</h1><br/>

                <form className="topForm" onSubmit={e => this.handleSubmit(e, e.target.nameInput.value, e.target.goalInput.value)}>
                    <label>Activity name:</label>
                    <br/>
                    <input
            
                    type="text"
                    value={this.state.tabName}
                    id="nameInput"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <label>Weekly hourly goal:</label>
                    <br/>
                    <input
                    
                    type="number"
                    value={this.state.goal}
                    id="goalInput"
                    onChange={this.handleGoalChange}
                    />
                    <br/>
                    <button>Add</button>
                </form>
                <div className="errorMsg">{this.props.errorMsgName}
                {this.props.errorMsgGoal}</div>
                
            </div>
        );
    }
}


export default TopForm