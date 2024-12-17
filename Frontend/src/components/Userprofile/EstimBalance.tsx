import matic from '../../assets/ethereum.png'
import chart from '../../assets/chart.png'
import rectangle from '../../assets/Rectangle.png'
import { useTranslation } from "react-i18next"
import { useWalletData } from '../../services/useWalletData'

export const EstimBalance = () => {
    const { t } = useTranslation(["translation"])
    const { accountBalance, usdBalance } = useWalletData();

    return (
        <div className="grid grid-cols-3 gap-12 mx-12" >
            <div className="col-span-2 flex flex-row items-center justify-evenly p-12 border-transparent rounded-xl bg-white shadow">
                <div className="flex-auto gap-8">
                    <div className="flex flex-col ">
                        <h1 className='text-lg font-medium text-gray-800'>{t("walletOptions.estimatedBalance")}</h1>
                        <div className='flex flex-row'>
                            <span className="mt-2 text-xl font-medium text-gray-800">{accountBalance}</span>
                            <div className='flex felx-row ml-auto items-end place-content-center'>
                                <span className='flex-item text-slate-600'>ETH</span>
                            </div>
                        </div>
                        {usdBalance &&<span className="block text-sm text-gray-600 mt-1">= ${usdBalance}</span>}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img
                                    className="w-8 h-8"
                                    src={matic}
                                    alt="Currency Icon"
                                />
                                <div className="flex flex-col">
                                    <span className="text-gray-800 text-base font-medium">ETH</span>
                                </div>
                                </div>
                                <div className="flex flex-col items-end">
                                <span className="text-blue-600 text-base font-medium"> - % </span>
                                <span className="text-gray-500 text-sm"> $ - </span>
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