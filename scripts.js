// DOM variables
const main = document.querySelector("main");

let targetNum = 151;

const createPokemon = (data) => {
	const pokeCard = document.createElement("article");
	const types = [];

	for (let i = 0; i < data.types.length; i++) {
		types.push(data.types[i].type.name);
	}

	pokeCard.classList.add("pokemon");
	pokeCard.style.backgroundColor = `var(--${types[0]})`;

	pokeCard.innerHTML = `
				<p class="poke-num">${data.id}</p>
				<img src=${data.sprite} alt="sprite image for ${data.name}" />
				<p class="poke-name">${data.name}</p>
                `;

	types.forEach((type) => {
		pokeCard.innerHTML += `
                <p class="poke-type ${type}">
                <img src="images/${type}-icon.png" alt="icon for ${type} type" />
                ${type}
                </p>
                `;
	});

	main.appendChild(pokeCard);
};

const getPokemon = async (id) => {
	const storedPokemon = JSON.parse(localStorage.getItem(id));

	if (storedPokemon) {
		createPokemon(storedPokemon);
	} else {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		const currentPokemon = {
			id: data.id,
			name: data.name,
			sprite: data.sprites.front_default,
			types: data.types,
		};
		localStorage.setItem(data.id, JSON.stringify(currentPokemon));
		createPokemon(currentPokemon);
	}
};

const createDex = async () => {
	for (let i = 1; i <= targetNum; i++) {
		await getPokemon(i);
	}
};

createDex();
