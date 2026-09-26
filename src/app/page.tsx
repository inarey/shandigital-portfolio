export default function Home() {
  return (
    <main className="min-h-screen p-16">
      <h1 className="text-5xl font-bold text-heading">Chef by day.</h1>
      <p className="mt-4 text-muted">This text should be soft gray.</p>
      <div className="mt-8 flex gap-6 font-semibold">
        <span className="text-gold">Gold</span>
        <span className="text-teal">Teal</span>
      </div>
      <div className="mt-8 rounded-2xl border border-line bg-card p-6">
        This is a card.
      </div>
    </main>
  );
}