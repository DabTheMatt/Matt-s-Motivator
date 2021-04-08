import React from "react"
import Tab from "./Tab"

class TabsWrapper extends React.Component {
   


    render() {
        const  { data } = this.props
        return(
            <div>
                
                <Tab letter = {data} />
            </div>
        )
    }
}

export default TabsWrapper;