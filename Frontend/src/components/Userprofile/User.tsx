import Favio from '../assets/Favio.png';
import Line65 from '../assets/line65.png';

export const User = () => {
    return (
        <div className="flex flex-wrap mt-20">
            <div className='order-1'>
                <div className='flex flex-wrap '>
                    <img className="w-20 h20 rounded-full" src={Favio} alt="user" />
                    <div className="flex flex-col items-center justify-center" >
                        <span className='mx-4 text-[24px]'>Favio A.</span>
                        <span className='mx-4 text-[16px]'>favioa@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="order-2 ml-2">
                <img className="mx-8" src={Line65} alt="Line65" />
            </div>
            <div className="order-3">
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit doloremque rerum quaerat? <br />Eos, veritatis! Officia ducimus, ea porro reprehenderit similique nemo quam asperiores <br />fugiat odio sint distinctio, sed ipsa provident!</p>
            </div>
        </div>
    )
}
