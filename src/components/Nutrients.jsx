import { Stack, Text, Wrap } from "@chakra-ui/react";

export const Nutrients = ({ item }) => {
  return (
    <>
      <Text as="b" fontSize="xl">
        Total nutrients:
      </Text>
      <Wrap>
        <Stack gap={0} p={2} background="blue.100">
          <Text>
            {`${parseInt(item.recipe.totalNutrients.ENERC_KCAL.quantity)} `}
            {item.recipe.totalNutrients.ENERC_KCAL.unit}
          </Text>
          <Text as="b" fontSize="sm">
            CALORIES
          </Text>
        </Stack>
        <Stack gap={0} p={2} background="blue.100">
          <Text>
            {`${parseInt(item.recipe.totalNutrients.CHOCDF.quantity)} `}
            {item.recipe.totalNutrients.CHOCDF.unit}
          </Text>
          <Text as="b" fontSize="sm">
            CARBS
          </Text>
        </Stack>
        <Stack gap={0} p={2} background="blue.100">
          <Text>
            {`${parseInt(item.recipe.totalNutrients.PROCNT.quantity)} `}
            {item.recipe.totalNutrients.PROCNT.unit}
          </Text>
          <Text as="b" fontSize="sm">
            PROTEIN
          </Text>
        </Stack>
        <Stack p={2} background="blue.100">
          <Text>
            {`${parseInt(item.recipe.totalNutrients.FAT.quantity)} `}
            {item.recipe.totalNutrients.FAT.unit}
          </Text>
          <Text as="b" fontSize="sm">
            FAT
          </Text>
        </Stack>
        <Stack p={2} background="blue.100">
          <Text>
            {`${parseInt(item.recipe.totalNutrients.CHOLE.quantity)} `}
            {item.recipe.totalNutrients.CHOLE.unit}
          </Text>
          <Text as="b" fontSize="sm">
            CHOLESTEROL
          </Text>
        </Stack>
        <Stack p={2} background="blue.100">
          <Text>
            {`${parseInt(item.recipe.totalNutrients.NA.quantity)} `}
            {item.recipe.totalNutrients.NA.unit}
          </Text>
          <Text as="b" fontSize="sm">
            SODIUM
          </Text>
        </Stack>
      </Wrap>
    </>
  );
};
