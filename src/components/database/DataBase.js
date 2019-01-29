import React, {Component} from "react";
import DataBaseItems from "./DataBaseItems";

class DataBase extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {
            items: []
          };
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDafault();
    }
    
    render () {
        return (
            <div className="DataBaseMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        
                        <input ref={(a) => this._inputElement = a} placeholder="ItemName">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <div>
                    <DataBaseItems entries={this.state.items} />
                </div>
            </div>
        )
    }
}

export default DataBase;
