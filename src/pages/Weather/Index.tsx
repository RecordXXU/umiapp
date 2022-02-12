import { useState } from 'react';
import { Button, message } from 'antd';
import styles from './index.less';
import { request, connect, useDispatch, useSelector } from 'umi';
import * as services from '@/services';
// @connect(({ user, loading }) => ({ user, loading }))
const Weather = () => {
  const [citycode, setCitycode] = useState('010');
  const [adcode, setAdode] = useState('110000');
  const [city, setCity] = useState('萧山区');
  const [key, setKey] = useState('d4a22a87b175e73f76bde1c1cfd43913');
  const dispatch = useDispatch();
  const filterCitycode = () => {
    // console.log()
    dispatch({
      type: 'weather/getAddress',
      payload: {
        key,
      },
      callback: (res: any) => {
        console.log(res);
      },
    });
    // const result = response.filter((item) => item.name === adcode);
    // console.log(result);
    // request(`https://restapi.amap.com/v3/ip?parameters`, {
    //   params: {
    //     key,
    //   },
    // })
    //   .then((res) => {
    //     if (res) {
    //       request(`https://restapi.amap.com/v3/weather/weatherInfo`, {
    //         params: {
    //           extensions: 'base',
    //           city: res?.city || city,
    //           key,
    //         },
    //       });
    //     }
    //   })
    //   .catch((err) => console.log(err));

    // services.getAddress({ key }).then(res => {
    //   console.log(res, 'res')
    // }).catch(err => {
    //   console.log(err, 'err')
    // })
  };
  return <Button onClick={filterCitycode}>天气</Button>;
};
// function Weather() {
//   const [citycode, setCitycode] = useState('010');
//   const [adcode, setAdode] = useState('110000');
//   const [city, setCity] = useState('萧山区');
//   const [key, setKey] = useState('d4a22a87b175e73f76bde1c1cfd43913');
//   const dispatch = useDispatch();
//   const filterCitycode = () => {
//     // console.log()
//     dispatch({
//       type: 'weather/getAddress',
//       payload: {
//         key,
//       },
//       callback: (res: any) => {
//         console.log(res);
//       },
//     });
//     // const result = response.filter((item) => item.name === adcode);
//     // console.log(result);
//     // request(`https://restapi.amap.com/v3/ip?parameters`, {
//     //   params: {
//     //     key,
//     //   },
//     // })
//     //   .then((res) => {
//     //     if (res) {
//     //       request(`https://restapi.amap.com/v3/weather/weatherInfo`, {
//     //         params: {
//     //           extensions: 'base',
//     //           city: res?.city || city,
//     //           key,
//     //         },
//     //       });
//     //     }
//     //   })
//     //   .catch((err) => console.log(err));

//     // services.getAddress({ key }).then(res => {
//     //   console.log(res, 'res')
//     // }).catch(err => {
//     //   console.log(err, 'err')
//     // })
//   };
//   return <Button onClick={filterCitycode}>天气</Button>;
// }
export default Weather;
