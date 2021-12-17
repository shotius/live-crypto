import React from 'react';
import { Footer } from '../../organizms/Footer';
import { Header } from '../../organizms/headers/Header';
import styles from './styles.module.scss';

interface AppLayoutProps {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
