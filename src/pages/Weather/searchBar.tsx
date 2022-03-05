import { useState } from 'react';
import { useDispatch } from 'umi';
import { Input, Divider } from 'antd';
import styles from './index.less';
const SearchBar = () => {
  const [city, setCity] = useState('');
  const [key, setKey] = useState('d4a22a87b175e73f76bde1c1cfd43913');
  const dispatch = useDispatch();
  const searchCity = (e: any) => {
    console.log(e.target.value);
    setCity(e.target.value);
    // dispatch({
    //   type: 'weather/getAddress',
    //   payload: {
    //     key,
    //   },
    //   callback: (res: any) => {
    //     console.log(res);
    //   },
    // });
  };
  return (
    <div className={styles.searchBar}>
      <div>
        <Input
          bordered={false}
          placeholder="搜索城市"
          value={city}
          onChange={(e) => searchCity(e)}
        />
        <Divider />
      </div>
    </div>
  );
};
export default SearchBar;
