import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
    "https://images.thedirect.com/media/article_full/marvel-posters-ranked.jpg",
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://e1.pxfuel.com/desktop-wallpaper/365/190/desktop-wallpaper-baahubali-movie-posters-at-shade-baahubali.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://e1.pxfuel.com/desktop-wallpaper/436/844/desktop-wallpaper-kgf-chapter-2-kgf-2.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://c4.wallpaperflare.com/wallpaper/690/285/233/5bd08042c789d-wallpaper-preview.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://www.koimoi.com/wp-content/new-galleries/2022/10/Box-Office-Vikram-Vedha-finds-a-place-amongst-Top-10-Bollywood-openers-of-2022-00001.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://wallpapercave.com/wp/wp1945919.jpg',
  },
];

const Carousel=()=> {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box >
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
  
        
      
        {images.map((step, index) => (
          <div key={step.label}   width={"100%"}
          height={"100%"}>
            {Math.abs(activeStep - index) <= 2 ? (
                <Box margin={"auto"} width="90%" height={"50vh"} padding={2} >
        <img
          src={step.imgPath}
          alt={step.label}
          width={"100%"}
          height={"100%"}
        />

      </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;
