import { useEffect, useState } from 'react';
import { useDispatch } from 'umi';
import { Input, Divider, Button } from 'antd';
import styles from './index.less';
const { Search } = Input;
const SearchBar = () => {
  const [city, setCity] = useState('');
  const [key, setKey] = useState('d4a22a87b175e73f76bde1c1cfd43913');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'weather/getAddress',
      payload: {
        key,
      },
      callback: (res: any) => {
        setCity(res?.infocode || '');
      },
    });
  }, []);
  const searchCity = (e: any) => {
    dispatch({
      type: 'weather/getWeaterInfo',
      payload: {
        key,
        city,
      },
    });
  };

  return (
    <div className={styles.searchBar}>
      {/* <Input
          placeholder="请输入要搜索城市"
          value={city}
          style={{ width: '70%', minWidth: 600 }}
          onChange={(e) => setCity(e.target.value)}
        />
      <Button onClick={searchCity}>搜索</Button> */}
      <Search
        placeholder="请输入要搜索城市"
        allowClear
        size="large"
        style={{ width: '70%', minWidth: '300px' }}
        onChange={(e: any) => setCity(e.target.value)}
        onSearch={searchCity}
      />
      {/* <Divider /> */}
    </div>
  );
};
export default SearchBar;
