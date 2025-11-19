import { Routes, Route } from 'react-router-dom';
import Providers from '@components/Providers';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import PatternLanguagePage from './pages/PatternLanguagePage';

function App() {
  return (
    <>
      <title>SRCL</title>
      <Providers>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="patterns" element={<PatternLanguagePage />} />
          </Route>
        </Routes>
      </Providers>
    </>
  );
}

export default App;
