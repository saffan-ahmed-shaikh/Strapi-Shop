import {
  Box,
  Text,
  Image,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Heading,
  Center,
  Button,
  Stack,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { IconButton, useBreakpointValue, Container } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/STONE-1450WEB_445e032a-622d-4717-8718-8cbc67141636_1400x.jpg?v=1652696915",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-bottom-2_1920x.jpg?v=1616659104",
    },
    {
      image:
        "https://images.bewakoof.com/uploads/grid/app/flash-sale-desktop-banner-tshirts-1652671862.gif",
    },
  ];

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {/* <IconButton
        aria-label="left-arrow"
        position="absolute"
        bg="transparent"
        left="0px"
        border="none"
        top="50%"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton> */}
      {/* Right Icon */}
      {/* <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right="0px"
        top="50%"
        bg="transparent"
        border="none"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton> */}
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box key={index} height={"500px"} position="relative">
            <Image src={card.image} height="100%" w="100%" />
            {/* This is the block you need to change, to customize the caption */}
            {/* <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w="50%"
                maxW={"lg"}
                position="absolute"
                top="50%"
                p="50px"
                transform="translate(0, -50%)"
              >
                <Heading fontSize="40px" m="0" p="0" color="#fff">
                  {card.title}
                </Heading>
                <Text fontSize="25px" color="black">
                  {card.text}
                </Text>
              </Stack>
            </Container> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
