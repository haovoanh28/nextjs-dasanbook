export function get<T, V extends {} = {}>(url: string, params?: V): Promise<T> {
  const urlSearchParams = new URLSearchParams(params);
  return fetch(`${url}?${urlSearchParams.toString()}`).then((res) =>
    res.json()
  );
}

export function post<T, V>(url: string, params: V): Promise<T> {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(params),
  }).then((res) => res.json());
}
