import { Box, Flex, keyframes, Text, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { tokens } from "../../theme/tokens";

const StatusIndicator: FC<{ isActive: boolean }> = ({ isActive }) => {
  const ringScaleMin = 0.33;
  const ringScaleMax = 0.66;

  const pulseRing = keyframes`
	0% {
    transform: scale(${ringScaleMin});
  }
	30% {
		transform: scale(${ringScaleMax});
	},
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  const pulseDot = keyframes`
	0% {
    transform: scale(0.9);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.9);
  }
	`;

  if (isActive) {
    return (
      <Flex alignItems="center" gap="10px">
        <Text>Disponible</Text>
        <Tooltip
          label={`Disponible pour une mission spatiale`}
          textTransform="capitalize"
        >
          <Box
            as="div"
            h={tokens.spacing.m}
            w={tokens.spacing.m}
            position="relative"
            bgColor={"green.300"}
            borderRadius="50%"
            _before={{
              content: "''",
              position: "relative",
              display: "block",
              width: "300%",
              height: "300%",
              boxSizing: "border-box",
              marginLeft: "-100%",
              marginTop: "-100%",
              borderRadius: "50%",
              bgColor: "green.300",
              animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }}
            _after={{
              animation: `2.25s ${pulseDot} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }}
          />
        </Tooltip>
      </Flex>
    );
  }

  return (
    <Flex alignItems="center" gap="10px">
      <Text>En mission</Text>
      <Tooltip label={`Déjà en mission !`} textTransform="capitalize">
        <Box
          as="div"
          h={tokens.spacing.m}
          w={tokens.spacing.m}
          position="relative"
          bgColor={"gray.300"}
          borderRadius="50%"
        />
      </Tooltip>
    </Flex>
  );
};

export default StatusIndicator;
