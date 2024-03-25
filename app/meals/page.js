import { Suspense } from "react";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meal";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals}></MealsGrid>;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created </h1>
        <span className={classes.highlight}>by you</span>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>fetch Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
