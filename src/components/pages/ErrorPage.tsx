import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorPageProps {}

export const ErrorPage: React.FC<ErrorPageProps> = ({}) => {
  return (
    <div className='t__heading--centered--big -pt-big t_paragraph--200 '>
      <h1>404</h1>
      <h1>Please {<Link to="/">go back</Link>}, this is an error page</h1>
    </div>
  );
};
