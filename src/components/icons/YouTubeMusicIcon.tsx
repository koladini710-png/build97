const YouTubeMusicIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" />
    </svg>
  );
};

export default YouTubeMusicIcon;
