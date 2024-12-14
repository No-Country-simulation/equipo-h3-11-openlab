import matic from '../../assets/matic.png'
import down from '../../assets/down.png'
import chart from '../../assets/chart.png'
import rectangle from '../../assets/Rectangle.png'
import { useTranslation } from "react-i18next"

export const EstimBalance = () => {
    const { t } = useTranslation(["translation"])
    return (
        <div className="grid grid-cols-3 gap-12 mx-12" >
            <div className="col-span-2 flex flex-row items-center justify-evenly p-12 border-transparent rounded-xl bg-white shadow">
                <div className="flex-auto gap-8">
                    <div className="flex flex-col ">
                        <h1>{t("walletOptions.estimatedBalance")}</h1>
                        <div className='flex flex-row'>
                            <span className="mt-2">0,00000744</span>
                            <div className='flex felx-row ml-auto items-end place-content-center'>
                                <span className='flex-item text-slate-500'>BTC</span>
                                <img className='flex-row object-scale-down h-22 w-22 ml-2' src={down} alt='down' />
                            </div>
                        </div>
                        <span className="mt-4 text-slate-500 text-sm/[10px]"> =$0.50120936</span>
                        <div className="flex flex-row mt-4 ">
                            <img src={matic} alt='matic' />
                            <div className='grid grid-row items-center'>
                                <span className='scroll-ml-6 ml-4 text-sm/[12px]'>MATIC</span>
                                <span className='mx-4 text-slate-500 text-sm/[12px]'>ETH</span>
                            </div>
                            <div className='flex fles-row items-end mx-auto pl'>
                                <div className='flex flex-col items-end place-content-between'>
                                    <span className='flex-1 w-1/6 h-12 text-blue-500' >+0.63%</span>
                                    <span className='flex-1 w-1/6 h-12 text-slate-500 text-sm/[12px]'>$67,671.7%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-auto gap-8 ml-20">
                    <img src={chart} alt="chart" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-evenly p-12 border-transparent rounded-xl bg-white shadow">
                <div className="flex-auto gap-8 ml-20">
                    <div className='grid grid-cols-[50px_minmax(200px,_1fr)_60px] items-center'>
                        <div className=''>
                            <img src={rectangle} alt="rectangle" />
                        </div>
                        <div className=''>
                            <span className="text-ms/[20px]">{t("userProfile.cofounderAt")}Fractal</span>
                        </div>
                        <div className='mt-10 col-start-1'>
                            <img src={rectangle} alt="rectangle" />
                        </div>
                        <div className='mt-10'>
                            <span className="text-ms/[20px]">{t("userProfile.workspaceOunerAt")}Shared</span>
                        </div>
                        <div className='mt-10 col-start-1'>
                            <img src={rectangle} alt="rectangle" />
                        </div>
                        <div className='mt-10'>
                            <span className="text-ms/[20px]">{t("userProfile.colaboratorAt")}Easymed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}