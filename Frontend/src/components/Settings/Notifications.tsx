import { useState } from "react";
import classNames from 'classnames'

const Notifications = () => {

    const [isSelected, setIsSelected] = useState(true)
    const [isSelected1, setIsSelected1] = useState(true)
    
  return (
    <div className="mt-10 content-center flex justify-center items-center ">
      <div className=" shadow-2xl px-5 w-[837px] h-[370px]">
        <div className="flex justify-items-start">
          <p className="text-[29px] text-left font-bold">Notifications</p>
        </div>
        <div className="flex justify-between items-center">
            <div className="mt-5">
            <p className="font-bold text-[20px]^">Notificatios Language </p>
            <p>Set the language for notifications in the app and email. </p>
            </div>
            <div>
                <button className="text-white bg-blue-500 rounded-lg px-12 py-1">Edit</button>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="mt-5">
            <p className="font-bold text-[20px]^">Notificatios Preferences </p>
            <p>Customize the types of notifications you want to receive in the app and via email.</p>
            </div>
            <div>
                <button className="text-white bg-blue-500 rounded-lg px-8 py-1">Manage</button>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="mt-5">
              <p className="font-bold text-[20px]">Order Notifications </p>
              <p>Receive alerts when your limit orders are executed.</p>
            </div>
            <div
              onClick={() => setIsSelected(!isSelected)}
              className={classNames('flex w-10 h-5 bg-blue-500 m-10 rounded-full',{
                'bg-gray-500' : isSelected,
                })}
            >
                <span
                  className={classNames(
                    'h-5 w-5 bg-white rounded-full transition-all',
                    {
                      'ml-5': isSelected,
                  })}
                />
            </div>
        </div>
         <div className="flex justify-between items-center">
            <div className="mt-5">
              <p className="font-bold text-[20px]">Auto Price Alerts </p>
              <p>You will receive notifications on price changes for major and holding tokens.</p>
            </div>
            <div
              onClick={() => setIsSelected1(!isSelected1)}
              className={classNames('flex w-10 h-5 bg-blue-500 m-10 rounded-full',{
                'bg-gray-500' : isSelected1,
                })}
            >
                <span
                  className={classNames(
                    'h-5 w-5 bg-white rounded-full transition-all',
                    {
                      'ml-5': isSelected1,
                  })}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
