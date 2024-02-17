import React, { ReactNode, createContext, useContext, useState } from 'react';
import IBurger from '../Interfaces/IBurger';


interface BurgerContextType {
  allBurgers: IBurger[]
  searchResult: IBurger[]
  selectedBurger: IBurger | null
  updateAllBurgers: (burgers: IBurger[]) => void
  updateSearchResult: (burgers: IBurger[]) => void
  updateSelectedBurger: (burger: IBurger) => void
}

const sampleBurger: IBurger = {
    id: null,
    name: '',
    description: '',
    price: 0,
    image: ''
}


const BurgerContext = createContext<BurgerContextType>({
    allBurgers: [],
    searchResult: [],
    selectedBurger: null,
    updateAllBurgers: function (burgers: IBurger[]): void {},
    updateSearchResult: function (burgers: IBurger[]): void {},
    updateSelectedBurger: function (burger: IBurger): void {}
});

export const BurgerContextProvider = ({ children }: {children: ReactNode}) => {

    const [allBurgers, setAllBurgers] = useState<IBurger[]>([])
    const [searchResult, setSearchResult] = useState<IBurger[]>([])
    const [selectedBurger, setSelectedBurger] = useState<IBurger | null>(null)


    const updateAllBurgers = (burgers: IBurger[]) => {
        setAllBurgers(burgers);
      };
    

      const updateSearchResult = (results: IBurger[]) => {
        setSearchResult(results);
      };
    

      const updateSelectedBurger = (burger: IBurger) => {
        setSelectedBurger(burger);
      };

    return (
        <BurgerContext.Provider value={{
            allBurgers,
            searchResult,
            selectedBurger,
            updateAllBurgers,
            updateSearchResult,
            updateSelectedBurger

        
        }}>
        {children}
        </BurgerContext.Provider>
    );
};

export const useBurgerContext = () => {
  const context = useContext(BurgerContext);
  if (!context) {
    throw new Error('useBurgerContext must be used within a BurgerContextProvider');
  }
  return context;
};
