import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import InitiativesHeader from '../components/Initiatives/Header'

const Initiatives = () => {
    return (
        <>
            <Header />
            <div className="main-content flex-grow relative bg-slate-50">
                <div className="flex flex-row space-x-8">
                    <div className="basis-1/6">
                        <Sidebar />
                    </div>
                    <div className="basis-5/6">
                        <InitiativesHeader />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Initiatives