import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = ({handleLoading}) => (
	<nav className="main-nav">
		<ul>
			<li>
				<NavLink to="/search/rock" onClick={handleLoading}>Rock</NavLink>
			</li>
			<li>
				<NavLink to="/search/paper" onClick={handleLoading}>Paper</NavLink>
			</li>
			<li>
				<NavLink to="/search/scissors" onClick={handleLoading}>Scissors</NavLink>
			</li>
		</ul>
	</nav>
);

export default MainNav;
