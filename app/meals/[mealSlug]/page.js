export default function MealDetailPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        meal {params.slug} Detail
      </h1>
    </main>
  );
}
