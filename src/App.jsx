import React , { Component } from "react";
import SingleSelectDropdown from './SingleSelectDropdown.jsx';

import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            locations : [
                {
                  id: 0,
                  title: 'New York',
                  selected: 'false',
                  key:'locations'
                },
                {
                  id: 1,
                  title: 'Oslo',
                  selected: 'false',
                  key:'locations'
                },
                {
                  id: 2,
                  title: 'Istanbul',
                  selected: 'false',
                  key:'locations'
                }
              ],

            age : [
                {
                    id: 0,
                    title: '0-10 years',
                    selected: 'false',
                    key:'age'
                },
                {
                    id: 1,
                    title: '10-20 years',
                    selected: 'false',
                    key:'age'
                },
                {
                    id: 2,
                    title: '20-30 years',
                    selected: 'false',
                    key:'age'
                },
                {
                    id: 3,
                    title: '30-50 years',
                    selected: 'false',
                    key:'age'
                },
                {
                    id: 0,
                    title: '>50 years',
                    selected: 'false',
                    key:'age'
                }
            ],
        };
    }

    setSelected = (id, key) => {
        const temp = [...this.state[key]];

        temp.forEach((item) => item.selected = false);
        temp[id].selected = true;

        this.setState({
            [key]: temp,
        });
    }

    setMultipleSelected = (id, key, selected) => {
        const temp = [...this.state[key]];

        if (!selected) {
            temp[id].selected = true;
        }
        else {
            temp[id].selected = false;
        }

        this.setState({
            [key]: temp,
        });
    }


    render() {
        return (
            <div className="App">
            <div className="wrapper">

            <h1> Single Selecting Dropdown </h1>
            <SingleSelectDropdown 
            header="Select Age" 
            list={this.state.age} 
            setSelected={this.setSelected}
            multipleSelect={false}
            />

            <h1> Multiple Selecting Dropdown </h1>
            <SingleSelectDropdown 
            header="Select location(s)" 
            list={this.state.locations} 
            setMultipleSelected={this.setMultipleSelected}
            multipleSelect={true}
            />
            
            </div>
        </div>
        )
        
        
    }

}

export default App;