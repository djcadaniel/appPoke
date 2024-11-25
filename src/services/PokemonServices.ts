import axios from "axios"
import { PokeResultSchema, PokesResponseSchema } from "../schema/poke-schema"
import { Pokemon } from "../types"

export async function getPokemones(){
  const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
  const {data: {results}} = await axios(url)
  const result = PokesResponseSchema.safeParse(results)
  if(result){
    return result.data
  }
}

export async function fetchPokemones(poke: Pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${poke.name}`
  const {data} = await axios(url)
  const result = PokeResultSchema.safeParse(data)
  if(result.success){
    return result.data
 }
  console.log(result)
}