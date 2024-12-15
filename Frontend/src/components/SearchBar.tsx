import { useEffect, useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string; // Valor inicial de la barra de búsqueda
  onChange: (value: string) => void; // Función para manejar el cambio de valor
  placeholder?: string; // Placeholder opcional
  className?: string; // Clases opcionales para estilos personalizados
}

const SearchBar: React.FC<SearchBarProps> = ({
  value: initialValue,
  onChange,
  placeholder,
  className = "",
  ...props
}) => {
  const { t } = useTranslation(["translation"]);
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value, onChange]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`relative w-full h-10 ${className}`}>
      <div className="absolute left-4 p-2 flex items-center justify-center text-slate-400">
        <Search />
      </div>
      <input
        type="text"
        placeholder={placeholder || t("search")}
        className="w-full h-full border border-2 border-gray-200 rounded-xl px-12 py-4"
        value={value}
        onChange={handleInputChange}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
