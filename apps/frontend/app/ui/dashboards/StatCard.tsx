export default function StatCard({
  title,
  value,
  hint,
}: {
  title: string;
  value: any;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600 dark:text-gray-300">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
      {hint && <div className="text-xs text-gray-500">{hint}</div>}
    </div>
  );
}
