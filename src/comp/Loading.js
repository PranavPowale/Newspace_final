import React, { Component } from 'react'
import loading from './loading.gif'

const Loading = () =>  {
        return (
            <div className='flex item-center justify-center '>
                <img className=' py-10 my-80' src={loading} alt="loading" />
            </div>
        )
}

export default Loading
