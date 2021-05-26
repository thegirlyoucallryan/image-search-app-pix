import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar.js';
import ImageList from './ImageList' ;

class App extends React.Component {

    state = { images: []}

    onSeachSubmit = async (term) => {
       
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            },
            
         });
         this.setState({images: response.data.results})
    }
    


    render(){
    return (
    <div className='ui container' 
    style={{marginTop: '30px'}}>
        <SearchBar onSubmit={this.onSeachSubmit}/>
   <ImageList images={this.state.images} />
    </div>
    )
}
}
export default App;