import { Stack, Text, Divider } from "@chakra-ui/react";

export const RecipeItemPageIngredients = ({ item }) => {
  return (
    <>
      <Stack>
        <Text style={{ textTransform: "uppercase" }} fontSize="xl">
          {item.recipe.mealType}
        </Text>
        <Divider />
        <Text as="b" fontSize="xl">
          {item.recipe.label}
        </Text>
        <Text>Total cooking time: {item.recipe.totalTime} Minutes</Text>
        <Text>Servings: {item.recipe.yield}</Text>
        <Text as="b" fontSize="xl">
          Ingredients:
        </Text>
        {item.recipe.ingredientLines.map((ingredientLines, index) => (
          <Text
            fontSize="l"
            pb={2}
            style={{ textTransform: "uppercase" }}
            key={index}
          >
            {ingredientLines}
          </Text>
        ))}
      </Stack>
    </>
  );
};
