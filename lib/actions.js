"use server";

async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    name: formData.get("name"),
    create_email: formData.get("email"),
  };

  console.log(meal);
}
