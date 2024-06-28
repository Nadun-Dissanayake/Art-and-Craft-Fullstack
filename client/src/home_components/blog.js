import b6 from '../pictures/b6.png';
import n2 from '../pictures/n2.png';
import n1 from '../pictures/n1.jpeg';
import n3 from '../pictures/n3.jpeg';
import n4 from '../pictures/n4.png';
import n5 from '../pictures/n5.jpg';
import n6 from '../pictures/n6.jpeg';
import n7 from '../pictures/n7.png';
import n8 from '../pictures/n8.png';
import n9 from '../pictures/n9.jpeg';
import n10 from '../pictures/n10.png';
import n11 from '../pictures/n11.png';
import n12 from '../pictures/n12.jpeg';


export default function Blog(){
    async function blog(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/blog',{
            method: 'POST',
        })
    }

    return(
       <section onClick={blog}>
            <div className="about_hero v1">
                <div className="discription">
                    <h1>Learn About Finnier <br/>& You Can Build <br/>Your Own Bussiness</h1>
                </div>
                <div className="home_img" >
                    <img src={b6}/>
                </div>
            </div>

            <div className='guides-blog'>
                <div className='guides-title'>
                    <h3>News</h3>
                </div>

                <div className='img-container'>
                    <div className='img'>
                        <img src={n1}/>
                        <h2>Finnier Pro: The ultimate freelance solution for businesses | Finnier Pro</h2>
                        <p>Discover the evolution of Fiverr Pro, unlock advanced project management, vetted talent, and enhanced collaboration tools. Elevate your business to new heights!</p>
                    </div>
                    <div className='img'>
                        <img src={n2}/>
                        <h2>Introducing the New Finnier Gig Image Guidelines</h2>
                        <p>To help you create the best possible image for your Gig, Fiverr recently created new and improved Gig image guidelines.</p>
                    </div>
                    <div className='img'>
                        <img src={n3}/>
                        <h2>Introducing Fiverr’s New and Improved Data Services</h2>
                        <p>Big news: the Fiverr marketplace now includes all the Data services your brand or business needs.</p>
                    </div>
                </div>
            </div>

            <div className='guides-blog'>
                <div className='guides-title'>
                    <h3>Bussiness</h3>
                </div>

                <div className='img-container'>
                    <div className='img'>
                        <img src={n4}/>
                        <h2>5 Reasons Why It's Important to Hire a Professional Event Photographer</h2>
                        <p>When organizing an event, you’re responsible for everything from big-picture planning to taking care of the smallest details. It’s common to spend weeks or even months preparing, and when the day arrives, it goes by in a flash.</p>
                    </div>
                    <div className='img'>
                        <img src={n5}/>
                        <h2>Finnier Spring 2023 Business Trends Index</h2>
                        <p>Businesses Experiment with new Platforms, from Youtube Shorts to AI Tools</p>
                    </div>
                    <div className='img'>
                        <img src={n6}/>
                        <h2>A Commitment to Community: Updates to Our Product</h2>
                        <p>Being part of Fiverr means being part of one of the largest digital communities in the world. We want people we can trust, people we can communicate with (whether that means problem</p>
                    </div>
                </div>
            </div>

            <div className='guides-blog'>
                <div className='guides-title'>
                    <h3>Freelancers</h3>
                </div>

                <div className='img-container'>
                    <div className='img'>
                        <img src={n7}/>
                        <h2>From Freelancing to Founding</h2>
                        <p>Discover the evolution of Fiverr Pro, unlock advanced project management, vetted talent, and enhanced collaboration tools. Elevate your business to new heights!</p>
                    </div>
                    <div className='img'>
                        <img src={n8}/>
                        <h2>Introducing the New Finnier Gig Image Guidelines</h2>
                        <p>It all began in 2005, when 8th grade classmates Darshak and Abhi realized they were neighbors. They were friends after just one day</p>
                    </div>
                    <div className='img'>
                        <img src={n9}/>
                        <h2>Ana Bravo of Bravo Java: Heritage Shoe Brand</h2>
                        <p>Meet Bravo Java, a family-run shoe company, founded in 1942, who found the silver lining in a global pandemic and used the opportunity to update their digital marketing efforts and refresh their brand.</p>
                    </div>
                </div>
            </div>

            <div className='guides-blog'>
                <div className='guides-title'>
                    <h3>Case Studies</h3>
                </div>

                <div className='img-container'>
                    <div className='img'>
                        <img src={n10}/>
                        <h2>Finnier Pro: The ultimate freelance solution for businesses | Finnier Pro</h2>
                        <p>Discover the evolution of Fiverr Pro, unlock advanced project management, vetted talent, and enhanced collaboration tools. Elevate your business to new heights!</p>
                    </div>
                    <div className='img'>
                        <img src={n11}/>
                        <h2>Introducing the New Finnier Gig Image Guidelines</h2>
                        <p>To help you create the best possible image for your Gig, Fiverr recently created new and improved Gig image guidelines.</p>
                    </div>
                    <div className='img'>
                        <img src={n12}/>
                        <h2>Introducing Fiverr’s New and Improved Data Services</h2>
                        <p>Big news: the Fiverr marketplace now includes all the Data services your brand or business needs.</p>
                    </div>
                </div>
            </div>
       </section>
    )
}