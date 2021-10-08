export const Show: React.FC<{ when: boolean }> = ({ when, children }) => {
  if (when) return <>{children}</>;
  return <></>;
};
