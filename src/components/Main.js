import Home from '../components/Home';
import { BudgetsProvider } from '../contexts/BudgetsContext';
import React from 'react';

const Main = () => {
  return (
    <React.StrictMode>
    <BudgetsProvider>
    <Home/>
    </BudgetsProvider>
    </React.StrictMode>
  )
}
export default Main