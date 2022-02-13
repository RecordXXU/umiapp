import { useState } from 'react';
import { Button, message } from 'antd';
import SearchBar from './searchBar';
import styles from './index.less';
import { useDispatch } from 'umi';
const Weather = () => {
  const [citycode, setCitycode] = useState('010');
  const [adcode, setAdode] = useState('110000');
  const [city, setCity] = useState('萧山区');
  const [key, setKey] = useState('d4a22a87b175e73f76bde1c1cfd43913');
  const dispatch = useDispatch();
  const filterCitycode = () => {
    dispatch({
      type: 'weather/getAddress',
      payload: {
        key,
      },
      callback: (res: any) => {
        console.log(res);
      },
    });
  };
  return (
    <div className={styles.box}>
      {/* <Button onClick={filterCitycode}>天气</Button> */}
      <SearchBar />
    </div>
  );
};
export default Weather;
