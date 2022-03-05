import styles from './index.less';
import Weather from '@/pages/Weather/Index';
export default function IndexPage() {
  return (
    <div className={styles.box}>
      <Weather />
    </div>
  );
}
