import { useTranslation } from "react-i18next";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
//import IniciativeCreationModal from "../CrearIniciativa/DAOCreationFormModal";
import DAOCreationFormModal from "../CrearIniciativa/DAOCreationFormModal";

const InitiativesHeader = () => {
  const { t } = useTranslation(["translation"]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
  const handleOpenModal = () => {
    setIsModalOpen(true); // Abre el modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <header className="flex flex-col justify-start items-end w-full pr-16">
      <div className="flex flex-row justify-between w-full py-8">
        <h1 className="text-3xl font-bold">{t("initiatives")}</h1>
        <button
          onClick={handleOpenModal} // Abre el modal al hacer clic
          className="self-stretch h-10 bg-[#3d7bff] rounded-md shadow flex items-center justify-center"
        >
          <span className="flex flex-row gap-2 px-8 py-2 text-white text-sm font-semibold">
            <CirclePlus />
            {t("initiativesOptions.create")}
          </span>
        </button>
      </div>
      {/* Pasa el estado y la función para cerrar al modal */}
      <DAOCreationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default InitiativesHeader;
