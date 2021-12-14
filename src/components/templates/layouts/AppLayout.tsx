import React from 'react';
import { Header } from '../../organizms/Header';
import styles from './styles.module.scss';

interface AppLayoutProps {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};
