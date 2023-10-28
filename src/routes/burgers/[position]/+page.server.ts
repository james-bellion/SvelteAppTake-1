import { error } from '@sveltejs/kit'
import { burgers } from '../data'

export function load({ params }) {
  const movie = burgers.find((burger) => burger.name === params.position)

  if (!movie) throw error(404)

  return {
    burgers
  }
}