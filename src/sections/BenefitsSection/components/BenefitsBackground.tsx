export type BenefitsBackgroundProps = {
  variant: string;
};

export const BenefitsBackground = (props: BenefitsBackgroundProps) => {
  return (
    <div
      className={`absolute bg-sky-800/10 box-border caret-transparent blur-xl rounded-full ${props.variant}`}
    ></div>
  );
};
