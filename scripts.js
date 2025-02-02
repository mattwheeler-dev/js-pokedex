// DOM variables
const main = document.querySelector("main");

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
};

const createDex = () => {
	for (let i = 1; i <= targetNum; i++) {
		getPokemon(i);
	}
};
