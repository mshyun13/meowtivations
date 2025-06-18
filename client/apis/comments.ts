import request from 'superagent'
//I'm I importing anything from models.ts?????

const rootUrl = new URL('/api/v1', document.baseURI)

// apis/fruits.ts
export async function getCommentsByMeowtivationId(id: number) {
  const response = await request
    .get(`${rootUrl}/meowtivations/${id}/comments`)

  return response.body
}


 
//  `https://pokeapi.co/api/v2/generation-wrong/${generation}`,
//   )

//   return res.body as PokemonGeneration
// }

// export async function fetchPokemonByName(name: string) {
//   const res = await request.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
//   return res.body as Pokemon
// }
