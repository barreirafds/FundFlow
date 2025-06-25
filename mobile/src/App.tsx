import { CardsProvider } from './contexts/CardsContext';
import { BudgetsProvider } from './contexts/BudgetsContext';

const App = () => {
  return (
    <BudgetsProvider>
      <CardsProvider>
        {/* Rest of the component */}
      </CardsProvider>
    </BudgetsProvider>
  );
};

export default App; 