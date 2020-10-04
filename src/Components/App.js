import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {

    onSearchSubmit(term) {

        console.log('search submit ', term);
        axios.get('https://api.unsplash.com/search/photos', {

            params: { query: term },
            headers: {
                Authorization: 'Client-ID 82Hs7Xidgz7HV4wpZ_sIZRFJt200ORBQqsLl4aC3Peg'
            }

        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar whenRahulsubmits={this.onSearchSubmit} />
            </div>
        );
}
};

export default App;