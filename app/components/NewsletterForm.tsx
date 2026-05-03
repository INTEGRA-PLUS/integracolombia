"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-5 flex w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.03] focus-within:border-white/40"
    >
      <input
        type="email"
        placeholder="tu@correo.com"
        className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-ink-400 outline-none"
        aria-label="Correo electrónico"
      />
      <button
        type="submit"
        className="m-1 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
      >
        Unirme
      </button>
    </form>
  );
}
