import { NavLink } from 'react-router-dom';

import '../styles.css';

function Navbar(): JSX.Element {
	return (
		<nav className="navbar-container">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</nav>
	);
}

export default Navbar;
