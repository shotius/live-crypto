import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../atoms/buttons/ButtonPrimary';
import { AppLogo } from '../atoms/icons/AppLogo';
// import styles, {container} from './styles.module.scss'
import './styles.scss';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="headerContainer">
      <nav>
        <ul>
          <li>
            <Link to="/" className="cryptoLogo">Logo</Link>
          </li>
          <li>
            <ButtonPrimary>Log in</ButtonPrimary>
          </li>
        </ul>
      </nav>
    </div>
  );
};
