import { Heading, Center } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "../components/TextInput";

import { RecipePage } from "./RecipePage";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((item) => {
    return (
      item.recipe.healthLabels
        .toString()
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
      item.recipe.label.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <>
      <Heading m={5} align="center">
        Recipe Checker
      </Heading>
      <Center>
        <TextInput onChange={handleChange} w={300} mb={5} />
      </Center>
      <RecipePage clickFn={clickFn} items={matchedRecipes} />
    </>
  );
};
