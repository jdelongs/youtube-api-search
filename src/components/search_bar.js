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
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }


    onInputChange(term) {
        this.setState({term}); 
        this.props.onSearchTermChange(term); 
    }
}

//export statement
export default SearchBar;