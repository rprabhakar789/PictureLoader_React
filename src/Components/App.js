import React from 'react';
import unsplash from '../API/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
class App extends React.Component {

    state = { images: [] };
    onSearchSubmit = async (term) => {

        //console.log('search submit ', term);
        const resp = await unsplash.get('/search/photos', {

            params: { query: term },
           

        });
        //console.log(this);
        this.setState({ images: resp.data.results });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar whenRahulsubmits={this.onSearchSubmit} />
                <ImageList images= {this.state.images} />
            </div>
        );
}
};

export default App;