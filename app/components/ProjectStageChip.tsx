export default function ProjectStageChip({ stage }: { stage: string }) {
  return (
    <span
      className={`px-1 text-white text-sm font-medium shadow max-w-fit ${
        stage === "SHIPPED" ? "bg-green-400" : "bg-slate-600"
      }`}
    >
      {stage}
    </span>
  );
}
