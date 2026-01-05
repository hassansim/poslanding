export type FeaturesBackgroundProps = {
  variant: string;
};

export const FeaturesBackground = (props: FeaturesBackgroundProps) => {
  return (
    <div
      className={`absolute bg-sky-800/10 box-border caret-transparent rounded-full ${props.variant}`}
    ></div>
  );
};
