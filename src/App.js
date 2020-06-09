import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import API_KEY from './config';

// React Components
import Home from './Components/Home'
import MainNav from './Components/MainNav';
import SearchForm from './Components/SearchForm';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';

class App extends Component {
	state = {
		photos  : [],
		query   : '',
		loading : true
	};

	handleLoading = (bool = true) => {
		this.setState({loading: bool});
	}

	/* fetch method for getting the photo data */
	performSearch = query => {
		fetch(
			`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=20&sort=relevance&safe_search=1&format=json&nojsoncallback=1`
		)
			.then(response => response.json())
			.then(responseData =>
				this.setState({
					photos  : responseData.photos.photo,
					query   : query,
					loading : false
				})
			)
			.catch(error => console.log('Error in fetching data', error));
	};

	render() {
		return (
			<HashRouter basename="/Techdegree-Project-7">
				<Route render={() => <SearchForm handleLoading={this.handleLoading} />} />
				<Route render={() => <MainNav handleLoading={this.handleLoading} /> } />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route path={'/search/:query'} render={ () => 
						<PhotoContainer 
							performSearch={this.performSearch}
							photos={this.state.photos}
							query={this.state.query}
							loading={this.state.loading}
							handleLoading={this.handleLoading}
						/> } />
					<Route path={'/'} component={NotFound} />
				</Switch>
			</HashRouter>

		);
	}
}

export default App;
