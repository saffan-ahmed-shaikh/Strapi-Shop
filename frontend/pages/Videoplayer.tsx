import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactPlayer from "react-player";
export default function Videoplayer() {
  return (
    <Box id="myVideoContainer" display="inline-block">
      <ReactPlayer
        url="https://tfoclientappmedia.blob.core.windows.net/clientappmedia/Video/week%2017.mp4"
        controls={true}
        playing={true}
        playIcon={<button style={{ display: "none" }}>Play</button>}
        light="https://a.storyblok.com/f/127566/1920x1080/9aa130af92/week17.jpeg"
      />
    </Box>
  );
}
