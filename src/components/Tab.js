import React from "react"

class Tab extends React.Component {
    
    render() {
        const {letter} = this.props
        return(
            <div>
                {letter}
            </div>
        )
    }
}

export default Tab;