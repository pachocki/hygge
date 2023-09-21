"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  big?: boolean;
  white?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center, big, white }) => {
  const titleClassName = big ? "font-semibold text-5xl pt-10   sm:text-4xl sm:pb-4 xs:text-3xl xs:pb-2" : "text-2xl font-bold sm:text-lg";
  const colorClassName = white ? "text-white" : "text-black";
  const mainClassName = center ? "text-center" : "text-start";
  const subtitleClassName = `font-light text-neutral-500 mt-2  lg:text-sm sm:text-sm sm:mt-0 ${colorClassName}`;
  
  return (
    <div className={mainClassName}>
      <div className={`${titleClassName} ${colorClassName}`}>{title}</div>
      <div className={subtitleClassName}>{subtitle}</div>
    </div>
  );
};

export default Heading;