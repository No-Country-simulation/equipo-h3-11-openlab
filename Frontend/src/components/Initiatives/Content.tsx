import { useState } from "react";
import SearchBar from "../SearchBar";
import InitiativesFilters from "./Filters";
import DataTable from "./DataTable"; // Asegúrate de importar el componente DataTable

const InitiativesContent: React.FC = () => {
  const [searchFilter, setSearchFilter] = useState<string>(""); // Filtro de búsqueda
  const [activeFilter, setActiveFilter] = useState<string>("all"); // Filtro activo (ej., categoría)

  // Función que se llama cuando se actualiza el filtro de búsqueda
  const handleSearchChange = (value: string) => {
    setSearchFilter(value);
  };

  // Función que se llama cuando se actualiza el filtro activo
  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };

  return (
    <div className="flex flex-col gap-4 border-transparent rounded-xl bg-white shadow mr-8 p-8">
      {/* El SearchBar y los filtros pueden interactuar con el estado del componente padre */}
      <SearchBar onChange={handleSearchChange} value={searchFilter} />
      <InitiativesFilters onFilterChange={handleFilterChange} />

      {/* Aquí pasamos el estado como props al DataTable */}
      <DataTable searchFilter={searchFilter} activeFilter={activeFilter} />
    </div>
  );
};

export default InitiativesContent;
