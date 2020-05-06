import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.scss';

import Navigation from './components/Navigation';
import CafesIndex from './components/cafes/CafesIndex';
import CafesShow from './components/cafes/CafesShow';
import UpdateCafe from './components/cafes/UpdateCafe';
import CreateCafe from './components/cafes/CreateCafe';
import OwnersIndex from './components/owners/OwnersIndex';
import OwnersShow from './components/owners/OwnersShow';
import CategoriesIndex from './components/categories/CategoriesIndex';
import CategoriesShow from './components/categories/CategoriesShow';
import NotFound from './components/NotFound';


class App extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<div id="App">
					<Navigation />

					<div className="container my-5">
						<Switch>
							<Route exact path="/" component={CafesIndex} />
							<Route path="/cafes/create" component={CreateCafe} />
							<Route path="/cafes/:id/edit" component={UpdateCafe} />
							<Route path="/cafes/:id" component={CafesShow} />
							<Route path="/owners/:id" component={OwnersShow} />
							<Route path="/owners/" component={OwnersIndex} />
							<Route path="/categories/:id" component={CategoriesShow} />
							<Route path="/categories/" component={CategoriesIndex} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
