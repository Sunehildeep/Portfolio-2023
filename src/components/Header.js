import React, { useState } from "react";
import "../styles/cyberpunk-header.css";
import { Link } from "react-scroll";
import { gsap } from "gsap";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [navClass, setNavClass] = useState("");

	const toggleMenu = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);

		const maxHeight = isOpen ? "-10px" : "300px";

		gsap.to("nav ul", {
			maxHeight,
			duration: 0.4,
			ease: "power2.out",
		});

		if (isOpen) {
			setTimeout(() => {
				setNavClass("");
			}, 180);
		} else setNavClass("open");
	};

	return (
		<header className="cyberpunk-header">
			<div className="container">
				<img
					id="userpic"
					src="/images/me.jpg"
					alt="Header Profile"
					className="header-profile-image animate-on-scroll"
				/>
				<h1 className="glitch-text">Sunehildeep Singh</h1>
				<nav className={navClass}>
					<div className="menu-toggle" onClick={toggleMenu}>
						<div className="hamburger"></div>
					</div>
					<ul>
						<li>
							<Link
								to="about"
								smooth={true}
								duration={500}
								offset={-100}
								onClick={toggleMenu}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="goal"
								smooth={true}
								duration={500}
								offset={-100}
								onClick={toggleMenu}
							>
								Goal
							</Link>
						</li>
						<li>
							<Link
								to="projects"
								smooth={true}
								duration={500}
								offset={-120}
								onClick={toggleMenu}
							>
								Projects
							</Link>
						</li>
						<li>
							<a href="https://github.com/Sunehildeep" onClick={toggleMenu}>
								GitHub
							</a>
						</li>
						<li>
							<Link
								to="skills"
								smooth={true}
								duration={500}
								offset={-100}
								onClick={toggleMenu}
							>
								Skills
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								smooth={true}
								duration={500}
								offset={-100}
								onClick={toggleMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
