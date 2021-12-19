import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../../atoms/buttons/ButtonPrimary';
import '../styles.scss';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="headerContainer">
      <nav>
        <ul >
          <li className='roboto-text'>
            <Link to="/" className="cryptoLogo">Logo</Link>
          </li>
          <li className='roboto-text'>
            <ButtonPrimary >Log in</ButtonPrimary>
          </li>
        </ul>
      </nav>
    </div>
  );
};
