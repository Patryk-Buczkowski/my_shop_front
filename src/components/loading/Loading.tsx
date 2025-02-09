type Props = {
  size: number;
};

export const Loading: React.FC<Props> = ({ size }) => {
  return (
    <>
      <div
        className={`animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2`}
      >
        <p>It is free server sorry for long waiting 😥</p>
        <div
          className={`animate-spin rounded-full  border-t-4 border-t-[var(--color-primary)] border-b-4 border-b-[var(--color-secondary)]`}
          style={{ width: size, height: size }}
        ></div>
      </div>
    </>
  );
};
