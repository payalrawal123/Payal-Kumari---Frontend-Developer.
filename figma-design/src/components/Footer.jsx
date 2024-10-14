import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    VisuallyHidden,
    useColorModeValue,
    Flex,
  } from "@chakra-ui/react";
  import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
  import { FaDiscord, FaFacebookF } from "react-icons/fa6";
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box className="bg-[#010e14] mt-[70px]" color={"white"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            spacing={8}
          >
            <Flex spacing={20}>

            <Stack spacing={6} align={{ base: "center", md: "flex-start" }}>
              <Box>
                <div className="flex items-center gap-[5px]">
                  <div className="grid grid-cols-3 gap-[1px] p-2 max-w-max">
                    <div className="w-[11.31px] h-[11.31px] bg-logoBg1 rounded-tr-[100px]"></div>
                    <div className="w-[11.31px] h-[11.31px] bg-logoBg2"></div>
                    <div className="w-[11.31px] h-[11.31px] bg-logoBg2 rounded-tr-[100px]"></div>
                    <div className="w-[11.31px] h-[11.31px] bg-logoBg2"></div>
                    <div className="w-[11.31px] h-[11.31px] bg-none"></div>
                    <div className="w-[11.31px] h-[11.31px] bg-logoBg2"></div>
                    <div className="w-[11.31px] h-[11.31px] bg-logoBg2 rounded-bl-[100px]"></div>
                    <div className="w-[11.31px] h-[11.31px] bg-logoBg1 rounded-br-[100px]"></div>
                    <div className="w-[11.31px] h-[11.31px] bg-logoBg2 rounded-bl-[100px]"></div>
                  </div>
                  <div className="text-[24px] font-bold leading-[22px] tracking-[-0.03px] text-white font-play">
                    EthAi
                  </div>
                </div>
              </Box>
  
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTelegramPlane />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaFacebookF />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaDiscord />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack
              align={"flex-start"}
              spacing={4}
              display={{ base: "none", sm: "none", md: "flex" }}
            >
              <h1 className="text-[32px] lg:text-[32px] md:text-[24px] font-bold text-white font-space">
                “Designed for traders of today, just like you.”
              </h1>
              <div className="flex items-center">
                <div className="relative w-[520px] md:w-[420px] h-[50px] max-w-[520px] border-[1px] border-white rounded-[12px] p-[2px]">
                  <input
                    type="email"
                    placeholder="What’s your work email"
                    className="w-full h-[44px] pl-4 pr-24 rounded-[12px] bg-footerBg text-white focus:bg-whiteAlpha-200 border-none"
                  />
                  <button className="absolute inset-y-0 right-0 md:right-0 h-[42px] px-6 text-white bg-dApp border border-dAppBorder rounded-[12px] hover:bg-navButtonColor hover:text-black hover:font-medium mt-1 mr-1 mb-1">
                    Open dApp
                  </button>
                </div>
              </div>
            </Stack>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  