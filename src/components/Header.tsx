
import NAVIGATION from "../constants/navigation"
import { Navigation } from "./Navigation"
import { StyledHeader } from "./styles/Header.styled"

import { useRef } from 'react'

import { useResizeObserver } from 'usehooks-ts'



export const Header = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { width = 0, height = 0 } = useResizeObserver({
    ref,
    box: 'border-box',
  })


  return (
    <StyledHeader ref={ref}>
        <h1 onClick={() => {
          window.scrollTo({
            top: NAVIGATION.find(({name})=> name === 'Główna')?.position,
            left: 0,
            behavior: 'smooth',
        })
        }}>Liubomyr Vernyk</h1>
        {(width ? width : 0)>= 936 ?  <Navigation /> : null}
       
    </StyledHeader>
  )
}
