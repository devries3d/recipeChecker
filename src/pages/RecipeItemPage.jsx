import {
  Image,
  Center,
  Flex,
  Container,
  AbsoluteCenter,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { RecipeItemPageIngredients } from "../components/RecipeItemPageIngredients";
import { RecipeItemPageLabels } from "../components/RecipeItemPageLabels";

export const RecipeItemPage = ({ item, clickFn }) => {
  return (
    <>
      <Container maxW="700px" bg="blue.50" padding={0}>
        <Flex bg="blue.50" padding={5}>
          <ArrowBackIcon
            boxSize="50px"
            onClick={() => clickFn()}
            cursor="pointer"
            color="blue.400"
          />
          <AbsoluteCenter axis="horizontal">
            <Image height="50px" src="src/assets/react.svg" />
          </AbsoluteCenter>
        </Flex>
        <Center>
          <Image
            width="700px"
            height="300px"
            src={item.recipe.image}
            alt={item.recipe.label}
            objectFit="cover"
          />
        </Center>

        <Grid p={5} templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <RecipeItemPageIngredients item={item} />
          </GridItem>

          <GridItem>
            <RecipeItemPageLabels item={item} />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
