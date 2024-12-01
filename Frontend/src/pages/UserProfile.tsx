import SideItems from '../components/Userprofile/SideItemsUs.tsx';
import { UpNav } from '../components/Userprofile/UpNav.tsx';
import { User } from '../components/Userprofile/User.tsx';
//import './style.css'


export const UserPerfil = () => {
  return (
    <div>
      <UpNav />
      <div className="grid flow-col grid grid-cols-4 gap-1 w-full">
        <div className="w-70 col-span-1">
          <SideItems />
        </div>
        <div className="col-span-3 w-full">
          <User />
        </div>
      </div>
    </div>
  )
}
