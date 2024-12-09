import { CuadroBit } from '../components/CuadroBit.tsx';
import { EstimBalance } from '../components/EstimBalance.tsx';
import SideItems from '../components/SideItemsUs.tsx';
import { UpNav } from '../components/UpNav.tsx';
import { User } from '../components/User.tsx';
//import './style.css'


export const UserPerfil = () => {
  return (
    <div>
      <UpNav />
      <div className="flex flex-wrap p-3">
        <div className='order-1 p-1'>
          <SideItems />
        </div>
        <div className="order-2 ml-4">
          <User />
          <EstimBalance />
          <CuadroBit />
        </div>
      </div>
    </div>
  )
}
