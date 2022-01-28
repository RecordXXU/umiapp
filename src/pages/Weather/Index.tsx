import { useState } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { request } from 'umi';
import response from './weather.json';

export default function Weather() {
  const [citycode, setCitycode] = useState('010');
  const [adcode, setAdode] = useState('110000');
  const [city, setCity] = useState('萧山区');
  const filterCitycode = () => {
    // const result = response.filter((item) => item.name === adcode);
    // console.log(result);
    request(
      `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=d4a22a87b175e73f76bde1c1cfd43913`,
      {
        params: {
          extensions: 'base',
        },
      },
    );
  };
  return <Button onClick={filterCitycode}>天气</Button>;
}
