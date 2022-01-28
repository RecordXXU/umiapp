import { useState } from 'react';
import { Button } from 'antd';
import styles from './index.less';

export default function Weather() {
  const [num, setNum] = useState(1);
  return <div>天气</div>;
}
