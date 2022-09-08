import { useEffect, useState } from "react";
import PokeService from "../service/PokeService";
import throttle from "lodash.throttle";

const pokeService = new PokeService();

const useFetchPokemons = () => {
	const [next, setNext] = useState(null);
	const [initial, setInitial] = useState([]);
	const [data, setData] = useState([]);

	const fetchNext = throttle(async () => {
		if (
			window.scrollY + window.innerHeight ===
			document.body.getBoundingClientRect().height
		) {
			if (next) {
				const pokemons = await pokeService.getPokemonWithReturnedUrl(next);

				if (pokemons) {
					setInitial([...initial, ...pokemons.results]);
					setNext(pokemons.next);
				}
			}
		}
	});

	const initialGetPokemons = async () => {
		const { results: pokemons, next } = await pokeService.getPokemons();

		setInitial(pokemons);
		setNext(next);
	};

	const getPokemons = async () => {
		if (initial.length) {
			setData(
				await Promise.all(
					initial.map((pokemon) =>
						pokeService.getPokemonWithReturnedUrl(pokemon.url)
					)
				)
			);
		}
	};

	useEffect(() => {
		initialGetPokemons();
	}, []);

	useEffect(() => {
		getPokemons();
	}, [initial]);

	useEffect(() => {
		window.addEventListener("scroll", fetchNext);

		return () => {
			window.removeEventListener("scroll", fetchNext);
		};
	}, [next]);

	return data;
}

export default useFetchPokemons;