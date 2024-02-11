import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	fade:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight:true,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 2000,

};
return (
	<>
	<div className="tag">
		<h1 className="text-center font-bold text-xl">My Digital Art</h1>
	</div>
	<div className="h-screen text-center">
		<div className="w-full h-full flex justify-around gap-5 "> 
		{images.map((item) => (
			<div className="w-cover m-5"key={item.id}>
			<img src={item.src} alt={item.alt} className="text-center" />
			</div>
		))}
		</div>
	</div>
		</>
)
}
export default ImageSlider;
