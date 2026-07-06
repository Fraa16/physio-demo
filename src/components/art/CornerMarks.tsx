/** Registration-mark crosses in the corners of dark panels — part of the "lab" motif. */
export function CornerMarks({ className = "" }: { className?: string }) {
  const mark = "pointer-events-none absolute h-4 w-4 text-lime/50";
  const cross = (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" className="h-full w-full">
      <path d="M8 2v12M2 8h12" />
    </svg>
  );

  return (
    <div className={className} aria-hidden="true">
      <span className={`${mark} left-5 top-5`}>{cross}</span>
      <span className={`${mark} right-5 top-5`}>{cross}</span>
      <span className={`${mark} bottom-5 left-5`}>{cross}</span>
      <span className={`${mark} bottom-5 right-5`}>{cross}</span>
    </div>
  );
}
