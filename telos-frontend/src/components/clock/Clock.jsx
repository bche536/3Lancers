import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './WidgetClock.module.css';

// This react component displayed the current time
const Clock = ({ id, deleteWidget }) => {
  const [clockContent, setClockContent] = useState('');

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setClockContent(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <>
      <Box className={styles.box}>
        <div className={styles.header}>
          {' '}
          <FaTimes className={styles.cross} onClick={() => deleteWidget(id)} />
        </div>
        <div className={styles.clockContent}>{clockContent}</div>
      </Box>
    </>
  );
};

export default Clock;
