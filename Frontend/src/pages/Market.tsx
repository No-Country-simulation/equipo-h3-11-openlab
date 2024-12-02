import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Market = () => {
    return (
        <>
            <Header />
            <div className="main-content flex-grow relative">
                <Sidebar />
                <section className='flex flex-col items-center'>
                    <h1>Este es la pagina de mercado</h1>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Market