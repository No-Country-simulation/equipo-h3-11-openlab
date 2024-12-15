import bitcoin from '../../assets/puiconsBit/bitcoin-btc-logo.png'
import ethereum from '../../assets/puiconsBit/Ethereum.png'
import thether from '../../assets/puiconsBit/Thether.png'
import bnb from '../../assets/puiconsBit/bnb-bnb-logo.png'
import solana from '../../assets/puiconsBit/solana.png'
import usb from '../../assets/puiconsBit/usd-coin-usdc-logo.png'
import { useTranslation } from "react-i18next"


export const CuadroBit = () => {
    const { t } = useTranslation(["translation"])
    return (
        <div className="grid grid-cols-3 gap-12 m-12">
            <div className="col-span-2 flex flex-row items-center justify-between px-20 border-transparent rounded-xl bg-white shadow">
                <div className="order-1">
                    <div className="flex flex-row flex-wrap">
                        <img className='h-[34px] w-[34px]' src={bitcoin} alt="matic" />
                        <div className='grid grid-row items-center'>
                            <span className='scroll-ml-6 ml-4 text-m/[16px]'>Bitcoin</span>
                            <span className='mx-4 text-slate-500 text-sm/[14px]'>BTC</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 ">
                        <img className='h-[34px] w-[34px]' src={ethereum} alt='matic' />
                        <div className='grid grid-row items-center'>
                            <span className='scroll-ml-6 ml-4 text-m/[16px]'>Ethereum</span>
                            <span className='mx-4 text-slate-500 text-sm/[14px]'>BTC</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 ">
                        <img className='h-[34px] w-[34px]' src={thether} alt='matic' />
                        <div className='grid grid-row items-center'>
                            <span className='scroll-ml-6 ml-4 text-m/[16px]'>ThetherUS</span>
                            <span className='mx-4 text-[#8F96A5] text-sm/[14px]'>USDT</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 ">
                        <img className='h-[34px] w-[34px]' src={bnb} alt='matic' />
                        <div className='grid grid-row items-center'>
                            <span className='scroll-ml-6 ml-4 text-m/[16px]'>BNB</span>
                            <span className='mx-4 text-slate-500 text-sm/[14px]'>BNB</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 ">
                        <img className='h-[34px] w-[34px]' src={solana} alt='matic' />
                        <div className='grid grid-row items-center'>
                            <span className='scroll-ml-6 ml-4 text-m/[16px]'>Solana</span>
                            <span className='mx-4 text-slate-500 text-sm/[14px]'>SOL</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 ">
                        <img className='h-[34px] w-[34px]' src={usb} alt='matic' />
                        <div className='grid grid-row items-center'>
                            <span className='scroll-ml-6 ml-4 text-m/[16px]'>USD Coin</span>
                            <span className='mx-4 text-slate-500 text-sm/[14px]'>USDC</span>
                        </div>
                    </div>
                </div>
                <div className="order-2">
                    <div className='flex fles-row justify-end mx-14'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex-1 w-1/5 h-10 text-blue-500 text-m/[16px]' >+0.63%</span>
                            <span className='flex-1 w-1/5 h-10 text-slate-500 text-sm/[14px]'>$67,671.7%</span>
                        </div>
                    </div>
                    <div className='flex fles-row justify-end mx-14 my-7'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex-1 w-1/5 h-10 text-blue-500 text-m/[16px]' >+0.63%</span>
                            <span className='flex-1 w-1/5 h-10 text-slate-500 text-sm/[14px]'>$67,671.7%</span>
                        </div>
                    </div>
                    <div className='flex fles-row justify-end mx-14 my-8'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex-1 w-1/5 h-10 text-blue-500 text-m/[16px]' >+0.63%</span>
                            <span className='flex-1 w-1/5 h-10 text-slate-500 text-sm/[14px]'>$67,671.7%</span>
                        </div>
                    </div>
                    <div className='flex fles-row justify-end mx-14 my-1'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex-1 w-1/5 h-10 text-blue-500 text-m/[16px]' >+0.63%</span>
                            <span className='flex-1 w-1/5 h-10 text-slate-500 text-sm/[14px]'>$67,671.7%</span>
                        </div>
                    </div>
                    <div className='flex fles-row justify-end mx-14 my-7'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex-1 w-1/5 h-10 text-blue-500 text-m/[16px]' >+0.63%</span>
                            <span className='flex-1 w-1/5 h-10 text-slate-500 text-sm/[14px]'>$67,671.7%</span>
                        </div>
                    </div>
                    <div className='flex fles-row justify-end mx-14 my-10'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='flex-1 w-1/5 h-10 text-blue-500 text-m/[16px]' >+0.63%</span>
                            <span className='flex-1 w-1/5 h-10 text-slate-500 text-sm/[14px]'>$67,671.7%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-3">
                <div className='flex flex-row items-center justify-evenly p-12 border-transparent rounded-xl bg-white shadow gap-10'>
                    <div className='order-1 mt-5'>
                        <div className=''>
                            <span>{t("userProfile.foundedProjects")}</span>
                        </div>
                        <div className='mt-10'>
                            <span>{t("userProfile.participatedProjects")}</span>
                        </div>
                        <div className='mt-12'>
                            <span>{t("userProfile.solvedMissions")}</span>
                        </div>
                        <div className='mt-12'>
                            <span>{t("userProfile.validatedMissions")}</span>
                        </div>
                        <div className='mt-12'>
                            <span>{t("userProfile.likesMission")}</span>
                        </div>
                        <div className='mt-12'>
                            <span>{t("userProfile.generatedTokens")}</span>
                        </div>
                       
                    </div>
                    <div className='order-2 '>
                        <div className='mt-5'>
                            <span className='px-4 rounded-full bg-[#33C1FF] text-sm/[20px]'>346</span>
                        </div>
                        <div className='col-start-2 mt-10 '>
                            <span className='px-4 rounded-full bg-[#33C1FF] text-sm/[20px]'>346</span>
                        </div>
                        <div className='mt-12'>
                            <span className='px-4 rounded-full bg-[#33C1FF] text-sm/[20px]'>346</span>
                        </div>
                        
                        <div className=' col-start-2 mt-12'>
                            <span className='px-4 rounded-full bg-[#33C1FF] text-sm/[20px]'>346</span>
                        </div>
                        
                        <div className=' col-start-2 mt-12'>
                            <span className='px-4 rounded-full bg-[#33C1FF] text-sm/[20px]'>346</span>
                        </div>
                        
                        <div className=' col-start-2 mt-12'>
                            <span className='px-4 rounded-full bg-[#33C1FF] text-sm/[20px]'>346</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}