import React from "react";
import "./App.css";
import GlobalStyle from "./Style/global";
import InputComponent from "./Component/Input";
import Item from "./Component/Item";
import List from "./Component/List";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<InputComponent />
			<List />
		</div>
	);
}

export default App;
