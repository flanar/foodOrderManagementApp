import React, { useRef, useEffect } from 'react'

const useOutsideClick = (ref, clickHandler) => {
    const handleClickOutside = event => {
        if(ref.current && !ref.current.contains(event.target))
            clickHandler()
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })
}

const OutsideClick = props => {
    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef, props.clickHandler)

    return <div ref={ wrapperRef }>{ props.children }</div>
}

export default OutsideClick