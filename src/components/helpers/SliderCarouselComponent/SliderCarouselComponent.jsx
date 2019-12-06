import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Slider from 'infinite-react-carousel';

const useStyles = makeStyles(theme => ({
  button: {
      margin: theme.spacing(1),
  }
}));

export default function SliderCarousel(props) {
  const classes = useStyles();
  debugger
  return(
    <Slider color="primary">
      {props.images.map((image, index) => {
        return (
          <img key={image.url} className='responsive-img'
            alt={image.alt}
            src={image.url}/>)
      })}

      {props.videos.map((video, index) => {
        return (
          <div class="video-container">
            <iframe width="750" height="450" 
                src={video.url}
                alt={video.alt}
                frameBorder="0"
                allow="accelerometer; autoplay;
                    encrypted-media; gyroscope;
                    picture-in-picture"
                allowFullScreen>
            </iframe>
          </div>)
      })}
    </Slider>
  )
}