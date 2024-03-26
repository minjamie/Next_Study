"use server";
import { redirect } from "next/navigation";
const { saveMeal } = require("./meal");
function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.include("@") ||
    !meal.image ||
    meal.image.size === 0
  ){
    return { message: "Invalid input" };
  }

  await saveMeal(meal);
  redirect("/meals");
}
