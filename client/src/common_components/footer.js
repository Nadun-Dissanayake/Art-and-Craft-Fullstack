import app from '../pictures/app.png';
import pay from '../pictures/pay.png';
import tiktok from '../pictures/tiktok.png';
import insta from '../pictures/insta.jpg';
import li from '../pictures/in.png';
import fb from '../pictures/fb.png';
import pin from '../pictures/pintrest.png';


export default function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="footer-1">
                    <h3>Category</h3>
                    <p>Wooden Craft</p>
                    <p>Picture Collection</p>
                    <p>Laser Cut</p>
                    <p>Drawing</p>
                    <p>Lovely Craft</p>
                </div>
                <div className="footer-1">
                    <h3>About Us</h3>
                    <p>Career</p>
                    <p>Press & News</p>
                    <p>Partnerships</p>
                    <p>Terms of Service</p>
                </div>
                <div className="footer-1">
                    <h3>Community</h3>
                    <p>Forum</p>
                    <p>Events</p>
                    <p>Blog</p>
                    <p>Podcast</p>
                    <p>Invite a Friend</p>
                    <p>Become a seller </p>
                </div>
                <div className="footer-1">
                    <h3>Install App</h3>
                    <p>From app Store  or Google Play</p>
                    <img src={app}/>
                    <p>Secured Payment Gateway</p>
                    <img src = {pay}/>
                </div>
            </div>
            
            <div className='footer-title'>
                <div>
                    <div className='logo'>Finnier</div>
                </div>
                <div>
                    <div className='coppy-right'>© Finnier International Ltd. 2023</div>
                </div>
                
                <div className='social'><img src={tiktok}/></div>
                <div className='social'><img src={insta}/></div>
                <div className='social'><img src={li}/></div>
                <div className='social'><img src={fb}/></div>
                <div className='social'><img src={pin}/></div>
            </div>
        </div>
        
        
    )
}