import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Button,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Navbar from "../../Navbar";
import { GetServerSideProps } from "next";
import React from "react";

export default function Products(props: { products: { data: any[] } }) {
  return (
    <Box bg="#d3e9f9" p="10px" h="100%">
      <Navbar />
      <Box mt="25px" px="25px">
        <Grid templateColumns="repeat(4, 1fr)" gap={24}>
          {props.products.data.map((item) => (
            <GridItem>
              <Box
                bg="#fff"
                p="10px"
                borderRadius="10px"
                boxShadow="0px 0px 30px #4c4b4b85"
              >
                <Box height="300px">
                  {item.attributes.Image.data.map((img) => (
                    <Image w="100%" h="100%" src={img.attributes.name} />
                  ))}
                </Box>
                <Box>
                  <Box h="60px" overflow="hidden" w="auto" mt="10px">
                    <Heading color="#000" m={0} p={0}>
                      {item.attributes.Name}
                    </Heading>
                  </Box>
                  <Text
                    color="#000"
                    mt="10px"
                    mb="0px"
                    p={0}
                    fontSize="22px"
                    fontWeight="600"
                  >
                    <Text m="0px 3px" display="inline-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="10"
                        fill="#000"
                      >
                        <path d="M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z" />
                      </svg>
                    </Text>
                    {item.attributes.Amount}
                  </Text>
                  <Box height="110px" overflow="hidden">
                    <Text color="#000" m={0} p={0}>
                      {item.attributes.description}
                    </Text>
                  </Box>
                  <Button
                    bg="#154eff"
                    color="#fff"
                    w="100%"
                    p="10px 15px"
                    border="none"
                    mt="15px"
                    borderRadius="5px"
                    _hover={{ bg: "#ccc", color: "#000" }}
                  >
                    Buy Now
                  </Button>{" "}
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  let a = await fetch(
    "https://saffan-ahmed-shaikh.github.io/products-json/product.json"
  );
  let products = await a.json();
  console.log(products);
  return {
    props: {
      products: products,
      name: "azhar",
    },
  };
};
