import { ChangeEvent, FormEvent, useState } from "react";
import { usePokeStore } from "../store"


export const PokeForm = () => {

  const getPokemones = usePokeStore((state) => state.pokemones)
  const fetchResult = usePokeStore((state) => state.fetchResult)
  
  const [poke, setPoke] = useState({
    name: ''
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPoke({
      ...poke,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchResult(poke)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="listPokes">
        <label htmlFor="">Pokemon </label>
        <select 
          id="name"
          name="name" 
          value={poke.name}
          onChange={handleChange}
        >
          <option value="">Seleccione: </option>
          {
            getPokemones.map(item =>(
              <option 
                key={item.name}
                value={item.name}
              >
                {item.name}
              </option>
            ))
          }
        </select>
      </div>
      <input type="submit" value='Enviar'/>
    </form>
  )
}