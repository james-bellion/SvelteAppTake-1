import { movies } from './data.js'

export function load() {
  return {
    summeries: movies.map((movies) => ({
        slug: movies.slug,
        title: movies.title,
        img: movies.img,
        bio: movies.bio
    }))
  }
}