import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  InputRightElement,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Spacer,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import Navbar from "../../Navbar";

export default function Contact() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box bg="#d3e9f9" h="100%" w="100%" p="10px">
      <Navbar />
      <Box p="0px 30px">
        <Box
          bg="#fff"
          boxShadow="0px 0px 30px #4c4b4b85"
          borderRadius="10px"
          mt="25px"
        >
          <Box
            h="100%"
            w="100%"
            p="60px"
            backgroundImage="url('https://uploads-ssl.webflow.com/5efbc66bfe713c08511b3024/60258e4389d7a2d8de88e505_Curve%20Line%20(1).svg')"
          >
            <Flex w="100%">
              <Box w="50%" pr="40px">
                <Box>
                  <Heading
                    fontSize="50px"
                    fontWeight="700"
                    color="#0a0535"
                    m="0px"
                  >
                    Let's chat. Tell me about your Experience.
                  </Heading>
                  <Text color="#4a5a83" fontSize="18px" fontWeight="500">
                    Let's create something together 🤟{" "}
                  </Text>
                </Box>
                <Box
                  bg="#fff"
                  boxShadow="0px 0px 10px #4c4b4b33"
                  _hover={{
                    boxShadow: "0px 0px 10px #562af0a6",
                    border: "2px solid #562af0",
                  }}
                  border="2px solid #fff"
                  borderRadius="10px"
                  p="15px"
                >
                  <Link href="#">
                    <a>
                      <Flex w="100%" h="100%">
                        <Box display="flex" alignItems="center">
                          <Box mr="15px">
                            <Box
                              bg="#8c97ac4f"
                              borderRadius="10px"
                              p="10px"
                              display="flex"
                              alignItems="center"
                            >
                              {/* <Image
                                src="https://uploads-ssl.webflow.com/5efbc66bfe713c08511b3024/5efbda344323255f65042dbb_mail-icon.svg"
                                w="25px"
                              /> */}
                            </Box>
                          </Box>
                          <Box>
                            <Text
                              fontSize="20px"
                              fontWeight="400"
                              color="#1b2d45"
                              m={0}
                            >
                              Mail me at
                            </Text>
                            <Text
                              m="0"
                              fontSize="20px"
                              fontWeight="700"
                              color="#562af0"
                            >
                              aashish@millionframes.com
                            </Text>
                          </Box>
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                </Box>
              </Box>
              <Spacer />
              <Box
                w="50%"
                bg="#fff"
                boxShadow="0px 0px 30px #4c4b4b85"
                borderRadius="10px"
                p="50px"
              >
                <Flex align={"center"} justify={"center"} bg="#fff">
                  <Stack spacing={8} mx={"auto"} w="100%" py={12} px={6}>
                    <Stack align={"center"}>
                      <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                      </Heading>
                      <Text fontSize={"lg"} color={"gray.600"}>
                        to enjoy all of our cool features ✌️
                      </Text>
                    </Stack>
                    <Box rounded={"lg"} bg="#fff" boxShadow={"lg"} p={8}>
                      <Stack spacing={4}>
                        <HStack>
                          <Box>
                            <FormControl id="firstName" isRequired>
                              <FormLabel>First Name</FormLabel>
                              <Input type="text" />
                            </FormControl>
                          </Box>
                          <Box>
                            <FormControl id="lastName">
                              <FormLabel>Last Name</FormLabel>
                              <Input type="text" />
                            </FormControl>
                          </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                          <FormLabel>Email address</FormLabel>
                          <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                          <FormLabel>Password</FormLabel>
                          <InputGroup>
                            <Input type={showPassword ? "text" : "password"} />
                            <InputRightElement h={"full"}>
                              <Button
                                variant={"ghost"}
                                onClick={() =>
                                  setShowPassword(
                                    (showPassword) => !showPassword
                                  )
                                }
                              >
                                {showPassword ? "hide" : "show"}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                          <Button
                            loadingText="Submitting"
                            size="lg"
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                              bg: "blue.500",
                            }}
                          >
                            Sign up
                          </Button>
                        </Stack>
                        <Stack pt={6}>
                          <Text align={"center"}>
                            Already a user? <Link href="#">Login</Link>
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
