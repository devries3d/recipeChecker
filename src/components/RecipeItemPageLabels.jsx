import { Stack, Text, Wrap, Tag } from "@chakra-ui/react";
import { Nutrients } from "./Nutrients";

export const RecipeItemPageLabels = ({ item }) => {
  let checkCautions = item.recipe.cautions.length === 0;
  let checkDiet = item.recipe.dietLabels.length === 0;
  return (
    <>
      <Stack>
        <Text fontSize="xl">Health labels:</Text>
        <Wrap>
          {item.recipe.healthLabels.map((healthLabels, index) => (
            <Tag
              fontSize="l"
              bg="purple.100"
              color="purple.500"
              p={2}
              style={{ textTransform: "uppercase" }}
              key={index}
            >
              {healthLabels}
            </Tag>
          ))}
        </Wrap>
        {!checkDiet && <Text fontSize="xl">Diet:</Text>}
        <Wrap>
          {item.recipe.dietLabels.map((dietLabels, index) => (
            <Tag
              fontSize="l"
              bg="green.100"
              color="green.500"
              p={2}
              style={{ textTransform: "uppercase" }}
              key={index}
            >
              {dietLabels}
            </Tag>
          ))}
        </Wrap>
        {!checkCautions && <Text fontSize="xl">Cautions:</Text>}
        <Wrap>
          {item.recipe.cautions.map((cautions, index) => (
            <Tag
              fontSize="l"
              bg="red.100"
              color="red.500"
              p={2}
              style={{ textTransform: "uppercase" }}
              key={index}
            >
              {cautions}
            </Tag>
          ))}
        </Wrap>
        <Nutrients item={item} />
      </Stack>
    </>
  );
};
