import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";


const SliderComponent = (props) => {


    const settings = {
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 2000,
      };
      return (
  <>
  <h2 className='sectionHeader'>Best Selling Products</h2>
          <Slider {...settings}>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </Slider>
          </>

      );
}



export default SliderComponent ;





// export default class AutoPlay extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 4000,
//       autoplaySpeed: 4000,
//       cssEase: "linear"
//     };
//     return (
//       <div>
//         <h2>Auto Play</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }