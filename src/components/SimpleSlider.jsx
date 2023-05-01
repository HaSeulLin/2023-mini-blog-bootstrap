import React from "react";
import Slider from "react-slick";

// 폰트어썸에서 아이콘을 가져오기 위해 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 각기 다른 곳에서 불러올 아이콘의 이름이 같을 때 error
// as를 사용해서 이름을 바꿔서 불러올 수 있다
import { faEnvelope as fasEnvelope, faArrowAltCircleLeft, faAdd, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow : <SamplePrevArrow />,
    nextArrow : <SampleNextArrow />
  };

  const pictures = ['pic1.jpg', 'pic2.png', 'pic3.png'];

  return (
    <div>
      <h2>Main</h2>
      <Slider {...settings} className="mx-5">
        {
            pictures.map((pic, index)=>
            <div key={index}>
                    <img src={require(`../img/${pic}`)}
                        width="100%"
                        height="800vh" alt="" />
                </div>
            )
        }
      </Slider>
    </div>
  );
}

function SamplePrevArrow (props) {
    const {className, style, onClick} = props;
    return (
        <FontAwesomeIcon
            icon={faChevronLeft}
            className={className}
            style={{...style, display:'blcok', color:'red', width:"40px", height:"40px",
                    left:"10px", zIndex:"10"}}
            onClick={onClick}
        ></FontAwesomeIcon>
    )
};

function SampleNextArrow (props) {
    const {className, style, onClick} = props;
    return (
        <FontAwesomeIcon
            icon={faChevronRight}
            className={className}
            style={{...style, display:'blcok', color:'red', width:"40px", height:"40px",
                    right:"10px", zIndex:"10"}}
            onClick={onClick}
        ></FontAwesomeIcon>
    )
}