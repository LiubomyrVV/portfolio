
import { useEffect, useState } from "react";
import { getPositionByName } from "../functions/functions.js"
import { StyledEducation } from "./styles/Education.js"

import { screen } from "../functions/Screen.js"

interface Props {
  setValue?: (value: boolean) => void;
  value?: boolean;
  section: string;
  icon?: string; 
  title?: string;
  p?: string;
}

export const PopupWindow: React.FC<Props> = ({ 
  setValue, value, section, icon = 'bi-book', title, p
 }) => {
  const [styles, setStyles] = useState({
    opacity: '0',
    transform: 'translateY(-20%)'
  })
  const [backgroundOpacity, setBackgroundOpacity] = useState('')
  useEffect(() => {
    window.scrollTo({
      top: getPositionByName(section),
      left: 0,
    })
  }, [])
 

  useEffect(() => {
    setTimeout(() => {
      setStyles({
        ...styles,
        opacity: '1',
        transform: 'translateY(0%)'
      })
    })
  }, [value])
  const handleOnExit = () => {
    screen.enableScroll()
    setStyles({
      ...styles,
      opacity: '0',
      transform: 'translateY(-20%)'
    })
    setBackgroundOpacity('0')
    return setValue && setTimeout(() => setValue(false), 400)
  }
  return (
    <StyledEducation opacity={backgroundOpacity} top={getPositionByName(section)}>
        <div style={styles}>
              <i onClick={handleOnExit} className="bi bi-x"></i>
              <i className={`bi ${icon}`}></i>
              <h2>{title}</h2>
              <p>{p}</p>
        </div>
    </StyledEducation>
  )
}
