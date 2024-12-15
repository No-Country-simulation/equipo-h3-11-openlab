import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface InitiativesFiltersProps {
  onFilterChange: (filter: string) => void;
}

const InitiativesFilters: React.FC<InitiativesFiltersProps> = ({
  onFilterChange,
}) => {
  const { t } = useTranslation(["translation"]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const buttonClass = (filter: string) =>
    `border border-slate-400 rounded-xl w-40 h-10 transition ${
      activeFilter === filter
        ? "bg-blue-500 text-white"
        : "bg-white text-slate-500"
    } hover:bg-blue-100 hover:border-blue-500`;

  return (
    <div className="flex flex-row justify-start items-center text-slate-500 font-semibold py-4 gap-4">
      <button
        onClick={() => handleFilterChange("all")}
        className={buttonClass("all")}
      >
        {t("initiativesOptions.all")}
      </button>
      <button
        onClick={() => handleFilterChange("active")}
        className={buttonClass("active")}
      >
        {t("initiatives")}
      </button>
      <button
        onClick={() => handleFilterChange("new")}
        className={buttonClass("new")}
      >
        {t("initiativesOptions.newInitiatives")}
      </button>
      <button
        onClick={() => handleFilterChange("popular")}
        className={buttonClass("popular")}
      >
        {t("initiativesOptions.favorites")}
      </button>
    </div>
  );
};

export default InitiativesFilters;
