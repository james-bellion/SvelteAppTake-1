import { error } from '@sveltejs/kit'
import { movies } from '../data'

export function load({ params }) {
  const movie = movies.find((movie) => movie.slug === params.slug)

  if (!movie) throw error(404)

  return {
    movie
  }
}