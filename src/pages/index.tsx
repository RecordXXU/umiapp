import styles from './index.less';
import { useState } from 'react';
import { Button } from 'antd';
export default function IndexPage() {
  const [count, setCount] = useState(0);
  const clickCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Button style={{marginTop: 10}} type="primary" onClick={clickCount}>Click this button count</Button>
      <p style={{marginLeft: '5px'}}>{count}</p>
    </div>
  );
}
