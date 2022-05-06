import React from 'react';
import '../styles/Footer.css';


function Footer() {
    return(
        <>
        <hr/><br/>
        <div className='footerSection'>
            <div className='subscriptionForm'>
                <form id='mailingList'>
                    <h3>NEWSLETTER</h3>
                    Subscribe to our mailing list for updates and news!
                    <br/><br/>
                    <input type='email' placeholder='name@email.com'/>
                    &nbsp;&nbsp;
                    <input type="submit" className='newsSubmit'/>
                </form>
            </div>
            <br/>

            <div className='helpSection'>
                <h3>Help</h3>
                <ul>
                    <li>About Us</li>
                    <li>F.A.Q.</li>
                    <li>Contact Us</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='exploreSection'>
                <h3>Explore</h3>
                <ul>
                    <li>Careers</li>
                    <li>Store Locations</li>
                    <li>Events</li>
                </ul>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='extraSection'>
                <h3>Third Section</h3>
                <ul>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ul>
            </div>
        </div>

        <div className='footerBar'>
            Copyright © 2022 Daun, Matthew, Shabana, Uyenvy
        </div>
        </>
    )
}

export default Footer;