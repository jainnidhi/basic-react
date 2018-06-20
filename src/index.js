import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import Forms from './components/Forms';
import Clock from './components/Clock';
import Counter from './components/Counter';
import Login from './components/Login';
import Posts from './components/Posts';
import Countdown from './components/Countdown';
import Contact from './components/Contact';
import Chaiwala from './components/Chaiwala';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/forms" component={Forms} />
				<Route exact path="/clock" component={Clock} />
				<Route exact path="/counter" render={() => ( <Counter increment="1" /> )} />
				<Route exact path="/login" render={() => (<Login isLoggedIn="false" />)} />
				<Route exact path="/posts" component={Posts} />
				<Route exact path="/countdown" component={Countdown} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/chaiwala" component={Chaiwala} />
				<Route exact path="/chaiwala/report" render={() => (<Chaiwala report="true" />)} />
				<Route exact path="" component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
