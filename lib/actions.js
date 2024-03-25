"use server";

const { saveMeal } = require("./meal");

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
}
