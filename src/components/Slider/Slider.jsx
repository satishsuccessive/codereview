import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderContainer from './style';
import { getRandomNumber, getNextRoundRobin }  from '../../libs/utils/math';
// import getNextRoundRobin from '../../libs/utils/math';
import { PUBLIC_IMAGE_FOLDER } from '../../configs/constant';


class Slider extends Component {
    constructor() {
        super()
        this.state = { index : 0 }
        this.blogPostImages = [`${PUBLIC_IMAGE_FOLDER}1.jpg`, `${PUBLIC_IMAGE_FOLDER}2.jpg`, `${PUBLIC_IMAGE_FOLDER}default.jpg`];
    }

    changeBlogPicForwards() {
        let i = this.state.index;
        if (i == this.blogPostImages.length - 1) {
            i = 0; 
        } else {
            i = i + 1; 
        }
        this.setState({index: i});
    }

    changeImg = () => {
       getNextRoundRobin(3, 1);
    }
    render() {
     var blogCurrentPic = this.blogPostImages[this.state.index];
       // console.log(getNextRoundRobin(3, 1));
        const { altText, banners, duration, height, random } = this.props;
        const src = [
            { sliderimg: `${PUBLIC_IMAGE_FOLDER}1.jpg` },
            { sliderimg: `${PUBLIC_IMAGE_FOLDER}2.jpg` },
            { sliderimg: `${PUBLIC_IMAGE_FOLDER}default.jpg` },
        ]
        console.log(src);
    return (
      <div>
          <SliderContainer>
          {/* {src.map((field) => (
              <img src={field.sliderimg} alt={altText} height={height} random={random} />
            ))} */}
                          <img src={blogCurrentPic} alt={altText} height={height} random={random} />

            <button className="next" onClick={(e) => this.changeBlogPicForwards(e)}>Next</button>
            </SliderContainer>
        </div>
      );
    }
}

Slider.propTypes = {
    altText: PropTypes.string.isRequired,
    banners: PropTypes.string,
    duration: PropTypes.number,
    height: PropTypes.number,
    random: PropTypes.bool,
}

Slider.defaultProps = {
    altText: 'Default Banner',
    banners: 'images/default.jpg',
    height: 400,
    random: false,
}
export default Slider;
