type Props = {
  size: number;
};

export const Loading: React.FC<Props> = ({ size }) => {
  return (
    <>
      <div
        className={`absolute bottom-10 left-1/2 w-40 -translate-x-1/2 transform animate-bounce text-center`}
      >
        <p className="w-fit">It is free server sorry for long waiting 😥</p>
        <div
          className={`animate-spin rounded-full border-b-4 border-t-4 border-b-[var(--color-secondary)] border-t-[var(--color-primary)]`}
          style={{ width: size, height: size }}
        ></div>
      </div>
    </>
  );
};
