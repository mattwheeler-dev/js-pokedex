// DOM variables
const main = document.querySelector("main");

const icons = {
	grass: `<i class="fa-solid fa-leaf"></i>`,
	fire: `<i class="fa-solid fa-fire"></i>`,
	water: `<i class="fa-solid fa-droplet"></i>`,
	bug: `<i class="fa-solid fa-bug"></i>`,
	poison: `<i class="fa-solid fa-skull-crossbones"></i>`,
	flying: `<i class="fa-solid fa-feather-pointed"></i>`,
	normal: `<i class="fa-regular fa-circle"></i>`,
	electric: `<i class="fa-solid fa-bolt-lightning"></i>`,
	ground: `<i class="fa-solid fa-mountain"></i>`,
	fairy: `<i class="fa-solid fa-star"></i>`,
	ghost: `<i class="fa-solid fa-ghost"></i>`,
	dragon: `<i class="fa-solid fa-dragon"></i>`,
	ice: `<i class="fa-solid fa-snowflake"></i>`,
	fighting: `<i class="fa-solid fa-hand-fist"></i>`,
	steel: `<i class="fa-solid fa-magnet"></i>`,
};
let targetNum = 10;

const createPokemon = (data) => {
	const pokeCard = document.createElement("article");
	pokeCard.classList.add("pokemon");
	const types = [];

	for (let i = 0; i < data.types.length; i++) {
		types.push(data.types[i].type.name);
	}

	pokeCard.innerHTML = `
				<p class="poke-num">${data.id}</p>
				<img src=${data.sprites.front_default} alt="sprite image for ${data.name}">
				<p class="poke-name">${data.name}</p>
                `;

	types.forEach((type) => {
		pokeCard.innerHTML += `
                <p class="poke-type ${type}">${type}</p>
                `;
	});

	main.appendChild(pokeCard);
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	createPokemon(data);
	console.log(data);
};

const createDex = async () => {
	for (let i = 1; i <= targetNum; i++) {
		await getPokemon(i);
	}
};

createDex();
