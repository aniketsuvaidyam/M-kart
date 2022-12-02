import React from 'react'
import { navData } from '../Data'

const Catgories = () => {
    return (
        <>
            <div className='flex justify-between items-center py-3 px-10'>

                {navData.map(d => {
                    return (
                        <div className=' items-center'>
                            <img className='h-16 w-16 ' src={d.url} alt="" />
                            <span className='font-semibold items-center'>{d.text}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Catgories
