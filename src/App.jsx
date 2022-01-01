import { useRef, useState } from "react";
import "./App.css";

const App = () => {
	const txt_color = useRef(null);
	const [color, setColor] = useState("#000000");
	const hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
	let colorHex = "#";

	const changeColor = () => {
		for (let i = 0; i < 6; i++) {
			let random = Math.floor(Math.random() * hexadecimal.length);
			colorHex += hexadecimal[random];
		}
		setColor(colorHex);
		txt_color.current.style.color = colorHex;
		document.body.style.backgroundImage = `linear-gradient(#000, ${colorHex})`;
	};

	const copyClipboard = () => {
		color != "#000000" ? navigator.clipboard.writeText(color) : navigator.clipboard.writeText("#000000");
	};

	const hover_button = item => {
		item.target.style.backgroundColor = "#575757";
		item.target.style.color = "#efefef";
	};

	const leave_button = item => {
		item.target.style.backgroundColor = "#efefef";
		item.target.style.color = "#1d1d1d";
	};

	return (
		<div className='container'>
			<h1>Background-Color: </h1>
			<p ref={txt_color}>{color}</p>
			<button onMouseOver={hover_button} onMouseLeave={leave_button} onClick={() => changeColor()}>
				Change Color
			</button>
			<button onMouseOver={hover_button} onMouseLeave={leave_button} onClick={() => copyClipboard()}>
				Copy
			</button>
		</div>
	);
};

export default App;
