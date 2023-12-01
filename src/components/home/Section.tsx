import React from "react";

interface IHomeSectionProps {
  title: string;
  subtitle: string;
  titleIcon?: React.ReactNode;
  children: React.ReactNode;
}

const HomeSection: React.FC<IHomeSectionProps> = ({
  title,
  titleIcon,
  subtitle,
  children,
}) => {
  return (
    <section className="flex flex-col items-start gap-6 self-stretch">
      <div className="flex flex-col items-start self-stretch">
        <div className="flex items-center gap-1 self-stretch">
          {titleIcon ?? null}
          <h2 className="w-full text-left text-[#003509] text-2xl font-semibold tracking-[-0.144px]">
            {title}
          </h2>
        </div>
        <p className="w-full text-left text-[#003509] text-base leading-[28px]">
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  );
};

export default HomeSection;
