import Logo from '../../assets/SVG/Logo.tsx';
import Line from '../../assets/navbar/line.png';
import userLogo from '../../assets/react.svg';
import usp from '../../assets/usp.png';
import fa from '../../assets/fa.png';
import walletnav from '../../assets/walletnavup.png';

export const UpNav = () => {
  return (
    <nav className='bg-white border-gray-200 dark:bg-white'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Logo />
          <span
            className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'
          >Flowbite
          </span>
        </a>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg bg-white md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-50 dark:bg-gray-800 md:dark:bg-slate-50 dark:border-gray-700'>
            <li className=' '>
              <div className='flex items-center space-x-3 bg-transparent hover:bg-blue-200 border border-blue-500 px-3 py-1 rounded-lg pt-1 mt-3 mr-8'>
              <div>
                  <img src={usp} alt="udp" />
                </div>
                <div className=''>
                  <button className='' >Ethereum</button>
                </div>
                <div>
                  <img  src={fa} alt="udp" />
                </div>
              </div>

            </li>
            <li>
            <div className='flex items-center space-x-3 bg-transparent hover:bg-blue-200 border border-blue-500 px-3 py-1 rounded-lg pt-1 mt-3 mr-8'>
              <div>
                  <img src={walletnav} alt="udp" />
                </div>
                <div className=''>
                  <button className='' >Ethereum</button>
                </div>
                <div>
                  <img  src={fa} alt="udp" />
                </div>
              </div>

            </li>
            <li className=''>
              <img src={Line} alt="line" />
            </li>
            <li>
              <img src={userLogo} alt="userlogo" />
            </li>

            <li className='pt-4 mr-0'>
              <a href='#' ></a>
              <p>Favio A.</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
