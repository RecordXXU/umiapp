import styles from './index.less';
import { useState } from 'react';
import Weather from '@/pages/Weather/Index';
export default function IndexPage() {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <Weather />
    </div>
  );
}
