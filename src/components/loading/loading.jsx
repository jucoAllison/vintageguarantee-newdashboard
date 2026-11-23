import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import Classes from "./loading.module.css"

const Loading = ({style, size, fill}) => {
    return (
            <AiOutlineLoading style={{...style}} size={size} fill={fill} className={Classes.loadingSVG}  />
    )
}

export default Loading
