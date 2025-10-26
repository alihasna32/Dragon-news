import React from 'react'
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playGroundImg from "../../assets/playground.png"
const Qzone = () => {
  return (
    <div className='bg-base-200 p-3'>
        <h2 className='font-bold mb-5 text-2xl'>Q-zone</h2>
        <div className='w-full'>
            <img className='w-full' src={swimmingImg} alt=""/>
            <img className='w-full' src={classImg} alt=""/>
            <img className='w-full' src={playGroundImg} alt=""/>
        </div>
    </div>
  )
}

export default Qzone