import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchWithToken } from "../services/apiService";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import User from '../components/Userprofile/User';
import { EstimBalance } from "../components/Userprofile/EstimBalance";
import { CuadroBit } from "../components/Userprofile/CuadroBit";

interface UserData {
  token: string;
  name?: string;
  email?: string;
}

const UserProfile = () => {
  const [userData, setUserData] = useState<UserData | null>(null); // Usamos la interfaz UserData
  const [loading, setLoading] = useState(true);

  const { getAccessTokenSilently, user } = useAuth0();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = await getAccessTokenSilently();
        const data = await fetchWithToken("/api/user-profile", token);
        setUserData(data); // Ahora `data` se espera que sea de tipo `UserData`
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [getAccessTokenSilently]);

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <Header />
      <div className="main-content flex-grow relative bg-slate-50">
        <div className="flex flex-row space-x-8">
          <div className="basis-1/6">
            <Sidebar />
          </div>
          <div className="basis-5/6">
            <User
              token={userData?.token || ""} // El token ahora está tipado correctamente
              userName={user?.name || "Nombre no disponible"}
              userEmail={user?.email || "Correo no disponible"}
            />
            <EstimBalance />
            <CuadroBit />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
