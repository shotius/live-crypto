import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from 'react-router-dom';
import { AppLayout } from './components/templates/layouts/AppLayout';
import { ChartPage } from './pages/ChartPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/live/:coinId" element={<ChartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Switch>
      </AppLayout>
    </Router>
  );
}
