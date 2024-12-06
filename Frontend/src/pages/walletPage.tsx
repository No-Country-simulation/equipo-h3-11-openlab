import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import DAOCreationForm from '../components/DAOCreationForm'
import OrderbookInteraction from '../components/OrderbookInteraction'

const WalletPage = () => {
    return (
        <>
            <Header />
            <div className="main-content flex-grow relative">
                <Sidebar />
                <div>
                    <DAOCreationForm />
                    <OrderbookInteraction />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WalletPage