import { useEffect, useRef, useState } from "react"
import { usePokeStore } from "../store"


export const PokeDisplay = () => {

  const result = usePokeStore((state)=> state.result)
  const loading = usePokeStore((state) => state.loading)

  // const [isPlaying, setIsPlaying] = useState(false)
  // const audioRef = useRef<HTMLAudioElement | null>(null);

  // const handleMusic = () =>{
  //   if(audioRef.current){
  //     if(isPlaying){
  //       audioRef.current.pause()
  //     }else{
  //       audioRef.current.play()
  //     }
  //   }
  //   setIsPlaying(!isPlaying)
  // }

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.addEventListener('play', () => setIsPlaying(true))
  //     audioRef.current.addEventListener('pause', () => setIsPlaying(false))
  //   }

  //   return () => {
  //     if (audioRef.current) {
  //       audioRef.current.removeEventListener('play', () => setIsPlaying(true))
  //       audioRef.current.removeEventListener('pause', () => setIsPlaying(false))
  //     }
  //   }
  // }, [audioRef.current])

  return (
    <div className="display">
      <h2>{result?.name}</h2>
      <figure>
        <img src={result?.sprites?.other["official-artwork"].front_default} alt="" />
      </figure>
      <p>Experiencia: {result?.base_experience}</p>
      <p>Altura{result?.height}</p>
      <p>Peso: {result?.weight}</p>
      {/* <button onClick={handleMusic}>
        {isPlaying ? 'true' : 'false'}
      </button>
      <audio ref={audioRef}>
        <source src={result.cries?.latest} type="audio/mpeg" />
      </audio> */}
    </div>
  )
}