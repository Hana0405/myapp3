import Button from "./Button"
import '../App.css'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you doing for?</p>
            <div className='hero-btns'>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'> GET STARTED</Button>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}> WACH TRAILER</Button>

            </div>
            
        </div>
    )
}

export default HeroSection
