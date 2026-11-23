import React from 'react'
import Classes from "./eachheader.module.css"

const Eachheader = ({header_name}) => {
    return (
        <>
            <div className={Classes.element_header}>{header_name}</div>   
        </>
    )
}

export default Eachheader
