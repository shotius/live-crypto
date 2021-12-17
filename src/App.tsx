import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { ChartPage } from './components/pages/ChartPage';
import { ErrorPage } from './components/pages/ErrorPage';
import { HomePage } from './components/pages/HomePage';
import { AppLayout } from './components/templates/layouts/AppLayout';
function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/live/:coinId" element={<ChartPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
