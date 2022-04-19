import { useState } from 'react';
import { useDispatch } from 'umi';
import { Input, Divider, Button } from 'antd';
import styles from './index.less';
const SearchBar = () => {
  const [city, setCity] = useState('');
  const [key, setKey] = useState('d4a22a87b175e73f76bde1c1cfd43913');
  const dispatch = useDispatch();
  const searchCity = (e: any) => {
    // console.log(e);
    // if (e.keyCode === 13) {
    dispatch({
      type: 'weather/getAddress',
      payload: {
        key,
      },
      callback: (res: any) => {
        // setCity(res?.city);
        dispatch({
          type: 'weather/getWeaterInfo',
          payload: {
            key,
            city,
          },
        });
      },
    });
    // }
    // setCity(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <div>
        <Input
          placeholder="请输入要搜索城市"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          // onKeyUp={(e) => {
          //   searchCity(e);
          // }}
        />
        <Button onClick={searchCity}>搜索</Button>
        <Divider />
      </div>
    </div>
  );
};
export default SearchBar;
