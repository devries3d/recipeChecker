import { Image } from "@chakra-ui/react";

export const RecipeItemCardImage = ({ item }) => {
  return (
    <>
      <Image
        height="200px"
        src={item.recipe.image}
        alt={item.recipe.label}
        objectFit="cover"
        borderTopRadius="xl"
      />
    </>
  );
};
