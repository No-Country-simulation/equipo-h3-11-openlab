import Header from '../components/Header'
import Footer from '../components/Footer'
import LateralNavbar from '../components/LateralNavbar'

const WalletPage = () => {
    return (
        <>
            <Header/>
            <div className="main-content flex-grow relative">
                <LateralNavbar/>
            </div>
            <Footer/>
        </>
    )
}

export default WalletPage