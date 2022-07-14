class PokeService {
	constructor() { }

	url = "https://pokeapi.co/api/v2/pokemon";

	async getPokemons() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return await response.json();
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getPokemonWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}

	async getPokemonById(id) {
		try {
			const response = await fetch(`${this.url}/${id}`);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}
}

export default PokeService;