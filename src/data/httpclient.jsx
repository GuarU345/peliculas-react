const url = "https:api.themoviedb.org/3";

export function get(path) {
  return fetch(url + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTk4YzVlNjdiMTc5YTczMjZmZTRkNjcxMThkMjU0NCIsInN1YiI6IjYzNjc0YmJiMzUwMzk4MDA3YWNjYzBhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9BKuDJ2CoBKdRXzngcdPgWWInDE50oSPqhy6R1oDBqU",
    },
  }).then((result) => result.json());
}
