export const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country="
export const API_KEY = "0f6a5a5828d043918f381bfb440a0af4"
export const endpointPath = (country, category, page, pageSize) => `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
