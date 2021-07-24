import React, { useState } from "react";

//create your first component
export function Home() {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	return (
		<div className="text-center mt-5">
			<h1>To-Do List</h1>
			<input
				value={todo}
				className="input"
				placeholder="What needs to be done?"
				onChange={e => setTodo(e.target.value)}
			/>
			<button
				onClick={() => {
					setList([...list, todo]);
					setTodo("");
				}}
				className="btn btn-success m-2">
				Add
			</button>
			{list.map((item, index) => (
				<div key={index}>
					{item}
					<button onClick={() => setList(list.filter(word => word !== item))}>x</button>
				</div>
			))}
			<footer>{list.length + " items left"}</footer>
		</div>
	);
}
