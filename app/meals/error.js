"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>an error occurred!</h1>
      <p>Failed to fetch meal data. Please try again later</p>
    </main>
  );
}
