import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import InitiativesHeader from '../components/Initiatives/Header'

const Initiatives = () => {
    return (
        <>
            <Header />
            <div className="main-content flex-grow relative">
                <Sidebar />
                <InitiativesHeader />
            </div>
            <Footer />
        </>
    )
}

export default Initiatives