import React, { Component } from "react"

class InnerContent extends Component {
    render() {
        return <div className={"inner-content" + (this.props.loading ? " loading" : "")}>
            {this.props.children}
        </div>
    }
}

export default InnerContent