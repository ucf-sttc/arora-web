'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//import { NavLink } from 'react-router-dom';

import '../styles/globals.css';

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	return (
		/*		<nav className="navbar-container">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</nav>
*/

		<nav className="w-full bg-gray-900 shadow">
			<div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
				<div>
					<div className="flex items-center justify-start md:py-1 md:block">
						<Link href="#">
							<Image
								src="/images/arora_logo.png"
								width={100}
								height={100}
								alt="ARORA Sim"
							/>
						</Link>
						<div className="md:hidden">
							<button
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						}`}
					>
						<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
							<li className="text-white">
								<Link href="/">Home</Link>
							</li>
							<li className="text-white">
								<Link href="/about">About</Link>
							</li>
							<li className="text-white">
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
/*

<h2 className="text-2xl text-white font-bold">AI COOP</h2>

<div className="flex-1">
	<a className="btn btn-ghost normal-case text-xl">ARORA Website</a>
</div>

<nav className="flex flex-wrap bg-gold-500">
<div className="navbar bg-base-100">

<div className="flex">
	<ul className="menu menu-vertical px-1">
		<li>
			<Link href="/">Home</Link>
		</li>
		<li>
			<Link href="/contact">Contact</Link>
		</li>
		<li>
			<Link href="/about">About</Link>
		</li>
	</ul>
</div>
</div>
</nav>
*/
