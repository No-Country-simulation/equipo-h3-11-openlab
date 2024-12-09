import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Content from '../components/Market/Content'


const Market = () => {
    return (
        <>
            <Header />
            <div className="main-content flex-grow relative bg-slate-50">
                <div className="flex flex-row space-x-8">
                    <div className="basis-1/6">
                        <Sidebar />
                    </div>
                    <div className="basis-5/6">
                        <Content />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Market