import React, { Component } from "react"
import Spinner from "../../Admin/Loading/Spinner.js"

class SubmitButton extends Component {
    render() {
        let content = this.props.loading ? <Spinner /> : this.props.children

        return <div className="input-row">
            <span onClick={this.props.onClick} className={(this.props.active ? "active " : "") + "form-submit bulma"}>
                {content}
            </span>
        </div>
    }
}

export default SubmitButton