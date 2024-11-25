import { z } from "zod";

export const PokeResponseSchema = z.object({
  name: z.string()
})

export const PokesResponseSchema = z.array(PokeResponseSchema)

export const PokeResultSchema = z.object({
  name: z.string(),
  sprites: z.object({
    other: z.object({
      'official-artwork': z.object({
        front_default: z.string()
      })
    })
  }),
  cries: z.object({
    latest: z.string()
  }),
  base_experience: z.number(),
  height: z.number(),
  weight: z.number()
})