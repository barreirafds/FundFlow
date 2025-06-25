import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Budget {
  id: string;
  name: string;
  amount: number;
  spent: number;
  category: string;
  recurrency: string;
  startDate: Date;
}

interface BudgetsContextType {
  budgets: Budget[];
  addBudget: (budget: Omit<Budget, 'id' | 'spent'>) => void;
  removeBudget: (id: string) => void;
  updateBudget: (id: string, updates: Partial<Budget>) => void;
  addSpent: (id: string, value: number) => void;
}

const BudgetsContext = createContext<BudgetsContextType | undefined>(undefined);

export const BudgetsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const addBudget = (budgetData: Omit<Budget, 'id' | 'spent'>) => {
    const newBudget: Budget = {
      ...budgetData,
      id: Date.now().toString(),
      spent: 0,
    };
    setBudgets(prev => [...prev, newBudget]);
  };

  const removeBudget = (id: string) => {
    setBudgets(prev => prev.filter(b => b.id !== id));
  };

  const updateBudget = (id: string, updates: Partial<Budget>) => {
    setBudgets(prev => prev.map(b => (b.id === id ? { ...b, ...updates } : b)));
  };

  const addSpent = (id: string, value: number) => {
    setBudgets(prev => prev.map(b => (b.id === id ? { ...b, spent: b.spent + value } : b)));
  };

  return (
    <BudgetsContext.Provider value={{ budgets, addBudget, removeBudget, updateBudget, addSpent }}>
      {children}
    </BudgetsContext.Provider>
  );
};

export const useBudgets = () => {
  const context = useContext(BudgetsContext);
  if (context === undefined) {
    throw new Error('useBudgets must be used within a BudgetsProvider');
  }
  return context;
}; 