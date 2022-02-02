import { request } from 'umi';
export async function getAddress(params: object) {
  request(`https://restapi.amap.com/v3/ip?parameters`, {
    params,
  });
}
export async function getWeaterInfo(params: Object) {
  request(`https://restapi.amap.com/v3/weather/weatherInfo`, {
    params,
  });
}
