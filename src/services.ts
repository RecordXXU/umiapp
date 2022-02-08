import { request } from 'umi';
export function getAddress(params: object) {
  request(`https://restapi.amap.com/v3/ip?parameters`, {
    params,
  }).then((result) => {
    console.log(result);
  });
}
export function getWeaterInfo(params: Object) {
  request(`https://restapi.amap.com/v3/weather/weatherInfo`, {
    params,
  });
}
