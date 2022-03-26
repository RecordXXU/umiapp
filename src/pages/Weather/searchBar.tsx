import { useState } from 'react';
import { useDispatch } from 'umi';
import { Input, Divider } from 'antd';
import styles from './index.less';
const SearchBar = () => {
  const [city, setCity] = useState('');
  const [key, setKey] = useState('d4a22a87b175e73f76bde1c1cfd43913');
  const dispatch = useDispatch();
  const searchCity = (e: any) => {
    let timer: any = null;
    console.log(e.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch({
        type: 'weather/getAddress',
        payload: {
          key,
        },
        callback: (res: any) => {
          console.log(res);
        },
      });
    }, 300);
    setCity(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <div>
        <Input
          placeholder="请输入要搜索城市"
          value={city}
          onChange={(e) => searchCity(e)}
        />
        <Divider />
      </div>
    </div>
  );
};
export default SearchBar;
