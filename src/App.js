import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    const HomeComponent = lazy(() => import('./views/Home'));
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/:subPage?" component={HomeComponent} exact/>
            </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
