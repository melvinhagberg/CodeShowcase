import React, { Component } from "react"
import axios from "axios"
import MenuList from "./MenuList"
import Item from "./Item"
import Label from "./Label"
import MasterChef from "../Authenticators/MasterChef"
import AffiliateMaster from "../Authenticators/AffiliateMaster"
import ConfirmLogout from "./ConfirmLogout"

class Sidebar extends Component {
    constructor() {
        super()
        this.logoutState = this.logoutState.bind(this)
        this.state = {
            showLogout: false,
            waitingSales: 0
        }
    }
    
    logoutState() {
        this.setState({
            showLogout: !this.state.showLogout
        })
    }

    componentDidMount() {
        axios.get("/api/waiting-sales", {
            headers: {
                Authorization: "Bearer " + window.localStorage.accessToken
            }
        })
        .then(resp => this.setState({
            waitingSales: resp.data
        }))
    }

    render() {
        var p, logoutModal, waitingLabel

        p = this.props.page
        logoutModal = this.state.showLogout ? <ConfirmLogout closeModal={this.logoutState} /> : null
        waitingLabel = this.state.waitingSales > 0 ? <span className="tag is-rounded">{this.state.waitingSales}</span> : null

        return <div className="menu column is-narrow">
            {logoutModal}

            <MenuList>
                <Item href="" active={p === "index"}>Hem</Item>
                <Item href="försäljningar" active={p === "latest-sell"}>Senaste försäljningar</Item>
                <Item href="väntande" active={p === "waiting-sell"}>Väntande {waitingLabel}</Item>
                <a onClick={this.logoutState}>Logga ut</a>
            </MenuList>

            <AffiliateMaster>
                <Label>Användare</Label>
                <MenuList>
                    <MasterChef>
                        <MenuList>
                            <Item href="klasser" active={p === "grades"}>Klasser</Item>
                        </MenuList>
                    </MasterChef>
                    <Item href="klasslista" active={p === "classlist"}>Klasslista</Item>
                    <Item href="användare/lägg-till" active={p === "add-users"}>Lägg till</Item>
                </MenuList>
            </AffiliateMaster>

            <MasterChef>
                <Label>Betalningar</Label>
                <MenuList>
                    <Item href="betalningar" active={p === "betalningar"}>Betalningar</Item>
                </MenuList>
            </MasterChef>

            <MasterChef>
                <Label>Biljetter</Label>
                <MenuList>
                    <Item href="generera-biljett" active={p === "generate-ticket"}>Generera biljett</Item>
                </MenuList>

                <Label>Backup</Label>
                <MenuList>
                    <Item href="backup" active={p === "backup"}>Ny backup</Item>
                </MenuList>
            </MasterChef>
        </div>
    }
}

export default Sidebar