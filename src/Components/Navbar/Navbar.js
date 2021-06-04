import React, { useState, useRef, useEffect } from "react";
import "./Navbar.sass";
import { Link, useHistory } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

export default function Navbar() {
	let history = useHistory();
	const hamburgerLinks = useRef();

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		hamburgerLinks.current.style.transform = !isOpen ? "scaleY(1)" : "scaleY(0)";
		setIsOpen(!isOpen);
	};

	const handleClick2 = (url) => {
		setIsOpen(false);
		hamburgerLinks.current.style.transform = "scaleY(0)";
		history.push(url);
	};

	const [showNav, setShowNav] = useState(true);
	var scrollPosition = 0;

	const handleScroll = () => {
		const position = window.pageYOffset;
		console.log("yo", position);
		console.log(scrollPosition);
		if (position > scrollPosition) {
			setShowNav(false);
			setIsOpen(false);
		} else {
			setShowNav(true);
		}
		scrollPosition = position;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div id={"navbarReturnWrapper"} className={showNav ? "myNavbar showNav" : "myNavbar hideNav"}>
			<nav id="navbar">
				<Link to={"/"} className="logoHolderMain">
					<img className="logo1" src={"/iitiW.webp"} alt="logo" />
				</Link>
				<div id={"hamburgerIconWrapper"}>
					<Hamburger toggled={isOpen} toggle={handleClick} />
				</div>
				<div id="navbar-right">
					<div className="navParts navLeft">
						<Link to={"/"}>Home</Link>
						<Link to={"/council"}>Council</Link>
					</div>
					<Link to={"/"} className="logoHolder">
						<img className="logo" src={"/logo.png"} alt="logo" />
					</Link>
					<div className="navParts navRight">
						<Link to={"/hallOfFame"}>Hall of Fame</Link>
						<Link to={"/explore"}>Explore</Link>
					</div>
				</div>
			</nav>
			<ul id={"hamburgerLinks"} ref={hamburgerLinks}>
				<li>
					<span
						onClick={() => {
							handleClick2("/");
						}}
					>
						HOME
					</span>
				</li>
				<li>
					<span
						onClick={() => {
							handleClick2("/council");
						}}
					>
						COUNCIL
					</span>
				</li>
				<li>
					<span
						onClick={() => {
							handleClick2("/hallOfFame");
						}}
					>
						HALL OF FAME
					</span>
				</li>
				<li>
					<span
						onClick={() => {
							handleClick2("/explore");
						}}
					>
						EXPLORE
					</span>
				</li>
			</ul>
		</div>
	);
}
