import {
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  Center,
  Tag,
  Wrap,
} from "@chakra-ui/react";

import { RecipeItemCardImage } from "./RecipeItemCardImage";

export const RecipeItemCard = ({ item, clickFn }) => {
  let checkVegan = item.recipe.healthLabels.includes("Vegan");

  let checkVegetarian = item.recipe.healthLabels.includes("Vegetarian");
  let checkCautions = item.recipe.cautions.length === 0;
  let dishType1 = item.recipe.dishType.toString();
  let dishType2 = dishType1.charAt(0).toUpperCase() + dishType1.slice(1);

  return (
    <>
      <Card
        maxW="sm"
        borderRadius="xl"
        onClick={() => clickFn(item)}
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
      >
        <RecipeItemCardImage item={item} />

        {/* <Image
          height="200px"
          src={item.recipe.image}
          alt="Green double couch with wooden legs"
          objectFit="cover"
          borderTopRadius="xl"
        /> */}

        <CardBody align="center">
          <Stack spacing={3}>
            <Text style={{ textTransform: "uppercase" }} fontSize="xl">
              {item.recipe.mealType}
            </Text>
            <Divider />
            <Heading size="md">{item.recipe.label}</Heading>
            <Center>
              <Wrap>
                {checkVegan && (
                  <Tag fontSize="l" bg="purple.100" color="purple.500" p={2}>
                    VEGAN
                  </Tag>
                )}
                {checkVegetarian && (
                  <Tag fontSize="l" bg="purple.100" color="purple.500" p={2}>
                    VEGETARIAN
                  </Tag>
                )}
              </Wrap>
            </Center>
            <Center>
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
            </Center>

            <Text fontSize="xl">Dish: {dishType2}</Text>
            {!checkCautions && <Text fontSize="xl">Cautions:</Text>}
            <Center>
              <Wrap>
                {item.recipe.cautions.map((cautionLabels, index) => (
                  <Tag
                    fontSize="l"
                    bg="red.100"
                    color="red.500"
                    p={2}
                    style={{ textTransform: "uppercase" }}
                    key={index}
                  >
                    {cautionLabels}
                  </Tag>
                ))}
              </Wrap>
            </Center>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
