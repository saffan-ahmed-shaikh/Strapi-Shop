import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Navbar";
import Header from "../home/Header";
import Aboutuscontent from "./Aboutuscontent";

export default function Aboutus() {
  return (
    <Box bg="#d3e9f9" h="100%" w="100%" p="10px">
      <Navbar />
      <Box mt="35px">
        <Box maxW="90%" m="auto">
          <Aboutuscontent />
        </Box>
      </Box>
    </Box>
  );
}
