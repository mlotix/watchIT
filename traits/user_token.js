export async function getUserFromToken({ $axios }) {
  const response = await $axios.get('http://storeapi.test/api/user')
}
