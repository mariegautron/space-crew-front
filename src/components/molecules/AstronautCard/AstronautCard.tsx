import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Astronaut } from "../../../contexts/ApiContext/services/astronauts";

const AstronautCard: FC<Astronaut> = ({
  id,
  name,
  description,
  pseudo,
  imageUrl,
  mission,
}) => {
  return (
    <Center py={6} w="100%" h="100%">
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "100%" }}
        height={{ sm: "100%", md: "100%" }}
        direction={{ base: "column", md: "row" }}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} maxHeight={300}>
          <Image objectFit="cover" boxSize="100%" src={imageUrl} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            @{pseudo}
          </Text>
          <Text textAlign={"center"} px={3}>
            {description}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge px={2} py={1} fontWeight={"400"}>
              #{mission ? mission.name : "Pas de mission affectée"}
            </Badge>
          </Stack>

          {/* <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"green.400"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
            >
              Follow
            </Button>
          </Stack> */}
        </Stack>
      </Stack>
    </Center>
  );
};

export default AstronautCard;
