export const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country="
export const endpointPath = (country, category, page, pageSize) =>
  `${API_DOMAIN}${country}&category=${category}&apiKey=3cface0623b84e599253463d119cfffb&page=${page}&pageSize=${pageSize}`;
