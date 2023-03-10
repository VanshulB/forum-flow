import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface WrapperProps extends PropsWithChildren {
  variant: "small" | "regular";
}
const Wrapper: React.FC<WrapperProps> = ({ children, variant = "regular" }) => {
  return (
    <Box
      mt={"20"}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w={"100%"}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
