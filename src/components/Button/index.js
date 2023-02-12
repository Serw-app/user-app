import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder7: "rounded-radius7",
  CircleBorder13: "rounded-radius13",
  RoundedBorder33: "rounded-radius33",
  RoundedBorder3: "rounded-radius3",
  icbRoundedBorder20: "rounded-radius20",
  icbRoundedBorder17: "rounded-radius17",
  icbRoundedBorder9: "rounded-radius9",
};
const variants = {
  FillAmber400: "bg-amber_400",
  FillCyan300: "bg-cyan_300 text-white_A700",
  FillGray50: "bg-gray_50",
  FillDeeporangeA100: "bg-deep_orange_A100 text-white_A700",
  OutlineIndigo50028: "bg-white_A700 shadow-bs2 text-indigo_A700",
  OutlineIndigo50028_1: "bg-white_A700 shadow-bs1 text-indigo_A700",
  FillIndigoA200: "bg-indigo_A200 text-white_A700",
  icbFillBluegray803: "bg-bluegray_803",
  icbFillAmber400: "bg-amber_400",
  icbFillIndigoA201: "bg-indigo_A201",
  icbFillOrangeA100: "bg-orange_A100",
  icbFillDeeporangeA100: "bg-deep_orange_A100",
};
const sizes = {
  sm: "p-[5px]",
  md: "pr-[6px] py-[6px]",
  lg: "p-[9px]",
  xl: "pr-[6px] py-[9px]",
  "2xl": "p-[15px]",
  "3xl": "p-[18px]",
  "4xl": "pr-[16px] py-[24px]",
  smIcn: "p-[5px]",
  mdIcn: "p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder7",
    "CircleBorder13",
    "RoundedBorder33",
    "RoundedBorder3",
    "icbRoundedBorder20",
    "icbRoundedBorder17",
    "icbRoundedBorder9",
  ]),
  variant: PropTypes.oneOf([
    "FillAmber400",
    "FillCyan300",
    "FillGray50",
    "FillDeeporangeA100",
    "OutlineIndigo50028",
    "OutlineIndigo50028_1",
    "FillIndigoA200",
    "icbFillBluegray803",
    "icbFillAmber400",
    "icbFillIndigoA201",
    "icbFillOrangeA100",
    "icbFillDeeporangeA100",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "smIcn",
    "mdIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillAmber400",
  size: "sm",
};

export { Button };
