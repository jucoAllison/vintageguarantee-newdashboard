import React from 'react'
import Classes from './suspense.module.css'

const Suspense = () => {
    return (
        <center className={Classes.centerHERE}>
            {/* <div className={Classes.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}

            <div className={Classes.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </center>
    )
}

export default Suspense
