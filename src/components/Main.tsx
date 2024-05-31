import { DarkButton } from "../UI/DarkButton"
import { LightButton } from "../UI/LightButton"
import NAVIGATION from "../constants/navigation";
import { StyledMain } from "./styles/Main.styled"

const IMAGE_URL = 'https://i.pinimg.com/736x/41/f4/99/41f49941fed13bc2795c153a01cc11ab.jpg';

export const Main = () => {
    return (
        <StyledMain>
            <figure>
                <div className='image-container'>
                    <img src={IMAGE_URL} alt="" />
                </div>
                <figcaption>
                    <p>Hello i'm</p>
                    <h2>Liubomyr Vernyk</h2>
                    <p>Frontend developer</p>
                    <div className='actions'>
                        <LightButton title={'Download CV'} />
                        <DarkButton onClick={() => {
                            window.scrollTo({
                                top: NAVIGATION.find(({ name }) => name === 'Contact')?.position,
                                left: 0,
                                behavior: 'smooth',
                            })
                        }} title={'Contact Info'} />
                    </div>
                    <div className="socials">
                        <div><i className="bi bi-github"></i></div>
                        <div><i className="bi bi-linkedin"></i></div>
                    </div>
                </figcaption>
            </figure>
        </StyledMain>
    )
}
