export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[46rem] px-4 py-16 sm:px-8 sm:py-24">
      <h1 className="display-2">{title}</h1>
      <div className="mt-8 space-y-5">{children}</div>
    </div>
  );
}
