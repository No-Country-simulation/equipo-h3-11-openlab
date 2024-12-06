import { EstimBalance } from '../components/EstimBalance.tsx';
import SideItems from '../components/SideItemsUs.tsx';
import { UpNav } from '../components/UpNav.tsx';
import { User } from '../components/User.tsx';
//import './style.css'


export const UserPerfil = () => {
  return (
    <div>
      <UpNav />
      <div className="grid flow-col grid grid-cols-4 gap-1 w-full ">
        <div className='minmax(200px,_1fr)'>
          <SideItems />
        </div>
        <div className="col-span-3 w-full">
          <User />
          <EstimBalance />
        </div>
      </div>
    </div>
  )
}
