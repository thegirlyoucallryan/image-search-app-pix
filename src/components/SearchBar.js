
import React from 'react'



class SearchBar extends React.Component {
    // onInputChange(event){//event js object with info about event//aptly named on ___ change after what is being targeted.
    //     console.log(event.target.value)


    // }
    //below is a controlled input compnent

    state = {term: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>Image search</label>
                </div>
            <input type="text" placeholder="search" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value.toUpperCase()})}></input> 
            </form>
            </div>
           
        )
    }
}

export default SearchBar