import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
	<nav className="main-nav">
		<ul>
			<li>
				<NavLink to="/search/hearts">Hearts</NavLink>
			</li>
			<li>
				<NavLink to="/search/moons">Moons</NavLink>
			</li>
			<li>
				<NavLink to="/search/clovers">Clovers</NavLink>
			</li>
		</ul>
	</nav>
);

export default MainNav;
