import React, { useEffect } from "react";
import CategoryCard from "../../CategoriesSection/CategoryCard/CategoryCard";
import styles from "./CategoriesContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/slices/categoriesSlice";
import { Link } from "react-router-dom";

export default function CategoriesContainer() {
  const categoriesState = useSelector(
    (state) => state.categories.categoriesData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className={styles.categories_container}>
      <div className={styles.categoriesTitle}>
        <span>Categories</span>
        <div className={styles.line}></div>
        <Link to={`/categories`}>
          <button className={styles.btn_category_card}>All categories</button>
        </Link>
      </div>

      <div className={styles.containerImg}>
        {
        categoriesState.slice(0, 4).map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
      <Link to={`/categories`}>
          <button className={styles.btn2_category_card}>All categories</button>
        </Link>
    </div>
  );
}