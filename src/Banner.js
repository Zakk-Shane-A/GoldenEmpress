import './css/Banner.css'
import bannerimage from './pictures/banner_img.png';

function Banner(){
    return(
        <div className='banner'>
<section className='banner_section'>
    <div className='banner_wrapper'>
<div className='banner_container'>
 <aside className='banner_text'>
     <span>Seasonal <span className='span_text'>Sale</span></span>
     <h2>Men's Fashion</h2>
     <section className='banner_buttons'>
            <button className='banner_button'>Shop Now</button>
            <button className='banner_second_button'>Read More</button>
     </section>
</aside>
<div className='banner_image_container'>
    <img src={bannerimage} alt='banner image' />
    </div> 
</div>
</div>
</section>
</div>
    );
}

export default Banner;