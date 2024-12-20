import "./directory.component.css";
import { CategoryItem } from "../category-item/category-item-component";

export const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category}></CategoryItem>
        );
      })}
    </div>
  );
};
