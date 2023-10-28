// src/routes/burgers/+page.server.ts
import { error } from '@sveltejs/kit';
import { burgers } from './data';

// interface RouteParams {
//   position: string; // assuming 'position' is a string, adjust the type if it's different
// }

// export function load({ params }: { params: RouteParams }) {
//   const position = parseInt(params.position, 10);
//   const burger = burgers.find((burger) => burger.position === position);

//   if (!burger) throw error(404);

//   return {
//     summary: {
//       position: burger.position,
//       name: burger.name,
//       symbol: burger.symbol,
//       price: burger.Price,
//     },
//   };
// }

export function load() {
  return {
    summeries: burgers.map((burgers) => ({
        position: burgers.position,
        name: burgers.name,
        price: burgers.Price,
        symbol: burgers.symbol
    }))
  }
}


