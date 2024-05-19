import React from 'react'
import PageComponent from '../components/PageComponent'
import SeatsLayout from '../components/SeatsLayout'

export default function Cinema() {
    return (
        <PageComponent title="Cinema">
            <div className='cinema-seats-rows'>
                <SeatsLayout rows="5" seats="8" />
            </div>
        </PageComponent>
    )
}