import React, { useState } from "react";
import NavElement from "./NavElement";

const navElements = [
	{ link: "/", text: "Home" },
	{ link: "/profile", text: "Profile" },
	{ link: "/messages", text: "Messages" },
	{ link: "/notifications", text: "Notifications" },
];

function NavBar() {
	const [activeElement, setActiveElement] = useState(0);
	return (
		<nav className=" bg-gray-900 relative w-full flex items-center justify-between p-6 md:flex">
			<div class="bg-gray-800 text-gray-100 flex justify-between absolute  md:hidden">
				<a href="#" class="text-white flex items-center space-x-2 px-4">
					LOGO
				</a>
				<button class=" p-4 focus:outline-none focus:bg-gray-700">
					<svg
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<div className="flex items-center  text-white mr-6">
				<button className="font-semibold text-xl tracking-tight">LOgo</button>
			</div>
			<div className="w-full block lg:flex justify-between lg:items-center lg:w-auto">
				<div className="text-sm lg:flex justify-between p-4">
					{navElements.map(({ link, text }, index) => (
						<NavElement
							link={link}
							text={text}
							active={activeElement === index}
							setActiveElement={setActiveElement}
							index={index}
						/>
					))}
				</div>
				<div>
					<a
						href="#"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-200 border-gray-200 hover:border-transparent hover:text-purple-600 hover:bg-gray-200 mt-4 lg:mt-0"
					>
						test
					</a>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
