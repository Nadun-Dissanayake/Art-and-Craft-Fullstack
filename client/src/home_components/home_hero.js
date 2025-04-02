import React from 'react';
import b1 from '../pictures/b1.jpg';
import b2 from '../pictures/b2.jpg';
import b3 from '../pictures/b3.png';
import b4 from '../pictures/b4.jpg';
import b5 from '../pictures/b5.jpg';
import b6 from '../pictures/b6.png';
import b7 from '../pictures/b7.jpg';
import s1 from '../pictures/s1.jpeg';
import s2 from '../pictures/s2.jpg';
import s3 from '../pictures/s3.jpg';
import s4 from '../pictures/s4.jpg';
import s5 from '../pictures/s5.jpg';
import d1 from '../pictures/d1.png';
import d2 from '../pictures/d2.png';
import d3 from '../pictures/d3.png';
import d4 from '../pictures/d4.png';
import d5 from '../pictures/d5.png';
import d6 from '../pictures/d6.png';
import d7 from '../pictures/d7.png';
import d8 from '../pictures/d8.jpg';


export default function Home_hero(){
    async function home(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/home',{
            method: 'POST',
        })
    }

    return(
        <section onSubmit={home}>
            <div className="home_hero">
                <div className="discription">
                    <h1>Find the modern creative <br/> Art and Craft Products in Sri Lanka</h1>
                    <button>Join Now?</button>
                </div>
                <div className="home_img" >
                    <img src={b1}/>
                </div>
            </div>

            <div className="popular_service">
                <div className='title'>
                    <h1>Popular Service</h1>
                </div>
                <div className='image-holder' >
                    <div className='image'>
                        <img src={s1} />
                        <h6>LOVELY CRAFT</h6>
                    </div>
                    <div className='image'>
                        <img src={s2}/>
                        <h6>WOODEN CRAFT</h6>
                    </div>
                    <div className='image'>
                        <img src={s3}/>
                        <h6>DRAWINGS</h6>
                    </div>
                    <div className='image'>
                        <img src={s4}/>
                        <h6>PICTURE COLLECTION</h6>
                    </div>
                    <div className='image'>
                        <img src={s5}/>
                        <h6>LASER CUT</h6>
                    </div>
                </div>
            </div>

            <div className='impotant-services'>
                <div className='impotant-services-container'>
                    <div>
                        <h1>Important of our Service</h1>
                    </div>
                    <div>
                        <h3>Get quality work done quickly</h3>
                        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                    </div>
                    <div>
                        <h3>Stick to your budget</h3>
                        <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                    </div>
                    <div>
                        <h3>Count on 24/7 support</h3>
                        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                    <div>
                        <h3>Pay when you're happy</h3>
                        <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                    </div>  
                </div>
                <div className='impotant-services-image'>
                    <img src={b2}/>
                </div>   
            </div>

            <div className='need-services'>
                <div className='need-services-title'>
                    <h3>You need it, we've got it</h3>
                </div>
                <div className='need-services-container'>
                    <div className='need-services-set'>
                        <div>
                            <img src={d1}/>
                            <h3>Drawings</h3>
                        </div>
                        <div>
                            <img src={d2}/>
                            <h3>Leaser Cut</h3>
                        </div>
                        <div>
                            <img src={d3}/>
                            <h3>Wooden</h3>
                        </div>
                        <div>
                            <img src={d4}/>
                            <h3>wedding designs</h3>
                        </div>
                    </div>
                    <div className='need-services-set'>
                        <div>
                            <img src={d5}/>
                            <h3>Wall Decorations</h3>
                        </div>
                        <div>
                            <img src={d6}/>
                            <h3>Picture Collection</h3>
                        </div>
                        <div>
                            <img src={d7}/>
                            <h3>Watches</h3>
                        </div>
                        <div>
                            <img src={d8}/>
                            <h3>Stickers</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='impotant-services advanced-solution'>
                <div className='impotant-services-image'>
                    <img src={b3}/>
                </div>  
                <div className='impotant-services-container advanced-solution-color'>
                    <div>
                        <h1>Important of our Service</h1>
                    </div>
                    <div>
                        <h3>Get quality work done quickly</h3>
                        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                    </div>
                    <div>
                        <h3>Stick to your budget</h3>
                        <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                    </div>
                    <div>
                        <h3>Count on 24/7 support</h3>
                        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                </div> 
            </div>

            <div className='athor'>
                <div className='athor-image'>
                    <img src={b4}/>
                </div>
                <div className='athor-description'>
                    <p>Tim and Dam joo. Co-founder</p>
                    <h5>“When you want to create bigger than yourself, you need a lot of help ”</h5>
                </div>
            </div>

            <div className='guides'>
                <div className='guides-title'>
                    <h3>Guides to help you grow</h3>
                </div>

                <div className='img-container'>
                    <div className='img'>
                        <img src={b5}/>
                        <h2>Start a side business</h2>
                    </div>
                    <div className='img'>
                        <img src={b6}/>
                        <h2>Ecommerce business Ideas</h2>
                    </div>
                    <div className='img'>
                        <img src={b7}/>
                        <h2>Start an online business and work from home</h2>
                    </div>
                </div>
            </div>

            <hr/>
        </section>   
    )
}
