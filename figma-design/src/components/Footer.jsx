import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  VisuallyHidden,
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FaDiscord, FaFacebookF } from "react-icons/fa6";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"blackAlpha.100" }
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
    <Box bg={"#010e14"} color={"white"} mt={10} py={10}>
      <Container as={Stack} maxW={"6xl"}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex direction="column" spacing={6}>
            {/* Logo Section */}
            <Flex align="center" gap={3}>
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
              <Heading as="h2" size="lg" className="text-white font-play">
                EthAi
              </Heading>
            </Flex>

            {/* Social Icons */}
            <Stack direction={"row"} spacing={6} mt={5}>
              <SocialButton label={"Telegram"} href={"#"}>
                <FaTelegramPlane />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebookF />
              </SocialButton>
              <SocialButton label={"Discord"} href={"#"}>
                <FaDiscord />
              </SocialButton>
            </Stack>
          </Flex>

          {/* Call to Action Section */}
          <Stack spacing={4} maxW={"md"} align={"flex-start"}>
            <Heading
              as="h3"
              size="md"
              className="font-space"
              textAlign={{ base: "center", md: "left" }}
              mb={4}
            >
              “Designed for traders of today, just like you.”
            </Heading>
            <Flex
              direction="column"
              width="100%"
              as="form"
              onSubmit={(e) => e.preventDefault()}
            >
              <Flex alignItems="center" w="100%">
                <Input
                  placeholder="What’s your work email"
                  type="email"
                  bg="whiteAlpha.300"
                  border={0}
                  color="white"
                  _placeholder={{
                    color: "whiteAlpha.600",
                  }}
                  rounded="md"
                  w="full"
                  p={4}
                />
                <Button
                  bg="#CDFCFF"
                  color="black"
                  _hover={{
                    bg: "blue.200",
                  }}
                  rounded="md"
                  ml={3}
                  h="full"
                  p={4}
                  type="submit"
                >
                  Open dApp
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
