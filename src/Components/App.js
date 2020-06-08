import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import API_KEY from '../config';

// React Components
import Home from './Home'
import MainNav from './MainNav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

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
			<BrowserRouter>
				<Route  render={() => <SearchForm handleLoading={this.handleLoading} />} />
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
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>

		);
	}
}

export default App;
