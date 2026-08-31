export default function OwnerCard({
  teamName,
  ownerName,
  championships,
}: {
  teamName: string;
  ownerName: string;
  championships: number;
}) {
  return (
    <div className="border border-paper-line bg-paper-raised p-6">
      <h3 className="font-display text-xl font-semibold text-ink">
        {teamName}
      </h3>
      <p className="mt-1 text-sm text-ink-muted">{ownerName}</p>
      <p className="mt-4 border-t border-paper-line pt-4 text-xs text-ink-faint">
        Championships: {championships}
      </p>
    </div>
  );
}
