export interface LabelProps {
  label: string;
}
export const Label: React.FC<LabelProps> = ({ label }) => {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="username"
    >
      {label}
    </label>
  );
};
