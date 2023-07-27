import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input backgroundColor="blue.50" onChange={onChange} {...props} />
);
