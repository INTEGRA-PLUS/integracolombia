"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-5 flex w-full overflow-hidden rounded-full border border-mint-300/20 bg-white/[0.03] focus-within:border-mint-300/60"
    >
      <input
        type="email"
        placeholder="tu@correo.com"
        className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-ink-300 outline-none"
        aria-label="Correo electrónico"
      />
      <button
        type="submit"
        className="m-1 inline-flex shrink-0 items-center gap-2 rounded-full bg-mint-500 px-5 py-2 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-400"
      >
        Unirme
      </button>
    </form>
  );
}
