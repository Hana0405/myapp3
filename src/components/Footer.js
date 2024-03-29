import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            {/* footer subscription */}
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input'
                        name = 'email'
                        type ='email'
                        placeholder='Your Email'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>

            </section>
            {/* About us & Contact us */}
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                {/* Videos & Social Media */}
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            {/* social media */}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-log'>
                        <Link to='/' className='social-logo'>
                            HAN <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'> HAN 2020</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i className='fab fa-facebook-f' /> 
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <i className='fab fa-instagram' /> 
                        </Link>
                        <Link className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'>
                            <i className='fab fa-youtube'/> 
                        </Link>
                        <Link className='social-icon-link Twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                            <i className='fab fa-twitter'/> 
                        </Link>
                        <Link className='social-icon-link Linkedin'
                        to='/'
                        target='_blank'
                        aria-label='Linkedin'>
                            <i className='fab fa-linkedin'/> 
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Footer
