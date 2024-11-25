import { z } from "zod";
import { PokeResponseSchema, PokeResultSchema } from "../schema/poke-schema";

export type Pokemon = z.infer<typeof PokeResponseSchema>

export type PokeResult = z.infer<typeof PokeResultSchema>