import React from "react";

import {
  Img,
  Text,
  Button,
  RatingBar,
  Line,
  Switch,
  PagerIndicator,
} from "components";

const DribbbleShootPage = () => {
  return (
    <>
      <div className="bg-white_A700 font-nunitosans h-[1200px] mx-[auto] relative w-[100%]">
        <div className="absolute bottom-[0] md:h-[2161px] sm:h-[2161px] h-[2234px] inset-x-[0] mx-[auto] w-[100%]">
          <div className="absolute md:h-[1200px] sm:h-[1200px] h-[1210px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <Img
              src="images/img_background.png"
              className="absolute h-[1200px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
              alt="Background"
            />
            <div className="absolute bg-white_A700_2d border border-solid border-white_A700 bottom-[0] flex flex-col items-center justify-start p-[11px] right-[4%] w-[36%]">
              <Img
                src="images/img_polesan2.png"
                className="h-[971px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                alt="PolesanTwo"
              />
            </div>
            <div className="absolute bg-white_A700_2d border border-solid border-white_A700 bottom-[0] flex flex-col items-center justify-start left-[4%] p-[11px] w-[36%]">
              <Img
                src="images/img_polesan1.png"
                className="h-[970px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                alt="PolesanOne"
              />
            </div>
          </div>
          <Img
            src="images/img_group.svg"
            className="absolute h-[2161px] inset-[0] justify-center m-[auto] w-[auto]"
            alt="Group"
          />
        </div>
        <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-[auto] pb-[37px] md:px-[20px] sm:px-[20px] w-[46%]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="h-[417px] md:h-[635px] sm:h-[635px] relative w-[100%]">
              <div className="h-[417px] md:h-[635px] sm:h-[635px] m-[auto] w-[100%]">
                <div className="h-[417px] md:h-[635px] sm:h-[635px] m-[auto] w-[100%]">
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-start justify-start mx-[auto] top-[1%] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group15.svg')" }}
                  >
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[18px] items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                      <Img
                        src="images/img_rectangle36.svg"
                        className="h-[372px] w-[auto]"
                        alt="RectangleThirtySix"
                      />
                      <div className="flex flex-col items-end justify-start md:mt-[0] sm:mt-[0] mt-[22px] md:w-[100%] sm:w-[100%] w-[23%]">
                        <div className="flex flex-row gap-[17px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[72%]">
                          <div className="flex flex-col items-center justify-start w-[23%]">
                            <Text
                              className="font-semibold text-gray_600 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Login
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-semibold min-w-[65px] text-[9.16px] text-center text-gray_900 w-[auto]"
                            shape="RoundedBorder3"
                          >
                            Sign Up
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start mr-[3px] mt-[69px] md:w-[100%] sm:w-[100%] w-[98%]">
                          <div
                            className="bg-cover bg-no-repeat md:h-[44px] sm:h-[44px] h-[64px] relative rounded-radius6 w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group12.svg')",
                            }}
                          >
                            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[6%] w-[88%]">
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="mt-[9px] text-bluegray_500 text-left w-[auto]"
                                    variant="body5"
                                  >
                                    Lucy Niana
                                  </Text>
                                  <Text
                                    className="bg-cyan_300 h-[12px] mb-[5px] not-italic px-[6px] rounded-radius2 text-left text-white_A700 w-[31px]"
                                    variant="body4"
                                  >
                                    Done
                                  </Text>
                                </div>
                                <Text
                                  className="text-indigo_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Develop Communication Plan
                                </Text>
                                <div className="flex flex-row items-start justify-between mt-[3px] w-[100%]">
                                  <div className="flex flex-row items-center justify-evenly w-[auto]">
                                    <RatingBar
                                      className=""
                                      value={4}
                                      starCount={5}
                                      color="#cccccc"
                                      activeColor="#ffcc19"
                                      size={8}
                                    ></RatingBar>
                                  </div>
                                  <div className="border border-amber_300_90 border-solid h-[10px] mt-[2px] rounded-radius50 w-[10px]"></div>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_vector2.svg"
                              className="absolute bottom-[0] h-[17px] right-[6%] w-[17px]"
                              alt="VectorTwo"
                            />
                          </div>
                        </div>
                        <div className="md:h-[110px] sm:h-[110px] h-[85px] mt-[29px] relative w-[66%]">
                          <div className="absolute border border-dashed border-white_A700 flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[5px] rounded-radius42 w-[85px]">
                            <div className="bg-indigo_A400 flex flex-col h-[73px] items-end justify-start pt-[6px] px-[6px] rounded-radius36 w-[73px]">
                              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[91%]">
                                <Img
                                  src="images/img_design57b902be_65x55.png"
                                  className="h-[65px] md:h-[auto] sm:h-[auto] object-cover rounded-radius36 w-[100%]"
                                  alt="design57b902be"
                                />
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute bg-gray_50 h-[10px] justify-center pl-[13px] pr-[10px] py-[2px] right-[0] rounded-radius5 text-left text-teal_400 top-[32%] w-[34px]"
                            variant="body11"
                          >
                            Mark
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col font-poppins h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[38px] sm:px-[20px] w-[59%]"
                    style={{ backgroundImage: "url('images/img_group14.png')" }}
                  >
                    <div className="flex flex-col gap-[41px] items-start justify-start mb-[72px] md:ml-[0] sm:ml-[0] ml-[33px] md:w-[100%] sm:w-[100%] w-[74%]">
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[30%]">
                        <div className="flex flex-row items-start justify-evenly w-[100%]">
                          <div className="bg-amber_400 flex flex-col h-[13px] items-center justify-start p-[2px] rounded-radius6 w-[13px]">
                            <Img
                              src="images/img_volume.svg"
                              className="h-[9px] w-[8px]"
                              alt="volume"
                            />
                          </div>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body30"
                          >
                            TeamFlow
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-nunitosans gap-[5px] justify-start w-[100%]">
                        <div className="bg-purple_300 h-[8px] md:ml-[0] sm:ml-[0] ml-[137px] mr-[112px] rounded-radius50 w-[8px]"></div>
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <Text
                            className="bg-white_A700 h-[20px] not-italic pl-[3px] pr-[11px] py-[5px] rounded-radius3 text-gray_700 text-left text-shadow-ts tracking-ls03054167175292969 md:tracking-ls1 sm:tracking-ls1 w-[109px]"
                            variant="body3"
                          >
                            👋 Welcome to TeamFlow
                          </Text>
                          <div className="md:h-[68px] sm:h-[68px] h-[75px] mt-[6px] relative w-[100%]">
                            <Text
                              className="absolute inset-x-[0] leading-[126.90%] mx-[auto] text-left text-white_A700 top-[0] tracking-ls04886667251586914 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              variant="body17"
                            >
                              Work the way that works for you
                            </Text>
                            <Img
                              src="images/img_cursor.svg"
                              className="absolute bottom-[0] h-[21px] right-[13%] w-[21px]"
                              alt="cursor"
                            />
                          </div>
                          <Line className="bg-cyan_300 h-[2px] mt-[2px] w-[10%]" />
                          <div className="h-[47px] md:h-[48px] sm:h-[48px] mt-[12px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                            <Text
                              className="absolute font-normal inset-x-[0] leading-[160.40%] mx-[auto] not-italic text-left text-white_A700 top-[0] tracking-ls022906251907348632 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              variant="body30"
                            >
                              Create, Build, Collaborate and ship products very
                              faster{" "}
                            </Text>
                            <Img
                              src="images/img_polygon2.svg"
                              className="absolute bottom-[0] h-[21px] right-[13%] w-[21px]"
                              alt="PolygonTwo"
                            />
                          </div>
                          <Button
                            className="cursor-pointer font-semibold min-w-[87px] mt-[4px] text-[9.93px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder3"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute md:h-[117px] sm:h-[117px] h-[118px] right-[30%] top-[22%] w-[22%]">
                  <div className="absolute border-2 border-dashed border-white_A700 flex flex-col h-[max-content] inset-y-[0] items-center justify-end my-[auto] p-[5px] right-[0] rounded-radius50 w-[118px]">
                    <div className="flex flex-col items-center justify-start shadow-bs6 md:w-[100%] sm:w-[100%] w-[92%]">
                      <div className="h-[107px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                        <div className="bg-indigo_50 h-[107px] m-[auto] rounded-radius53 w-[100%]"></div>
                        <Img
                          src="images/img_designeb8605fe_93x64.png"
                          className="absolute bottom-[0] h-[93px] inset-x-[0] mx-[auto] object-cover rounded-radius53 w-[65%]"
                          alt="designeb8605fe"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    className="absolute bottom-[13%] cursor-pointer font-semibold left-[0] min-w-[92px] text-[11.45px] text-center text-gray_800 w-[auto]"
                    variant="FillGray50"
                  >
                    Lucy{" "}
                  </Button>
                </div>
              </div>
              <div className="absolute flex flex-col md:gap-[40px] sm:gap-[40px] gap-[97px] justify-start right-[24%] top-[8%] w-[41%]">
                <div className="flex flex-col gap-[54px] justify-start mr-[85px] md:w-[100%] sm:w-[100%] w-[71%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-row items-center justify-evenly w-[auto]">
                      <Text
                        className="font-semibold text-gray_200 text-left tracking-ls018325002670288087 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Product
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[2px] w-[auto]"
                        alt="VectorThree"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center w-[auto]">
                      <Text
                        className="font-semibold text-gray_200 text-left tracking-ls018325002670288087 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Solution
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[2px] ml-[3px] w-[auto]"
                        alt="VectorFour"
                      />
                    </div>
                    <Text
                      className="font-semibold text-gray_200 text-left tracking-ls018325002670288087 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Enterprise
                    </Text>
                    <Text
                      className="font-semibold text-gray_200 text-left tracking-ls018325002670288087 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Pricing
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle10.svg"
                    className="h-[17px] md:ml-[0] sm:ml-[0] ml-[83px] w-[17px]"
                    alt="RectangleTen"
                  />
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[124px] md:w-[100%] sm:w-[100%] w-[58%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[7px] rounded-radius7 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group10.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start mt-[12px] md:w-[100%] sm:w-[100%] w-[95%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="mt-[11px] text-bluegray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Mark Anderson
                          </Text>
                          <Text
                            className="bg-deep_orange_A100 h-[14px] mb-[5px] not-italic px-[4px] rounded-radius3 text-left text-white_A700 w-[42px]"
                            as="h4"
                            variant="h4"
                          >
                            Pending
                          </Text>
                        </div>
                        <Text
                          className="mt-[3px] text-indigo_900 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Update Contract Agreement
                        </Text>
                        <div className="flex flex-row items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[36%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#ffcc19"
                            size={10}
                          ></RatingBar>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[12px] md:w-[100%] sm:w-[100%] w-[83%]">
              <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                <Line className="bg-amber_400 h-[2px] w-[13%]" />
                <Text
                  className="font-bold leading-[16.80px] mt-[3px] text-gray_801 text-left tracking-ls022906251907348632 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body30"
                >
                  See why over 100,000 teams choose TeamFlow.com
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_image1.png"
                  className="h-[35px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                  alt="imageOne"
                />
                <Img
                  src="images/img_image2.png"
                  className="h-[41px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                  alt="imageTwo"
                />
                <Img
                  src="images/img_image3.png"
                  className="h-[36px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                  alt="imageThree"
                />
                <Img
                  src="images/img_image4.png"
                  className="h-[36px] md:h-[auto] sm:h-[auto] object-cover w-[auto]"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[67px] md:w-[100%] sm:w-[100%] w-[81%]">
              <div className="flex flex-col gap-[42px] items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[28%]">
                  <Text
                    className="text-gray_701 text-left tracking-ls036650005340576175 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body25"
                  >
                    <span className="text-gray_701 text-[18.33px] font-nunitosans font-semibold">
                      What you
                    </span>
                    <span className="text-gray_701 text-[18.33px] font-nunitosans font-bold">
                      {" "}
                    </span>
                    <span className="text-amber_400 text-[18.33px] font-nunitosans font-bold">
                      can do?
                    </span>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-[100%] w-[auto]">
                    <Button
                      className="flex h-[38px] items-center justify-center w-[38px]"
                      shape="icbRoundedBorder9"
                      size="mdIcn"
                      variant="icbFillOrangeA100"
                    >
                      <Img
                        src="images/img_graph1.svg"
                        className="h-[17px]"
                        alt="graphicon"
                      />
                    </Button>
                    <Text
                      className="font-bold mt-[21px] text-indigo_900 text-left tracking-ls018325002670288087 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Business Planning
                    </Text>
                    <Text
                      className="leading-[12.98px] mt-[10px] not-italic text-center text-gray_702 tracking-ls015270835876464844 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body3"
                    >
                      Our Business Plan is a written document describing a
                      company’s core business activities.
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_floatingicon.svg"
                      className="h-[38px] w-[38px]"
                      alt="floatingicon"
                    />
                    <Text
                      className="font-bold mt-[21px] text-indigo_900 text-left tracking-ls018325002670288087 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Financial Planning
                    </Text>
                    <Text
                      className="leading-[12.98px] mt-[10px] not-italic text-center text-gray_702 tracking-ls015270835876464844 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body3"
                    >
                      Our expert team sensible decision about their money, to
                      ensure they achieve the life goals. A financial plan.
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-[100%] w-[auto]">
                    <Button
                      className="flex h-[38px] items-center justify-center w-[38px]"
                      shape="icbRoundedBorder9"
                      size="mdIcn"
                      variant="icbFillDeeporangeA100"
                    >
                      <Img
                        src="images/img_search.svg"
                        className=""
                        alt="search"
                      />
                    </Button>
                    <Text
                      className="font-bold mt-[21px] text-indigo_900 text-left tracking-ls018325002670288087 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Market Analysis
                    </Text>
                    <Text
                      className="leading-[12.98px] mt-[10px] not-italic text-center text-gray_702 tracking-ls015270835876464844 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body3"
                    >
                      A market analysis is a quantitative and qualitative
                      assessment of a market. It looks into the size of the
                      market.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[39px] items-center justify-start mt-[61px] md:w-[100%] sm:w-[100%] w-[81%]">
              <Text
                className="text-gray_701 text-left tracking-ls036650005340576175 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body25"
              >
                <span className="text-gray_701 text-[18.33px] font-nunitosans font-semibold">
                  Our
                </span>
                <span className="text-gray_701 text-[18.33px] font-nunitosans font-bold">
                  {" "}
                </span>
                <span className="text-amber_400 text-[18.33px] font-nunitosans font-bold">
                  Features
                </span>
              </Text>
              <div className="flex sm:flex-col flex-row font-poppins sm:gap-[47px] items-start justify-between w-[100%]">
                <div className="flex sm:flex-1 flex-row gap-[8px] items-center justify-between sm:w-[100%] w-[auto]">
                  <div className="md:h-[253px] sm:h-[253px] h-[258px] relative w-[auto]">
                    <div className="absolute md:h-[253px] sm:h-[253px] h-[258px] inset-[0] justify-center m-[auto] w-[258px]">
                      <div className="absolute border border-bluegray_101 border-solid h-[111px] inset-[0] justify-center m-[auto] rounded-radius55 w-[111px]"></div>
                      <div className="absolute border border-bluegray_101 border-solid h-[192px] inset-[0] justify-center m-[auto] rounded-radius50 w-[192px]"></div>
                      <div className="absolute border border-bluegray_101 border-solid flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[5px] rounded-radius50 w-[258px]">
                        <div className="flex flex-col justify-start mb-[11px] mt-[17px] md:w-[100%] sm:w-[100%] w-[99%]">
                          <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <div className="flex flex-col gap-[29px] justify-start w-[76%]">
                              <div className="flex flex-row gap-[19px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[88%]">
                                <div className="bg-blue_A200 h-[3px] mb-[125px] mt-[8px] rounded-radius1 w-[3px]"></div>
                                <div className="md:h-[136px] sm:h-[136px] h-[137px] relative w-[138px]">
                                  <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[93%]">
                                    <div className="flex flex-col gap-[42px] justify-start w-[100%]">
                                      <Img
                                        src="images/img_volume_blue_50_30x30.svg"
                                        className="h-[30px] md:ml-[0] sm:ml-[0] ml-[21px] w-[30px]"
                                        alt="volume One"
                                      />
                                      <div className="flex flex-row items-start justify-between w-[100%]">
                                        <Img
                                          src="images/img_download_deep_orange_a100.svg"
                                          className="h-[30px] mt-[34px] w-[30px]"
                                          alt="download"
                                        />
                                        <Img
                                          src="images/img_ellipse_36x36.png"
                                          className="h-[36px] md:h-[auto] sm:h-[auto] mb-[12px] mt-[16px] rounded-radius50 w-[36px]"
                                          alt="Ellipse"
                                        />
                                        <Img
                                          src="images/img_ellipse_21x21.png"
                                          className="h-[21px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[21px]"
                                          alt="Ellipse One"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-amber_300 h-[5px] ml-[5px] my-[auto] rounded-radius2 w-[5px]"></div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat md:h-[38px] sm:h-[38px] h-[60px] left-[0] p-[5px] rounded-radius7 top-[9%] w-[87%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group16.svg')",
                                    }}
                                  >
                                    <div className="absolute h-[19px] md:h-[auto] sm:h-[auto] left-[6%] top-[8%] w-[19px]">
                                      <Img
                                        src="images/img_ellipse_19x19.png"
                                        className="absolute h-[19px] inset-[0] justify-center m-[auto] rounded-radius50 w-[19px]"
                                        alt="Ellipse Two"
                                      />
                                      <div className="absolute bg-green_500 border border-solid border-white_A700 bottom-[0] h-[5px] right-[0] rounded-radius2 w-[5px]"></div>
                                    </div>
                                    <div className="absolute bottom-[20%] flex flex-col items-start justify-start left-[6%] w-[44%]">
                                      <Text
                                        className="text-indigo_500 text-left tracking-ls012216668128967285 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body7"
                                      >
                                        Angelina{" "}
                                      </Text>
                                      <Text
                                        className="font-normal mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body8"
                                      >
                                        Member T2M Team
                                      </Text>
                                    </div>
                                    <div className="absolute flex flex-col gap-[12px] items-end justify-start right-[6%] top-[12%] w-[40px]">
                                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[78%]">
                                        <Text
                                          className="font-medium md:ml-[0] sm:ml-[0] ml-[3px] text-green_501 text-left w-[auto]"
                                          variant="body8"
                                        >
                                          Task Done
                                        </Text>
                                        <div className="flex flex-row items-center justify-evenly mt-[3px] w-[100%]">
                                          <RatingBar
                                            className=""
                                            value={5}
                                            starCount={5}
                                            activeColor="#ea9341"
                                            size={5}
                                          ></RatingBar>
                                        </div>
                                      </div>
                                      <Text
                                        className="bg-amber_400 font-medium h-[13px] px-[7px] py-[3px] rounded-radius3 text-gray_802 text-left w-[40px]"
                                        variant="body8"
                                      >
                                        Message
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                                <div className="bg-blue_300 h-[7px] mb-[3px] mt-[14px] rounded-radius3 w-[7px]"></div>
                                <Img
                                  src="images/img_ellipse_24x24.png"
                                  className="h-[24px] md:h-[auto] sm:h-[auto] ml-[48px] object-cover rounded-radius50 w-[24px]"
                                  alt="Ellipse Three"
                                />
                                <div className="bg-green_400 h-[4px] mb-[12px] ml-[54px] mt-[8px] rounded-radius50 w-[4px]"></div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[45px] items-start justify-start w-[23%]">
                              <div className="flex flex-row gap-[22px] items-start justify-between w-[100%]">
                                <div className="bg-deep_orange_400 h-[3px] mb-[29px] rounded-radius1 w-[3px]"></div>
                                <Img
                                  src="images/img_music_cyan_300.svg"
                                  className="h-[30px] w-[30px]"
                                  alt="music"
                                />
                              </div>
                              <Img
                                src="images/img_user.svg"
                                className="h-[77px] w-[auto]"
                                alt="user"
                              />
                            </div>
                          </div>
                          <Button
                            className="flex items-center justify-center md:ml-[0] ml-[135px] mr-[30px] mt-[3px] sm:ml-[0] text-center"
                            leftIcon={
                              <Img
                                src="images/img_ticket.svg"
                                className="mr-[4px] text-center"
                                alt="ticket"
                              />
                            }
                            shape="RoundedBorder3"
                            size="xl"
                            variant="OutlineIndigo50028_1"
                          >
                            <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[5.34px] text-indigo_A700 text-left">
                              Boost your work
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_ellipse_30x30.png"
                      className="absolute h-[30px] left-[0] rounded-radius50 top-[26%] w-[30px]"
                      alt="Ellipse Four"
                    />
                  </div>
                  <div className="bg-pink_300 h-[6px] mb-[121px] mt-[130px] rounded-radius50 w-[6px]"></div>
                </div>
                <div className="flex sm:flex-1 flex-col font-nunitosans items-start justify-start sm:mt-[0] mt-[79px] sm:w-[100%] w-[auto]">
                  <Text
                    className="leading-[147.40%] text-gray_803 text-left tracking-ls03054167175292969 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[89%]"
                    variant="body27"
                  >
                    Manage everything in one workspace
                  </Text>
                  <Line className="bg-orange_A100 h-[1px] mt-[7px] w-[10%]" />
                  <Text
                    className="font-normal leading-[14.51px] mt-[6px] not-italic text-gray_703 text-left tracking-ls004581250667572022 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    Planning, tracking and delivering your team’s best work has
                    never been easier. An integrated workspace that’s simple to
                    use, TeamFlow lets you spend less time managing your work
                    and more time actually doing it.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex h-[672px] md:h-[724px] sm:h-[724px] justify-end mt-[52px] relative w-[100%]">
              <div className="flex flex-col h-[100%] items-center justify-start mb-[79px] ml-[66px] mt-[auto] w-[67%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="leading-[147.40%] md:ml-[0] sm:ml-[0] ml-[146px] text-center text-gray_701 tracking-ls036650005340576175 md:tracking-ls1 sm:tracking-ls1"
                    variant="body25"
                  >
                    <span className="text-amber_400 text-[18.33px] font-nunitosans font-bold">
                      Integrate
                    </span>
                    <span className="text-gray_701 text-[18.33px] font-nunitosans font-bold">
                      {" "}
                    </span>
                    <span className="text-gray_701 text-[18.33px] font-nunitosans font-semibold">
                      with your existing tools
                      <br />
                      in a few clicks
                    </span>
                  </Text>
                  <div className="bg-blue_A700 h-[6px] md:ml-[0] sm:ml-[0] ml-[138px] mr-[339px] mt-[20px] rounded-radius50 w-[6px]"></div>
                  <div className="flex flex-row items-center justify-between mt-[11px] w-[100%]">
                    <Img
                      src="images/img_image21_68x68.png"
                      className="h-[68px] md:h-[auto] sm:h-[auto] object-cover rounded-radius7 w-[68px]"
                      alt="imageTwentyOne"
                    />
                    <Img
                      src="images/img_image19_68x68.png"
                      className="h-[68px] md:h-[auto] sm:h-[auto] object-cover rounded-radius7 w-[68px]"
                      alt="imageNineteen"
                    />
                    <Img
                      src="images/img_image16_68x68.png"
                      className="h-[68px] md:h-[auto] sm:h-[auto] object-cover rounded-radius7 w-[68px]"
                      alt="imageSixteen"
                    />
                    <Img
                      src="images/img_image15_68x68.png"
                      className="h-[68px] md:h-[auto] sm:h-[auto] object-cover rounded-radius7 w-[68px]"
                      alt="imageFifteen"
                    />
                    <Img
                      src="images/img_image17_68x68.png"
                      className="h-[68px] md:h-[auto] sm:h-[auto] object-cover rounded-radius7 w-[68px]"
                      alt="imageSeventeen"
                    />
                  </div>
                  <div className="flex flex-row gap-[64px] items-center justify-end ml-[auto] mt-[38px] md:w-[100%] sm:w-[100%] w-[33%]">
                    <div className="bg-amber_400 flex flex-col items-center justify-end p-[6px] rounded-radius3 w-[57%]">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        View All
                      </Text>
                    </div>
                    <div className="bg-blue_A700 h-[7px] mb-[5px] mt-[13px] rounded-radius3 w-[7px]"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-[0] justify-center m-[auto] overflow-x-auto w-[100%]">
                <div className="md:h-[658px] sm:h-[658px] h-[672px] relative w-[100%]">
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-start justify-start mx-[auto] p-[65px] sm:px-[20px] md:px-[40px] top-[0] w-[99%]"
                    style={{ backgroundImage: "url('images/img_group15.svg')" }}
                  >
                    <div className="flex flex-col items-start justify-start mb-[21px] mt-[5px] md:w-[100%] sm:w-[100%] w-[44%]">
                      <Text
                        className="text-gray_803 text-left tracking-ls03054167175292969 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body27"
                      >
                        Set up in minutes
                      </Text>
                      <Line className="bg-orange_A100 h-[1px] mt-[7px] w-[11%]" />
                      <Text
                        className="font-normal leading-[14.51px] mt-[6px] not-italic text-gray_703 text-left tracking-ls004581250667572022 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                        as="h3"
                        variant="h3"
                      >
                        Get started fast with hundreds of visual and
                        customizable templates - or create your own. Use our
                        free online template maker to create beautiful template
                        in minutes. Choose from hundreds of pre-made templates
                        and tell stories with data with our easy drag-and-drop
                        infographic creator.
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[92%]">
                    <div className="h-[658px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                      <Img
                        src="images/img_group33.svg"
                        className="h-[163px] ml-[89px] mt-[63px] w-[164px]"
                        alt="GroupThirtyThree"
                      />
                      <div className="absolute h-[658px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] w-[100%]">
                        <Img
                          src="images/img_image14.png"
                          className="h-[658px] m-[auto] object-cover w-[100%]"
                          alt="imageFourteen"
                        />
                        <div className="absolute flex flex-row items-start justify-between left-[6%] top-[1%] w-[34%]">
                          <Img
                            src="images/img_user_white_a700.svg"
                            className="h-[95px] w-[auto]"
                            alt="user One"
                          />
                          <Img
                            src="images/img_videocamera.svg"
                            className="h-[40px] mt-[10px] w-[39px]"
                            alt="videocamera"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[66px] items-center justify-start md:w-[100%] sm:w-[100%] w-[81%]">
              <div className="h-[259px] md:h-[263px] sm:h-[263px] relative sm:w-[100%] w-[45%]">
                <div className="absolute border border-dashed border-gray_300 flex flex-col h-[max-content] inset-[0] justify-center m-[auto] p-[14px] rounded-radius129 w-[259px]">
                  <div className="h-[222px] md:h-[226px] sm:h-[226px] mt-[4px] mx-[auto] relative w-[222px]">
                    <div className="h-[222px] md:h-[auto] sm:h-[auto] m-[auto] w-[222px]">
                      <Img
                        src="images/img_andrea_222x222.png"
                        className="h-[222px] m-[auto] rounded-radius50 w-[222px]"
                        alt="andrea"
                      />
                      <div className="absolute border-2 border-blue_51 border-solid h-[190px] inset-[0] justify-center m-[auto] rounded-radius50 w-[190px]"></div>
                    </div>
                    <div className="absolute bg-blue_300 h-[15px] left-[3%] rounded-radius7 top-[9%] w-[15px]"></div>
                  </div>
                  <div className="bg-deep_orange_400 h-[9px] md:ml-[0] sm:ml-[0] ml-[42px] mr-[179px] rounded-radius4 w-[9px]"></div>
                </div>
                <div className="absolute bg-pink_300 bottom-[44%] h-[9px] right-[0] rounded-radius4 w-[9px]"></div>
              </div>
              <div className="flex flex-col items-start justify-start sm:w-[100%] w-[44%]">
                <Text
                  className="text-gray_803 text-left tracking-ls03054167175292969 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body27"
                >
                  Save time with Automations
                </Text>
                <Line className="bg-amber_400 h-[1px] mt-[7px] w-[11%]" />
                <Text
                  className="font-normal leading-[14.51px] mt-[6px] not-italic text-gray_703 text-left tracking-ls004581250667572022 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Automate the repetitive work in seconds so you can avoid human
                  error and focus on what matters. It gives the impression of
                  software that its highly automated which implies that it is
                  good for client for who want to save time and manage team
                  members easily.
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-end mt-[57px] p-[33px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[98%]"
              style={{ backgroundImage: "url('images/img_group15.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[4px] md:w-[100%] sm:w-[100%] w-[91%]">
                <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="text-gray_803 text-left tracking-ls03054167175292969 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body27"
                  >
                    Visualize work with Views
                  </Text>
                  <Line className="bg-indigo_A200 h-[1px] mt-[7px] w-[11%]" />
                  <Text
                    className="font-normal leading-[14.51px] mt-[6px] not-italic text-gray_703 text-left tracking-ls004581250667572022 md:tracking-ls1 sm:tracking-ls1"
                    as="h3"
                    variant="h3"
                  >
                    View data as a map, calendar, timeline, kanban, and more
                    <br />
                    The easy-to-use, visual interface lets any team member jump
                    in and get started, no training required.
                  </Text>
                </div>
                <div className="md:h-[167px] sm:h-[167px] h-[248px] relative w-[auto]">
                  <div className="absolute border border-dashed border-gray_301 bottom-[0] md:h-[167px] sm:h-[167px] h-[221px] p-[5px] right-[2%] rounded-radius110 w-[221px]">
                    <div className="absolute border border-dashed border-gray_301 h-[167px] inset-[0] justify-center m-[auto] rounded-radius83 w-[167px]"></div>
                    <div className="absolute bg-green_A400 h-[11px] right-[10%] rounded-radius5 top-[35%] w-[11px]"></div>
                    <div className="absolute bg-deep_orange_A100 bottom-[0] flex flex-col h-[76px] items-center justify-start p-[11px] right-[6%] rounded-radius50 w-[76px]">
                      <div className="flex flex-col justify-start my-[3px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex flex-row gap-[7px] items-center justify-start md:w-[100%] sm:w-[100%] w-[76%]">
                          <div className="bg-deep_orange_300 h-[6px] my-[9px] rounded-radius50 w-[6px]"></div>
                          <Img
                            src="images/img_clock.svg"
                            className="h-[26px] w-[26px]"
                            alt="clock"
                          />
                        </div>
                        <Switch
                          onColor=""
                          offColor=""
                          onHandleColor=""
                          offHandleColor=""
                          value={true}
                          className="md:ml-[0] sm:ml-[0] ml-[7px] w-[85%]"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-blue_A200 bottom-[11%] h-[19px] left-[10%] rounded-radius9 w-[19px]"></div>
                  </div>
                  <div className="absolute bg-cyan_300 flex flex-col h-[83px] items-start justify-start p-[13px] right-[0] rounded-radius41 top-[0] w-[83px]">
                    <div className="flex flex-row items-start justify-start my-[2px] md:w-[100%] sm:w-[100%] w-[51px]">
                      <div className="bg-white_A700_49 h-[11px] mb-[11px] mt-[29px] rounded-radius5 w-[11px]"></div>
                      <div className="flex flex-col gap-[6px] items-start justify-start w-[75%]">
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px] w-[30px]"
                            alt="location"
                          />
                          <div className="bg-white_A700_49 h-[7px] mb-[12px] mt-[9px] rounded-radius3 w-[7px]"></div>
                        </div>
                        <Text
                          className="md:ml-[0] sm:ml-[0] ml-[4px] text-left text-white_A700 tracking-ls021379169464111328 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body31"
                        >
                          Map
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-deep_orange_401 h-[9px] left-[33%] rounded-radius4 top-[5%] w-[9px]"></div>
                  <div className="absolute bg-orange_A100 flex flex-col h-[68px] items-start justify-start left-[0] p-[9px] rounded-radius50 top-[23%] w-[68px]">
                    <div className="flex flex-col items-end justify-start my-[4px] md:w-[100%] sm:w-[100%] w-[84%]">
                      <div className="md:h-[19px] sm:h-[19px] h-[20px] relative w-[62%]">
                        <div className="absolute bg-white_A700_3f h-[16px] right-[0] rounded-radius50 top-[0] w-[16px]"></div>
                        <Img
                          src="images/img_calendar1_white_a700.svg"
                          className="absolute bottom-[0] h-[19px] left-[0] w-[19px]"
                          alt="calendarOne"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-[3px] w-[100%]">
                        <div className="bg-white_A700_3f h-[5px] mb-[9px] rounded-radius2 w-[5px]"></div>
                        <Text
                          className="font-bold mt-[2px] text-left text-white_A700 tracking-ls016797916412353517 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Calendar
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[45px] items-start justify-start mt-[99px] md:w-[100%] sm:w-[100%] w-[77%]">
              <div className="h-[268px] md:h-[auto] sm:h-[auto] relative sm:w-[100%] w-[45%]">
                <div className="absolute h-[268px] md:h-[auto] sm:h-[auto] inset-y-[0] left-[0] my-[auto] w-[89%]">
                  <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                    <div className="flex flex-col gap-[40px] justify-start w-[100%]">
                      <div className="flex flex-row gap-[59px] items-start justify-start mr-[24px] md:w-[100%] sm:w-[100%] w-[89%]">
                        <div className="bg-cyan_300 h-[163px] mb-[41px] w-[49%]"></div>
                        <div className="bg-orange_A100 h-[72px] mt-[132px] w-[21%]"></div>
                      </div>
                      <Img
                        src="images/img_trash.svg"
                        className="h-[24px] md:ml-[0] sm:ml-[0] ml-[170px] w-[auto]"
                        alt="trash"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_image24.png"
                    className="absolute h-[224px] left-[2%] object-cover top-[2%] w-[84%]"
                    alt="imageTwentyFour"
                  />
                </div>
                <div className="absolute bg-white_A700 bottom-[3%] flex flex-col items-center justify-start p-[8px] right-[0] rounded-radius7 shadow-bs7 w-[68%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                    <Text
                      className="font-normal leading-[160.69%] not-italic text-bluegray_800 text-left tracking-ls015413145065307618 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[94%]"
                      variant="body2"
                    >
                      “We ensure that any information you need is served
                      immediately by simply contacting our team”
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-semibold text-bluegray_901 text-left tracking-ls015413145065307618 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Peter Fennimore
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left tracking-ls015413145065307618 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Head of CS{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start sm:mt-[0] mt-[33px] sm:w-[100%] w-[48%]">
                <Text
                  className="text-gray_803 text-left tracking-ls03054167175292969 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body27"
                >
                  24/7 Customer Support
                </Text>
                <Line className="bg-amber_400 h-[1px] mt-[7px] w-[10%]" />
                <Text
                  className="font-normal leading-[14.51px] mt-[6px] not-italic text-gray_703 text-left tracking-ls004581250667572022 md:tracking-ls1 sm:tracking-ls1"
                  as="h3"
                  variant="h3"
                >
                  Our team is here to give you personalized support within the
                  hour available 24/7. In accordance with our commitment to
                  providing superior and professional service. Join daily live
                  webinars, watch our tutorials, or browse through our knowledge{" "}
                  <br />
                  base
                </Text>
                <Button
                  className="cursor-pointer font-semibold min-w-[87px] mt-[12px] text-[9.93px] text-bluegray_900 text-center w-[auto]"
                  shape="RoundedBorder3"
                  size="lg"
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="bg-gray_53 flex flex-col items-center justify-start mt-[72px] p-[37px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[98%]">
              <Text
                className="font-bold text-center text-yellow_900 tracking-ls018325002670288087 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Support
              </Text>
              <Text
                className="mt-[6px] text-bluegray_801 text-center tracking-ls03054167175292969 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body27"
              >
                Subscribe Newsletter & get
              </Text>
              <Text
                className="text-bluegray_801 text-center tracking-ls02748750305175781 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body29"
              >
                Company News
              </Text>
              <div className="bg-white_A700 flex flex-row items-center justify-end mt-[20px] p-[2px] rounded-radius7 shadow-bs8 md:w-[100%] sm:w-[100%] w-[38%]">
                <Img
                  src="images/img_mail.svg"
                  className="h-[9px] w-[9px]"
                  alt="mail"
                />
                <Text
                  className="ml-[9px] not-italic text-bluegray_302 text-center tracking-ls015270835876464844 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body3"
                >
                  Your email
                </Text>
                <Button
                  className="flex items-center justify-center ml-[105px] text-center"
                  leftIcon={
                    <Img
                      src="images/img_offer.svg"
                      className="mr-[4px] text-center"
                      alt="offer"
                    />
                  }
                  shape="RoundedBorder7"
                  size="md"
                  variant="FillIndigoA200"
                >
                  <div className="bg-transparent cursor-pointer font-semibold text-[7.64px] text-left text-white_A700">
                    Subscribe
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[53px] md:w-[100%] sm:w-[100%] w-[85%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <Text
                  className="text-center text-indigo_900 tracking-ls036650005340576175 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body25"
                >
                  <span className="text-bluegray_902 text-[18.33px] font-nunitosans font-semibold">
                    Client
                  </span>
                  <span className="text-indigo_900 text-[18.33px] font-nunitosans font-bold">
                    {" "}
                  </span>
                  <span className="text-amber_400 text-[18.33px] font-nunitosans font-bold">
                    Testimonials
                  </span>
                </Text>
                <div
                  className="bg-cover bg-no-repeat h-[265px] md:h-[268px] sm:h-[268px] mt-[51px] p-[11px] relative w-[100%]"
                  style={{ backgroundImage: "url('images/img_group41.svg')" }}
                >
                  <div className="absolute flex flex-col items-center justify-start right-[13%] top-[27%] w-[67%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Img
                        src="images/img_ellipse_38x38.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] mt-[67px] rounded-radius50 w-[38px]"
                        alt="Ellipse Five"
                      />
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-start justify-start mb-[21px] p-[6px] w-[auto]"
                        style={{
                          backgroundImage: "url('images/img_group21.svg')",
                        }}
                      >
                        <div className="flex flex-col justify-start mb-[10px] md:w-[100%] sm:w-[100%] w-[94%]">
                          <div className="flex flex-row gap-[40px] items-start justify-start md:w-[100%] sm:w-[100%] w-[71%]">
                            <Img
                              src="images/img_quote1.svg"
                              className="h-[16px] mb-[12px] w-[16px]"
                              alt="quoteOne"
                            />
                            <Text
                              className="font-bold mt-[15px] text-bluegray_801 text-left w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              Rocky Dixon
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[160.69%] md:ml-[0] sm:ml-[0] ml-[9px] mt-[4px] not-italic text-bluegray_802 text-center sm:w-[100%] w-[94%]"
                            as="h6"
                            variant="h6"
                          >
                            “The features on monday.com make our team work
                            faster and easier to organize”
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_ellipse_5.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] mt-[67px] rounded-radius50 w-[38px]"
                        alt="Ellipse Six"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[4%] flex flex-row items-start justify-center right-[22%] w-[51%]">
                    <Img
                      src="images/img_ellipse_6.png"
                      className="h-[24px] md:h-[auto] sm:h-[auto] object-cover rounded-radius50 w-[24px]"
                      alt="Ellipse Seven"
                    />
                    <div className="flex flex-col gap-[137px] md:gap-[40px] sm:gap-[40px] justify-start ml-[24px] mt-[9px] w-[74%]">
                      <Img
                        src="images/img_ellipse_7.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[86px] rounded-radius50 w-[38px]"
                        alt="Ellipse Eight"
                      />
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Img
                          src="images/img_ellipse_32x32.png"
                          className="h-[32px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[32px]"
                          alt="Ellipse Nine"
                        />
                        <Img
                          src="images/img_ellipse_8.png"
                          className="h-[32px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[32px]"
                          alt="Ellipse Ten"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_ellipse_9.png"
                      className="h-[24px] md:h-[auto] sm:h-[auto] ml-[9px] object-cover rounded-radius50 w-[24px]"
                      alt="Ellipse Eleven"
                    />
                  </div>
                </div>
                <PagerIndicator
                  className="flex h-[5px] mt-[15px] w-[31px]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 h-[5px] bg-amber_400 w-[5px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 h-[5px] bg-gray_302 w-[5px]"
                  selectedWrapperCss="inline-block md:ml-[0] mx-[3.82px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[3.82px] sm:ml-[0]"
                />
              </div>
            </div>
            <div className="font-poppins sm:h-[1157px] h-[243px] md:h-[662px] mt-[51px] relative w-[100%]">
              <Line className="absolute bg-gray_200 bottom-[22%] h-[1px] inset-x-[0] mx-[auto] rotate-[-180deg] w-[100%]" />
              <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[88%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex flex-row items-start justify-evenly md:w-[100%] sm:w-[100%] w-[13%]">
                        <div className="bg-indigo_A201 flex flex-col h-[13px] items-center justify-start p-[2px] rounded-radius6 w-[13px]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[9px] w-[8px]"
                            alt="volume Two"
                          />
                        </div>
                        <Text
                          className="font-semibold text-indigo_A201 text-left w-[auto]"
                          variant="body30"
                        >
                          <span className="text-indigo_A201 text-[11.45px] font-poppins">
                            Team
                          </span>
                          <span className="text-deep_orange_402 text-[11.45px] font-poppins">
                            Flow
                          </span>
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[126px] md:mt-[0] sm:mt-[0] mt-[4px] text-indigo_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Product
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[70px] md:mt-[0] sm:mt-[0] mt-[4px] text-indigo_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Team
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[85px] md:mt-[0] sm:mt-[0] mt-[4px] text-indigo_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Solutions
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[105px] md:mt-[0] sm:mt-[0] mt-[4px] text-indigo_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Resources
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[15px] md:w-[100%] sm:w-[100%] w-[98%]">
                      <Text
                        className="not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        All Rights Reserved © teamflow.com
                      </Text>
                      <Text
                        className="not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Product
                      </Text>
                      <Text
                        className="not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        About Us
                      </Text>
                      <Text
                        className="not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Project Management
                      </Text>
                      <Text
                        className="not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Knowledge Base
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end ml-[auto] mt-[10px] md:w-[100%] sm:w-[100%] w-[60%]">
                      <Text
                        className="not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Pricing
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[77px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Contact Us
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[67px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Marketing
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[106px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Guides
                      </Text>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[8px] md:w-[100%] sm:w-[100%] w-[97%]">
                      <Text
                        className="font-medium text-indigo_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Address
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[169px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Enterprise
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[65px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Careers
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[79px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        CRM and Sales
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[87px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Daily Webinars
                      </Text>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <Text
                        className="mb-[5px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        26 W 12th St. New York, NY 10342, NYC
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[65px] md:mt-[0] sm:mt-[0] mt-[5px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Partners
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[71px] md:mt-[0] sm:mt-[0] mt-[5px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Find a Partner
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[57px] md:mt-[0] sm:mt-[0] mt-[5px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Software Development
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[57px] md:mt-[0] sm:mt-[0] mt-[5px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Community
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end ml-[auto] mt-[10px] md:w-[100%] sm:w-[100%] w-[66%]">
                      <Text
                        className="not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Affiliate
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[74px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        In the News
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[66px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Constructions
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[90px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Customer Stories
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between mt-[2px] w-[100%]">
                      <div className="flex sm:flex-1 flex-col gap-[6px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Social Media
                        </Text>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Img
                            src="images/img_facebook.svg"
                            className="h-[16px] w-[16px]"
                            alt="facebook"
                          />
                          <Img
                            src="images/img_camera.svg"
                            className="h-[16px] w-[16px]"
                            alt="camera"
                          />
                          <div className="bg-bluegray_803 flex flex-col h-[16px] items-center justify-start p-[3px] rounded-radius50 w-[16px]">
                            <Img
                              src="images/img_twitter.svg"
                              className="h-[7px] w-[8px]"
                              alt="twitter"
                            />
                          </div>
                          <div className="bg-bluegray_803 flex flex-col h-[16px] items-center justify-start p-[3px] rounded-radius50 w-[16px]">
                            <Img
                              src="images/img_play.svg"
                              className="h-[6px] w-[auto]"
                              alt="play"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-[0] mt-[8px] sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                          <Text
                            className="not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Integrations
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[167px] not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Creative Production
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[68px] not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Templates
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end mt-[10px] w-[100%]">
                          <Text
                            className="not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Developers
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[170px] not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Remote Work
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[93px] not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Profesionals Services
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[95%]">
                          <Text
                            className="not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Students
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[179px] not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            HR
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[134px] not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Video Tutorials
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[86%]">
                          <Text
                            className="not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Work OS
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[181px] not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            IT
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[138px] not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Blog
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[73px] items-center justify-end ml-[auto] mt-[10px] md:w-[100%] sm:w-[100%] w-[41%]">
                          <Text
                            className="not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            See More Solutions
                          </Text>
                          <Text
                            className="not-italic text-bluegray_600 text-left w-[auto]"
                            variant="body3"
                          >
                            Podcast
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DribbbleShootPage;
