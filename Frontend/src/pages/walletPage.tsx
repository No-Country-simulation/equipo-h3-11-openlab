import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const WalletPage = () => {
    return (
        <>
            <Header />
            <div className="main-content flex-grow relative">
                <Sidebar />
            </div>
            <Footer />
        </>
    )
}

export default WalletPage