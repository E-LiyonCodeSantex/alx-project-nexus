import type { ReactNode } from "react";

interface DetailRowProps {
  label: string;
  value: ReactNode;
}

const DetailRow = ({ label, value }: DetailRowProps) => (
  <p>
    <span className="text-black/40">{label}:</span>{' '}
    <span className="text-black">{value}</span>
  </p>
);

export default DetailRow;