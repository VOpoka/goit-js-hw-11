export function getPhotoBySearch(searchValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '42516413-5d4d39fc32c8318bac1e6503b';
  const Query = `?key=${KEY}&q=${searchValue}`;
  const params = '&image_type=photo&orientation=horizontal&safesearch=true';
  const url = BASE_URL + Query + params;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.total === 0) {
        throw new Error('No images found');
      }
      return data;
    });
}
