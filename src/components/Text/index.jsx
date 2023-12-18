import React from "react";

const sizeClasses = {
  txtWorkSansRomanRegular16: "font-normal font-worksans",
  txtInterSemiBold30: "font-inter font-semibold",
  txtEpilogueRomanBold32: "font-bold font-epilogue",
  txtEpilogueRomanMedium16: "font-epilogue font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
