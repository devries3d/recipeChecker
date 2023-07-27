import { SimpleGrid } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipePage = ({ items, clickFn }) => {
  return (
    <>
      <SimpleGrid p={5} spacing={5} minChildWidth="300px">
        {items.map((item, index) => (
          <RecipeItemCard clickFn={clickFn} key={index} item={item} />
        ))}
      </SimpleGrid>
    </>
  );
};
