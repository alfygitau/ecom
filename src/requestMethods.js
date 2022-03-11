import axios from "axios";

const BASE_URL = "http://localhost:7000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmI2MGMxODIwNDllMjY5OGVjZGUwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzAxMDA5OCwiZXhwIjoxNjQ3MjY5Mjk4fQ.YYUt7DvGtiWpu70yOcwe8tjdOujszsmBt4PUABBS49Q";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
