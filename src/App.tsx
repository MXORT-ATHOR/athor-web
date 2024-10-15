import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/layout';
import { Home } from './pages';
import { NotFound } from './pages/notFound';
import { OperationBusiness } from './pages/operationalBusiness';
import { InvestmentManagement } from './pages/investmentManagement';

import AOS from "aos";
import 'aos/dist/aos.css';
import { RealAsset } from './pages/realAssets';
import { About } from './pages/about';
import Impressum from './pages/impressum';

function App() {
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='operational-business' element={<OperationBusiness />} />
        <Route path='investment-management' element={<InvestmentManagement />} />
        <Route path='real-asset' element={<RealAsset />} />
        <Route path='about' element={<About />} />
        <Route path='impressum' element={<Impressum />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
