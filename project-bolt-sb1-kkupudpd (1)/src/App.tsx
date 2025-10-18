import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DiscordButton } from './components/DiscordButton';
import { HomePage } from './pages/HomePage';
import { FreeTrialPage } from './pages/FreeTrialPage';
import { InternetPurchasePage } from './pages/InternetPurchasePage';
import { StreamingPurchasePage } from './pages/StreamingPurchasePage';
import { BundlePurchasePage } from './pages/BundlePurchasePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="trial" element={<FreeTrialPage />} />
            <Route path="internet-plans" element={<InternetPurchasePage />} />
            <Route path="streaming" element={<StreamingPurchasePage />} />
            <Route path="bundle" element={<BundlePurchasePage />} />
          </Route>
        </Routes>
        <DiscordButton />
      </div>
    </Router>
  );
}

export default App;
