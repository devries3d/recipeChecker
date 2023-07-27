import { useState } from "react";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import { RecipeSearch } from "./pages/RecipeSearch";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div>
      {selectedItem ? (
        <RecipeItemPage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <RecipeSearch clickFn={setSelectedItem} />
      )}
    </div>
  );
};
