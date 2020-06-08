import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = ({handleLoading}) => (
	<nav className="main-nav">
		<ul>
			<li>
				<NavLink to="/search/hearts" onClick={handleLoading}>Hearts</NavLink>
			</li>
			<li>
				<NavLink to="/search/moons" onClick={handleLoading}>Moons</NavLink>
			</li>
			<li>
				<NavLink to="/search/clovers" onClick={handleLoading}>Clovers</NavLink>
			</li>
		</ul>
	</nav>
);

export default MainNav;
