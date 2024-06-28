import b8 from '../pictures/b8.png';
import a1 from '../pictures/a1.jpg';
import a2 from '../pictures/a2.jpg';
import a3 from '../pictures/a3.jpg';
import a4 from '../pictures/a4.jpg';
import a5 from '../pictures/a5.jpg';


export default function About(){
    async function about(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/about',{
            method: 'POST',
        })
    }

    return(
       <section onClick={about}>
            <div className="about_hero">
                <div className="discription">
                    <h2>Our Company</h2>
                    <h1>Enable by people <br/> Powered by Technology <br/>open to everyone  </h1>
                </div>
                <div className="home_img" >
                    <img src={b8}/>
                </div>
            </div>

            <div className='about_discription'>
                <h1>We connect people and build communities to create economic opportunity for all.</h1>
                <p>At eBay, we create pathways to connect millions of sellers and buyers in more than 190 markets around the world. Our technology empowers our customers, providing everyone the opportunity to grow and thrive — no matter who they are or where they are in the world. And the ripple effect of our work creates waves of change for our customers, our company, our communities and our planet.</p>
            </div>
            
            <div className='about-blog'>
            <   div className="home_des" >
                    <h6>SMALL BUSINESS PROGRAMS</h6>
                    <h1>Up & Running Program</h1>
                    <h3>We launched our Up. & Running program in 2020 to provide small businesses who were hit especially hard during the COVID-19 pandemic with mentoring, funding and support. Over the past hree years, we have awarded $1.5 million to 150 small businesses from across the U.S. to fuel their business growth.</h3>
                </div>
                <div className="home_img" >
                    <img src={a1}/>
                </div>   
            </div>

            <div className='about-blog'>
                <div className="home_img" >
                    <img src={a2}/>
                </div>   
                <div className="home_des" >
                    <h6>SMALL BUSINESS PROGRAMS</h6>
                    <h1>Finnier Academy</h1>
                    <h3>We launched our Up. & Running program in 2020 to provide small businesses who were hit especially hard during the COVID-19 pandemic with mentoring, funding and support. Over the past hree years, we have awarded $1.5 million to 150 small businesses from across the U.S. to fuel their business growth.</h3>
                </div>
            </div>

            <div className='money'>
                <div className='money-1'>
                    <h1>$163M</h1>
                    <h3>raised in 2022</h3>
                </div>
                <div className='money-1'>
                    <h1>$163M</h1>
                    <h3>charities and nonprofits enrolled</h3>
                </div>
                <div className='money-1'>
                    <h1>$163M</h1>
                    <h3>raised since 2003</h3>
                </div>
            </div>

            <div className='about-blog'>
                <div className="home_des" >
                    <h6>SMALL BUSINESS PROGRAMS </h6>
                    <h1>Small Business Ambassador Network</h1>
                    <h3>We launched our Up. & Running program in 2020 to provide small businesses who were hit especially hard during the COVID-19 pandemic with mentoring, funding and support. Over the past hree years, we have awarded $1.5 million to 150 small businesses from across the U.S. to fuel their business growth.</h3>
                </div>
                <div className="home_img" >
                    <img src={a3}/>
                </div>   
            </div>

            <div className='about-blog'>
                <div className="home_img" >
                    <img src={a4}/>
                </div>   
                <div className="home_des" >
                    <h6>SMALL BUSINESS PROGRAMS</h6>
                    <h1>Finnier Academy</h1>
                    <h3>We launched our Up. & Running program in 2020 to provide small businesses who were hit especially hard during the COVID-19 pandemic with mentoring, funding and support. Over the past hree years, we have awarded $1.5 million to 150 small businesses from across the U.S. to fuel their business growth.</h3>
                </div>
            </div>

            <div className='about-final'>
                <div className='about-final-left'>
                    <h6>SMALL BUSINESS REPORT</h6>
                    <h3>The Home of Small Business</h3>
                    <h5>Our 2022 Small Business Report reveals how eBay is a crucial economic driver for many of our sellers.</h5>
                    <p>We surveyed 2,607 sellers in the U.S., U.K., Canada and Australia to determine how we’re fueling their growth while enabling community and global reach. According to our findings, 85% of respondents say eBay enables economic opportunities for small businesses, and 80% of sellers say eBay has helped them reach new markets around the world.</p>
                    <p>We’re also helping entrepreneurs to do more of what they love, with 45% of sellers surveyed identifying as “accidental entrepreneurs” — people who never expected to turn their passions and hobbies into a business.</p>
                    <img src={a5}/>
                </div>

                <div className='about-final-right'>
                    <h1>71%</h1>
                    <h2>of sellers</h2>
                    <p>rely heavily on eBay for their business</p>

                    <h1>94%</h1>
                    <h2>of sellers</h2>
                    <p>rely heavily on eBay for their business</p>

                    <h1>79%</h1>
                    <h2>of sellers</h2>
                    <p>rely heavily on eBay for their business</p>
                </div>
            </div>

       </section>
    )
}