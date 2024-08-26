import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const name = url.searchParams.get('name')
  return {
    message: `hello ${name}`
  }
}