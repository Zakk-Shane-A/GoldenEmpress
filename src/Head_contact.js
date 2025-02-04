import React from 'react';
import './css/index.css';
import './css/Head_contact.css';
import facebook from './pictures/socialmedia_icon/facebook.png';
import instagram from './pictures/socialmedia_icon/instagram.png';
import twitter from './pictures/socialmedia_icon/twitter.png';
const HeadContact = () => {
    return (
        
<div className='head_contact_main'>
<div className="wrapper">
    <div className="head_contact_container">
    <div className="head_text_contain">
        <section className='email_head' ><a href="mailto:sample@gmail.com">sample@gmail.com</a></section>
        <section className='phone_head' ><a href="tel:1234567890">123-456-7890</a></section>
    </div>
    <div className='head_social_contain'>
    <section className="social_icons"><a href="https://www.facebook.com/" target ="_blank"><img src ={facebook} alt ="facebook" width='44px'/></a></section>
    <section className="social_icons"><a href="https://www.instagram.com/" target ="_blank"><img src ={instagram} alt ="instagram" width='44px'/></a></section>
    <section className="social_icons"><a href="https://www.twitter.com/" target ="_blank"><img src ={twitter} alt ="twitter" width='44px'/></a></section>

</div>
</div>



</div>
</div>
    );
};

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector(".head_contact_main");
    
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scroll Down - Hide with animation
            header.style.transition = "0.5s ease-in";
            header.style.height = "40px";
            // header.style.display = "none" ;
            // header.style.opacity = "0";
        } else {
            // Scroll Up - Show again
            header.style.transition = "0.5s ease-out";
            header.style.height = "70px";
            // header.style.display = "flex";
            // header.style.opacity = "1";

        }
        
        lastScrollTop = scrollTop;
    });
});


export default HeadContact;