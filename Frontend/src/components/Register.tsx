import { useState } from "react";
import visibility from "../assets/icons/visibility.png";
import visibility_off from "../assets/icons/visibility_off.png";
import lock from "../assets/icons/lock.png";
import mail from "../assets/icons/mail.png";
import person from "../assets/icons/person.png";
import { useNavigate } from "react-router-dom";
import User from "../types/User";
import { useTranslation } from "react-i18next";

// Modal Component
interface ModalProps {
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-md max-w-lg w-full">
      <h2 className="text-xl font-bold mb-4">Información</h2>
      <p className="text-gray-700">{content}</p>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
);

const Register: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const navigate = useNavigate();
  const { t } = useTranslation(["translation"]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };

  const openModal = (content: string) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Obtener los usuarios existentes desde localStorage
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    // Validar si ya existe un usuario con el correo proporcionado
    const existingUser = users.find((user) => user.email === formData.email);
    if (existingUser) {
      openModal(`La cuenta para el correo ${formData.email} ya existe, por favor inicia sesión.`);
      return;
    }

    // Validación de Nombre
    const nameRegex = /^[\p{L}\s]+$/u;
    if (!formData.name || formData.name.length < 3) {
      openModal("El nombre debe tener al menos 3 caracteres.");
      return;
    }
    if (!nameRegex.test(formData.name)) {
      openModal("El nombre solo puede contener letras y espacios.");
      return;
    }

    // Validación de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      openModal("El correo electrónico ingresado no es válido.");
      return;
    }

    // Validación de contraseña
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      openModal(
        `La contraseña debe cumplir los siguientes requisitos:
      - Al menos 8 caracteres.
      - Incluir una letra mayúscula y una minúscula.
      - Contener un número.
      - Tener al menos un carácter especial.`
      );
      return;
    }

    // Verificación de coincidencia de contraseñas
    if (formData.password !== formData.confirmPassword) {
      openModal("Las contraseñas no coinciden.");
      return;
    }

    if (!formData.termsAccepted) {
      openModal("Debes aceptar los términos y condiciones.");
      return;
    }

  // Si el correo no existe, guardar el usuario
  users.push(formData);
  localStorage.setItem("users", JSON.stringify(users));
    // Mostrar mensaje de éxito y redirigir
    openModal("Cuenta creada exitosamente. Ahora puedes iniciar sesión...");
    setTimeout(() => {
      closeModal();
      navigate("/login");
    }, 3000); // 3 segundos para redirigir
  };

  return (
    <div className="w-full flex pt-8 pb-4 md:pb-8 justify-center items-center bg-white">
      <div className="w-[350px] px-4 py-4 bg-white flex flex-col gap-6 rounded-lg">
        <div className="self-stretch flex flex-col gap-3">
          <h1 className="text-[#1a1a1a] text-3xl font-bold">{t("register.title")}</h1>
          <p className="text-[#1a1a1a] text-xs">
            {t("register.subtitle")}
          </p>
        </div>

        <div className="self-stretch flex flex-col gap-3">
          {/* Nombre y Apellido */}
          <div className="w-full h-10 pl-3 pr-3 py-3.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <img src={person} alt="person-logo" />
            <input
              type="text"
              name="name"
              placeholder={t("fields.fullname")}
              value={formData.name}
              onChange={handleInputChange}
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
            />
          </div>

          {/* Correo electrónico */}
          <div className="w-full h-10 pl-3 pr-3 py-3.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <img src={mail} alt="mail-logo" />
            <input
              type="email"
              name="email"
              placeholder={t("fields.email")}
              value={formData.email}
              onChange={handleInputChange}
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
            />
          </div>

          {/* Contraseña */}
          <div className="w-full h-10 pl-3 pr-3 py-3.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <img src={lock} alt="lock-logo" />
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder={t("fields.password")}
              value={formData.password}
              onChange={handleInputChange}
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="focus:outline-none"
            >
              <img
                src={passwordVisible ? visibility : visibility_off}
                alt="visibility-logo"
              />
            </button>
          </div>

          {/* Repetir Contraseña */}
          <div className="w-full h-10 pl-3 pr-3 py-3.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <img src={lock} alt="lock-logo" />
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder={t("fields.confirmPassword")}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="focus:outline-none"
            >
              <img
                src={confirmPasswordVisible ? visibility : visibility_off}
                alt="visibility_off-logo"
              />
            </button>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms-checkbox"
            className="mt-1"
            onChange={() => setFormData((prev) => ({ ...prev, termsAccepted: !prev.termsAccepted }))}
            checked={formData.termsAccepted}
          />
          <label htmlFor="terms-checkbox" className="text-[#212121] text-[.7rem] ">
            {t("terms.useDeclaration")} {" "}
            <button
              type="button"
              onClick={() =>
                openModal(
                  "Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas al utilizar nuestro sitio web..."
                )
              }
              className="text-[#3d7bff] underline"
            >
              {t("terms.ofUse")}
            </button>.
            {t("terms.privacyDeclaration")} {" "}
            <button
              type="button"
              onClick={() =>
                openModal(
                  "Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas al utilizar nuestro sitio web. Nos comprometemos a garantizar la seguridad de tus datos y a utilizar tu información únicamente para los fines especificados. Al utilizar este sitio, aceptas los términos descritos en esta política."
                )
              }
              className="text-[#3d7bff] underline"
            >
              {t("terms.ofPrivacy")}
            </button>.
          </label>
        </div>

        <button
          className="self-stretch h-12 bg-[#3d7bff] rounded-md shadow flex items-center justify-center"
          onClick={handleSubmit}
        >
          <span className="text-white text-sm font-semibold">{t("register.title")}</span>
        </button>

        <div className="self-stretch h-px bg-[#adadad] my-0"></div>

        <div className="text-center">
          <p className="text-sm">
            <button
              onClick={() => navigate("/login")}
              className="text-[#3d7bff] underline"
            >
              {t("register.toSignIn")}
            </button>
          </p>
        </div>
      </div>

      {/* Mostrar Modal */}
      {showModal && <Modal content={modalContent} onClose={closeModal} />}
    </div>
  );
};

export default Register;
