import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/icons/google.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import main from "../assets/icons/mail.png";
import visibility from "../assets/icons/visibility.png";
import visibility_off from "../assets/icons/visibility_off.png";
import lock from "../assets/icons/lock.png";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation(["translation"]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user: { email: string; password: string; name: string }) =>
        user.email === email && user.password === password
    );

    if (user) {
      setSuccessMessage(`Sesión iniciada correctamente, Hola ${user.name}!`);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/userhome");
      }, 2000);
    } else {
      setErrorMessage("Correo electrónico o contraseña incorrectos.");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const showDevelopmentMessage = () => {
    setErrorMessage("Esta funcionalidad aún se encuentra en desarrollo.");
    setShowModal(true);
  };

  const redirectToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="w-full flex pt-8 pb-4 md:pb-8 justify-center items-center bg-white relative">
      <div className="w-[350px] px-3 py-4 bg-white flex flex-col justify-start items-end gap-6 rounded-lg">
        <div className="self-stretch flex flex-col gap-3">
          <h1 className="text-[#1a1a1a] text-3xl font-bold">{t("signIn")}</h1>
          <p className="text-[#1a1a1a] text-xs">{t("loginPage.subtitle")}</p>
        </div>

        <div className="self-stretch flex flex-col gap-3">
          <div className="w-full h-10 pl-2 pr-3 py-2.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <img src={main} alt="mail-logo" />
            <input
              type="email"
              placeholder={t("fields.email")}
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full h-10 pl-2 pr-3 py-2.5 rounded-md border border-[#6e6e6e] flex items-center gap-2">
            <img src={lock} alt="lock-logo" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder={t("fields.password")}
              className="w-full text-sm text-[#6e6e6e] outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="focus:outline-none"
            >
              {passwordVisible ? (
                <img src={visibility} alt="visibility-logo" />
              ) : (
                <img src={visibility_off} alt="visibility_off-logo" />
              )}
            </button>
          </div>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              showDevelopmentMessage();
            }}
            className="text-[#3d7bff] text-xs underline"
          >
            {t("loginPage.recoverPassword")}
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="self-stretch h-10 bg-[#3d7bff] rounded-md shadow flex items-center justify-center"
        >
          <span className="text-white text-sm font-semibold">
            {t("signIn")}
          </span>
        </button>

        <div className="self-stretch h-px bg-[#adadad] my-1"></div>

        <div className="self-stretch flex flex-col gap-2">
          <button
            onClick={showDevelopmentMessage}
            className="w-full h-10 border border-[#6e6e6e] rounded-lg flex items-center justify-center gap-2"
          >
            <img src={googleIcon} alt="Google Icon" className="h-5" />
            <span className="text-[#1a1a1a] text-xs">
              {t("loginPage.continueWith")} Google
            </span>
          </button>

          <button
            onClick={showDevelopmentMessage}
            className="w-full h-10 border border-[#6e6e6e] rounded-lg flex items-center justify-center gap-2"
          >
            <img src={facebookIcon} alt="Facebook Icon" className="h-5 pl-2" />
            <span className="text-[#1a1a1a] text-xs">
              {t("loginPage.continueWith")} Facebook
            </span>
          </button>
        </div>

        <div className="self-stretch flex justify-center items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToRegister();
            }}
            className="text-[#3d7bff] text-sm underline"
          >
            {t("loginPage.toSignUp")}
          </a>
        </div>
      </div>

      {showModal && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[300px]">
            <p className="text-center text-sm text-[#1a1a1a]">
              {successMessage || errorMessage}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-[#3d7bff] text-white py-2 rounded-md"
            >
              {t("close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
