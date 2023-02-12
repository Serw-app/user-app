import React from "react";
const variantClasses = {
  h1: "text-[9.93px]",
  h2: "font-bold text-[9.64px]",
  h3: "text-[9.16px]",
  h4: "font-normal text-[9.1px]",
  h5: "font-semibold text-[8.57px]",
  h6: "text-[8.4px]",
  body1: "font-bold text-[8.05px]",
  body2: "text-[7.71px]",
  body3: "font-normal text-[7.64px]",
  body4: "font-normal text-[7.61px]",
  body5: "font-semibold text-[7.16px]",
  body6: "font-extrabold md:text-[48px] sm:text-[48px] text-[64px]",
  body7: "font-semibold text-[6.11px]",
  body8: "text-[5.34px]",
  body9: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  body10: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  body11: "font-semibold text-[4.51px]",
  body12: "font-light sm:text-[32px] md:text-[34px] text-[36px]",
  body13: "sm:text-[26px] md:text-[28px] text-[30px]",
  body14: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  body15: "font-bold sm:text-[22px] md:text-[24px] text-[26px]",
  body16: "font-bold sm:text-[21.25px] md:text-[23.25px] text-[25.25px]",
  body17: "font-extrabold sm:text-[20.43px] md:text-[22.43px] text-[24.43px]",
  body18: "sm:text-[20px] md:text-[22px] text-[24px]",
  body19: "font-semibold sm:text-[18.44px] md:text-[20.44px] text-[22.44px]",
  body20: "sm:text-[18px] md:text-[20px] text-[22px]",
  body21: "font-bold sm:text-[17.1px] md:text-[19.1px] text-[21.1px]",
  body22: "sm:text-[16.19px] md:text-[18.19px] text-[20.19px]",
  body23: "font-normal text-[20px]",
  body24: "font-semibold text-[18.75px]",
  body25: "font-bold text-[18.33px]",
  body26: "font-semibold text-[16px]",
  body27: "font-bold text-[15.27px]",
  body28: "text-[14px]",
  body29: "font-light text-[13.74px]",
  body30: "text-[11.45px]",
  body31: "font-bold text-[10.69px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
