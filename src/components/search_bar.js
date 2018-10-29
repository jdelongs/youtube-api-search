//import statements
import React, { Component } from 'react'; 

//class
class SearchBar extends Component {
    //constructor 
    constructor(props) {
        super(props);

        //state for component
        this.state = { term: ''};
    } 

    //render method
    render() {
        return (
            <div>
                <input
                    value={this.state.term} 
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

//export statement
export default SearchBar;