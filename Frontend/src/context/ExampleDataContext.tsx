import React, { createContext, useContext, useEffect, useState } from "react";
import { exampleData } from "../data/exampleData";

// Define el tipo de los datos
export interface DataRow {
  id: number;
  name: string;
  priceFluctation: string;
  collaborators: number;
  marketPrices: string;
  tokens: string;
  missions: string;
  likes: number;
  shares: number;
  actions?: string;
  init: string;
  token1: string;
  token2: string;
  orderbook: string;
}

// Define el tipo del contexto
interface ExampleDataContextProps {
  data: DataRow[];
  addData: (newItem: DataRow) => void;
  updateData: (id: number, updatedItem: DataRow) => void;
  removeData: (id: number) => void;
}

// Crea el contexto
const ExampleDataContext = createContext<ExampleDataContextProps | undefined>(
  undefined
);

// Hook para usar el contexto
export const useExampleData = () => {
  const context = useContext(ExampleDataContext);
  if (!context) {
    throw new Error(
      "useExampleData debe usarse dentro de un ExampleDataProvider"
    );
  }
  return context;
};

// Proveedor del contexto
export const ExampleDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataRow[]>(() => {
    // Recupera datos desde localStorage al inicio, o usa los datos de exampleData si no hay nada en localStorage
    const savedData = localStorage.getItem("exampleData");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      // Si no hay datos en localStorage, guarda los datos iniciales
      localStorage.setItem("exampleData", JSON.stringify(exampleData));
      return exampleData; // Aquí se usan los datos iniciales
    }
  });

  // Sincroniza los datos con localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem("exampleData", JSON.stringify(data));
  }, [data]);

  const addData = (newItem: DataRow) => {
    setData((prev) => [...prev, newItem]);
  };

  const updateData = (id: number, updatedItem: DataRow) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const removeData = (id: number) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ExampleDataContext.Provider
      value={{ data, addData, updateData, removeData }}
    >
      {children}
    </ExampleDataContext.Provider>
  );
};
