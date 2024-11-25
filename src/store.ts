import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { fetchPokemones, getPokemones } from "./services/PokemonServices";
import { Pokemon, PokeResult } from "./types";

type PokeStore = {
  pokemones : Pokemon[]
  result : PokeResult
  loading: boolean
  fetchData: ()=>Promise<void>
  fetchResult: (poke: Pokemon ) => Promise<void>
}

export const usePokeStore = create<PokeStore>()(devtools((set)=>({
  pokemones: [],
  result: {} as PokeResult,
  loading: false,
  fetchData: async()=>{
    const result = await getPokemones()
    set(()=>({
      pokemones: result
    }))
  },
  fetchResult: async(poke: Pokemon)=>{
    set(()=>({
      loading: true
    }))
    const result = await fetchPokemones(poke)
    set(() => ({
      result: result,
      loading: false,
    }));
  }
})))