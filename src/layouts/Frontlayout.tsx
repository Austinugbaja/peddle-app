import React from 'react'
import FooterComp from '../components/FooterComp'
import HeaderComp from '../components/HeaderComp'

const Frontlayout = ({ children }: { children: React.ReactChild }) => {
    return (
        <div className='front'>
            <HeaderComp />
            <main>{children}</main>
            <FooterComp />
        </div>
    )
}

export default Frontlayout
