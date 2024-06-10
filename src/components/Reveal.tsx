import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
interface DefaultValues {
    duration?: number;
    delay?: number;

    opacity?: number;
    y?: number;
    x?: number;
}
interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    hidden?: DefaultValues;
    visible?: DefaultValues;
    transition?: DefaultValues;
}
const hiddenDefault: DefaultValues = { opacity: 0,};
const visibleDefault: DefaultValues = { opacity: 1, };
const transitionDefault: DefaultValues = { duration: 0.5, delay: 0.40};
export const Reveal = ({ 

    children, 
    width = "100%",
    hidden = hiddenDefault,
    visible = visibleDefault,
    transition = transitionDefault,

}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    console.log( {...hiddenDefault, ...hidden}, {...visibleDefault, ...visible})
    useEffect(() => {
        if (isInView) mainControls.start("visible");
        
    },[isInView])
    return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
        <motion.div
            variants={{ hidden: {...hiddenDefault, ...hidden}, visible: {...visibleDefault, ...visible}}}
            initial="hidden"
            animate={mainControls}
            transition={{...transitionDefault, ...transition}}
            >
            {children}
        </motion.div>
    </div>
  )
}
