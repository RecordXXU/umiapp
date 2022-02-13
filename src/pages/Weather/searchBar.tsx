import { Input, Divider } from 'antd';
import styles from './index.less';
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div>
        <Input bordered={false} placeholder="搜索城市" />
        <Divider />
      </div>
    </div>
  );
};
export default SearchBar;
