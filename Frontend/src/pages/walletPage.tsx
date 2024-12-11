import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import UserBalance from '../components/Wallet/UserBalance'
import TableTrading from '../components/Wallet/TableTrading'

const WalletPage = () => {
    return (
        <>
            <Header />
            <div className="main-content flex-grow relative flex">
                <Sidebar />
                <div className="flex-1 p-4"> {/* Ajusté el contenido para que ocupe el espacio restante */}
                    <UserBalance />
                    <TableTrading />
                </div>
            </div>
            <Footer />
        </>
    );
};


export default WalletPage