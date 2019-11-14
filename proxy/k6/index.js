import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 50,
  stages: [
    {duration: '10m', rps: 1},
    {duration: '10m', rps: 100},
    {duration: '10m', rps: 1000}
  ]
};

export default function() {
  let res =http.get(`http://127.0.0.1:3000/?${Math.floor(Math.random() * (99999 - 1 + 1)) + 1}`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
};