type Props = { size?: number; color?: string; className?: string };

/** Facebook brand mark (Simple Icons). Lucide ships no brand icons. */
export function FacebookIcon({ size = 24, color = "currentColor", className }: Props) {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className={className}
      style={{ flexShrink: 0 }}
    >
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036c-.328-.017-.642-.017-.898-.017-1.001 0-1.68.223-2.126.647-.446.424-.658 1.036-.658 1.786v1.555h4.127l-.366 1.867-.255 1.8H13.19v8.147C17.869 22.966 21.5 18.916 21.5 14c0-5.523-4.477-10-10-10S1.5 8.477 1.5 14c0 4.554 3.033 8.372 7.601 9.691z" />
    </svg>
  );
}
