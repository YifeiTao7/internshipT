import React from "react";

import { Button, Img, Input, Line, Text } from "./components";
import DesktopHeader from "./components/DesktopHeader";
const App = () => {
  const navigateToGoogle = () => {
    window.open('https://www.google.com', '_blank');
  };
  return (
      <>
        <div className="bg-gray-50 font-inter h-[860px] mx-auto relative w-full">
          <div
              className=" bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-start p-[141px] xl: md:px-5 right-[0]"
              style={{
                backgroundImage: "url('../images/img_65614621.png')"
              }}
          >
            <Text
                className="mb-[302px] mt-[238px] text-3xl sm:text-[26px] md:text-[28px] text-center text-orange-800"
                size="txtInterSemiBold30"
            >
              Binge-watch your way to fluency!
            </Text>
          </div>
          <DesktopHeader className="absolute flex flex-col h-16 md:h-auto inset-x-[0] items-center justify-between max-w-[1440px] mx-auto shadow-bs1 top-[0] w-full" />
          <div className="absolute flex flex-col font-epilogue h-max inset-y-[0] items-center justify-start left-[7%] my-auto md:px-5 w-auto">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.64px]"
                  size="txtEpilogueRomanBold32"
              >
                Start Learning Language
              </Text>
              <Text
                  className="mt-[21px] text-base text-black-900 text-center tracking-[0.32px]"
                  size="txtEpilogueRomanMedium16"
              >
              <span className="text-black-900 font-inter font-normal">
                New to Accented AI?
              </span>
                <span className="text-black-900 font-inter font-bold"> </span>
                <span className="text-blue-A400 font-inter font-semibold">
                Sign up for free
              </span>
              </Text>
              <div className="flex flex-col font-inter items-start justify-start mt-[33px] w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Input
                          name="input"
                          placeholder="Email address"
                          className="p-0 placeholder:text-blue_gray-500 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100 border-solid w-full"
                          type="email"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Input
                          name="input_One"
                          placeholder="Password"
                          className="p-0 placeholder:text-blue_gray-500 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100 border-solid w-full"
                          type="password"
                      ></Input>
                    </div>
                  </div>
                  <Button
                      className="border border-gray-900 border-solid cursor-pointer font-semibold text-base text-center w-full"
                      shape="round"
                      color="black_900"
                      size="sm"
                      variant="fill"
                  >
                    Sign In
                  </Button>
                  <div className="font-worksans h-[27px] relative w-full">
                    <Line className="absolute bg-gray-300 bottom-[44%] h-px inset-x-[0] mx-auto w-full" />
                    <Text
                        className="absolute bg-gray-50 h-full inset-[0] justify-center m-auto pb-0.5 pt-[5px] px-1.5 text-base text-black-900 w-max"
                        size="txtWorkSansRomanRegular16"
                    >
                      or
                    </Text>
                  </div>
                  <Button
                      className="common-pointer border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[398px] sm:min-w-full"
                      onClick={navigateToGoogle}
                      leftIcon={
                        <Img
                            className="h-6 mr-3"
                            src="images/img_social_icon.svg"
                            alt="Social icon"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                  >
                    <div className="font-semibold text-base text-left">
                      Sign In with Google
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};
export default App;
