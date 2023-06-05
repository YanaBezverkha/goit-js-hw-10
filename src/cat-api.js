export function fetchBreeds() {
  return fetch(
    'https://api.thecatapi.com/v1/breeds?api_key=live_J9OOJRRyFSi56Yrc2dT2rSBVRJAYgCuimRaNH45XDtrIbjYXlOyXwnxqq7m3sjH0'
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_J9OOJRRyFSi56Yrc2dT2rSBVRJAYgCuimRaNH45XDtrIbjYXlOyXwnxqq7m3sjH0`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })  .catch(error => {
    console.log(error);
  });
}
