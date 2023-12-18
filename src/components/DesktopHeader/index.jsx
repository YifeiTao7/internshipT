import React from "react";

import { Button, Img } from "D:/internship/src/components";

const DesktopHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[87%]">
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1240px] w-full">
            <Img
              className="h-10 w-14"
              src="images/img_layer1.svg"
              alt="layerOne"
            />
            <Button
              className="border border-gray-900 border-solid cursor-pointer font-inter font-semibold min-w-[94px] text-center text-sm"
              shape="round"
              color="black_900"
              size="xs"
              variant="fill"
            >
              {props?.tryItFree}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopHeader.defaultProps = { tryItFree: "Try it free" };

export default DesktopHeader;
