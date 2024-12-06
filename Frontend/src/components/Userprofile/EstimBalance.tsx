import matic from '../assets/matic.png'
import down from '../assets/down.png'
import chart from '../assets/chart.png'
import rectangle from '../assets/Rectangle.png'

export const EstimBalance = () => {
    return (
        <div className="grid grid-cols-3 gap-8 w-full mt-20">
            <div className="col-span-1">
                <div className="flex flex-col items-left justify-center">
                    <h1>Estimated balance</h1>
                    <div className='flex flex-row items-end justify-between'>
                        <span className="mt-2">0,00000744</span>
                        <div className='flex felx-row'>
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
                        <div className='flex fles-row mx-auto'>
                            <div className='flex flex-col items-center'>
                                <span className='flex-1 w-1/6 h-12 text-blue-500' >+0.63%</span>
                                <span className='flex-1 w-1/6 h-12 text-slate-500 text-sm/[12px]'>$67,671.7%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-start-2">
                <img src={chart} alt="chart" />
            </div>
            <div className="col-start-3 ">
                <div className='grid grid-cols-[50px_minmax(200px,_1fr)_60px] items-center'>
                    <div className=''>
                        <img src={rectangle} alt="rectangle" />
                    </div>
                    <div className=''>
                        <span className="text-ms/[20px]">Co-founder at Fractal</span>
                    </div>

                    <div className='mt-10 col-start-1'>
                        <img src={rectangle} alt="rectangle" />
                    </div>
                    <div className='mt-10'>
                        <span className="text-ms/[20px]">Workspace ouner at Shared</span>
                    </div>
                    <div className='mt-10 col-start-1'>
                        <img src={rectangle} alt="rectangle" />
                    </div>
                    <div className='mt-10'>
                        <span className="text-ms/[20px]">Colaborator at Easymed</span>
                    </div>

                </div>
            </div>
        </div>
    )
}