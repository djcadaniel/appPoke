import { useEffect } from "react"
import { PokeForm } from "./components/PokeForm"
import { usePokeStore } from "./store"
import { PokeDisplay } from "./components/PokeDisplay"

function App() {

  const getPokemones = usePokeStore((state)=> state.fetchData)
  // console.log(getPokemones)

  useEffect(()=>{
    getPokemones()
  })

  return (
    <>
      <div className="container">
        <h1>
          Process
        </h1>
        <div className="content">
          <PokeForm />
          <PokeDisplay />
        </div>
      </div>
    </>
  )
}

export default App