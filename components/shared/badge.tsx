export default function Badge({ label }: { label: string }) {
  return (
    <div className="flex max-w-max items-center justify-center rounded-full bg-malachite-alpha-200 px-3 py-1 backdrop-blur-xl">
      <span className="text-sm leading-5.5 text-malachite-200 lg:text-base lg:leading-6.25">
        {label}
      </span>
    </div>
  );
}
