import React from "react";

import {
  Img,
  Text,
  Button,
  RatingBar,
  Input,
  Line,
  SelectBox,
  Slider,
  PagerIndicator,
} from "components";

const FramePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-[auto] pb-[103px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="h-[1094px] md:h-[1681px] sm:h-[1681px] max-w-[1904px] mx-[auto] md:px-[20px] sm:px-[20px] relative w-[100%]">
            <div className="h-[1094px] md:h-[1681px] sm:h-[1681px] m-[auto] w-[100%]">
              <div className="h-[1094px] md:h-[1681px] sm:h-[1681px] m-[auto] w-[100%]">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-start justify-start mx-[auto] top-[1%] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group15.svg')" }}
                >
                  <div className="flex md:flex-col sm:flex-col flex-row gap-[47px] items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                    <Img
                      src="images/img_rectangle36.svg"
                      className="h-[977px] w-[auto]"
                      alt="RectangleThirtySix"
                    />
                    <div className="flex flex-col justify-start md:mt-[0] sm:mt-[0] mt-[60px] md:w-[100%] sm:w-[100%] w-[23%]">
                      <div className="flex flex-row gap-[45px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[73%]">
                        <div className="flex flex-col items-center justify-start w-[24%]">
                          <Text
                            className="font-semibold text-gray_600 text-left w-[auto]"
                            variant="body18"
                          >
                            Login
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-semibold min-w-[171px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_900 w-[auto]"
                          size="2xl"
                        >
                          Sign Up
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start mr-[8px] mt-[181px] md:w-[100%] sm:w-[100%] w-[98%]">
                        <div
                          className="bg-cover bg-no-repeat md:h-[120px] sm:h-[120px] h-[168px] relative rounded-radius18 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group12.svg')",
                          }}
                        >
                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[7%] w-[88%]">
                            <div className="flex flex-col items-start justify-start w-[100%]">
                              <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                                <Text
                                  className="mt-[24px] text-bluegray_500 text-left w-[auto]"
                                  variant="body24"
                                >
                                  Lucy Niana
                                </Text>
                                <Button
                                  className="cursor-pointer font-normal mb-[15px] min-w-[82px] not-italic text-[19.93px] text-center text-white_A700 w-[auto]"
                                  shape="RoundedBorder7"
                                  variant="FillCyan300"
                                >
                                  Done
                                </Button>
                              </div>
                              <Text
                                className="mt-[4px] text-indigo_900 text-left w-[auto]"
                                variant="body21"
                              >
                                Develop Communication Plan
                              </Text>
                              <div className="flex flex-row items-start justify-between mt-[9px] w-[100%]">
                                <div className="flex flex-row items-center justify-evenly w-[auto]">
                                  <RatingBar
                                    className=""
                                    value={4}
                                    starCount={5}
                                    color="#cccccc"
                                    activeColor="#ffcc19"
                                    size={22}
                                  ></RatingBar>
                                </div>
                                <div className="border-2 border-amber_300_90 border-solid h-[28px] mt-[6px] rounded-radius50 w-[28px]"></div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_vector2.svg"
                            className="absolute bottom-[0] h-[45px] right-[6%] w-[45px]"
                            alt="VectorTwo"
                          />
                        </div>
                      </div>
                      <div className="h-[223px] md:h-[296px] sm:h-[296px] md:ml-[0] sm:ml-[0] ml-[134px] mt-[76px] relative md:w-[100%] sm:w-[100%] w-[66%]">
                        <div className="absolute border-bw3 border-dashed border-white_A700 flex flex-col h-[max-content] inset-y-[0] items-center justify-end left-[0] my-[auto] p-[15px] rounded-radius111 w-[223px]">
                          <div className="bg-indigo_A400 flex flex-col h-[191px] items-end justify-end pt-[17px] px-[17px] rounded-radius95 w-[191px]">
                            <div className="flex flex-col items-center justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[93%]">
                              <Img
                                src="images/img_design57b902be.png"
                                className="h-[170px] md:h-[auto] sm:h-[auto] object-cover rounded-radius95 w-[100%]"
                                alt="design57b902be"
                              />
                            </div>
                          </div>
                        </div>
                        <Button
                          className="absolute cursor-pointer font-semibold min-w-[91px] right-[0] text-[11.83px] text-center text-teal_400 top-[32%] w-[auto]"
                          shape="CircleBorder13"
                          variant="FillGray50"
                        >
                          Mark
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col font-poppins h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[101px] sm:px-[20px] md:px-[40px] w-[59%]"
                  style={{ backgroundImage: "url('images/img_group14.png')" }}
                >
                  <div className="flex flex-col gap-[108px] md:gap-[40px] sm:gap-[40px] items-start justify-start mb-[190px] md:ml-[0] sm:ml-[0] ml-[89px] md:w-[100%] sm:w-[100%] w-[74%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                        <Button
                          className="flex h-[35px] items-center justify-center w-[35px]"
                          shape="icbRoundedBorder17"
                          size="smIcn"
                          variant="icbFillAmber400"
                        >
                          <Img
                            src="images/img_volume.svg"
                            className=""
                            alt="volume"
                          />
                        </Button>
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body13"
                        >
                          TeamFlow
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-nunitosans gap-[14px] justify-start w-[100%]">
                      <div className="bg-purple_300 h-[22px] md:ml-[0] sm:ml-[0] ml-[360px] mr-[295px] rounded-radius50 w-[22px]"></div>
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Input
                          className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_700 text-gray_700 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          wrapClassName="md:w-[100%] sm:w-[100%] w-[43%]"
                          name="GroupFive"
                          placeholder="👋 Welcome to TeamFlow"
                        ></Input>
                        <div className="md:h-[183px] sm:h-[183px] h-[198px] mt-[18px] relative w-[100%]">
                          <Text
                            className="absolute inset-x-[0] leading-[126.90%] mx-[auto] text-left text-white_A700 top-[0] md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[100%]"
                            variant="body6"
                          >
                            Work the way that works for you
                          </Text>
                          <Img
                            src="images/img_cursor.svg"
                            className="absolute bottom-[0] h-[55px] right-[13%] w-[56px]"
                            alt="cursor"
                          />
                        </div>
                        <Line className="bg-cyan_300 h-[6px] mt-[7px] w-[10%]" />
                        <div className="h-[124px] md:h-[130px] sm:h-[130px] mt-[34px] relative md:w-[100%] sm:w-[100%] w-[93%]">
                          <Text
                            className="absolute font-normal inset-x-[0] leading-[160.40%] mx-[auto] not-italic text-left text-white_A700 top-[0] tracking-ls06 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            variant="body13"
                          >
                            Create, Build, Collaborate and ship products very
                            faster{" "}
                          </Text>
                          <Img
                            src="images/img_polygon2.svg"
                            className="absolute bottom-[0] h-[55px] right-[13%] w-[55px]"
                            alt="PolygonTwo"
                          />
                        </div>
                        <Button
                          className="cursor-pointer font-semibold min-w-[230px] mt-[11px] sm:text-[22px] md:text-[24px] text-[26px] text-bluegray_900 text-center w-[auto]"
                          size="3xl"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute md:h-[308px] sm:h-[308px] h-[310px] right-[30%] top-[22%] sm:w-[100%] w-[22%]">
                <div className="absolute border-bw6 border-dashed border-white_A700 flex flex-col h-[max-content] inset-y-[0] items-center justify-end my-[auto] p-[14px] right-[0] rounded-radius50 w-[310px]">
                  <div className="flex flex-col items-center justify-start shadow-bs3 md:w-[100%] sm:w-[100%] w-[93%]">
                    <div className="h-[280px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                      <div className="bg-indigo_50 h-[280px] m-[auto] rounded-radius140 w-[100%]"></div>
                      <Img
                        src="images/img_designeb8605fe.png"
                        className="absolute bottom-[0] h-[243px] inset-x-[0] mx-[auto] object-cover rounded-radius140 w-[65%]"
                        alt="designeb8605fe"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute bottom-[13%] cursor-pointer font-semibold left-[0] min-w-[241px] sm:text-[26px] md:text-[28px] text-[30px] text-center text-gray_800 w-[auto]"
                  shape="RoundedBorder33"
                  size="2xl"
                  variant="FillGray50"
                >
                  Lucy{" "}
                </Button>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[254px] md:gap-[40px] sm:gap-[40px] justify-start right-[24%] top-[9%] w-[41%]">
              <div className="flex flex-col gap-[141px] md:gap-[40px] sm:gap-[40px] justify-start mr-[224px] md:w-[100%] sm:w-[100%] w-[72%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <SelectBox
                    className="sm:flex-1 font-semibold sm:text-[20px] md:text-[22px] text-[24px] text-gray_200 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[auto]"
                    placeholderClassName="text-gray_200"
                    name="GroupFortyNine"
                    placeholder="Product"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[7px] mr-[0] w-[15px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <SelectBox
                    className="sm:flex-1 font-semibold sm:text-[20px] md:text-[22px] text-[24px] text-gray_200 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[auto]"
                    placeholderClassName="text-gray_200"
                    name="GroupFifty"
                    placeholder="Solution"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[7px] mr-[0] w-[15px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Text
                    className="font-semibold text-gray_200 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body18"
                  >
                    Enterprise
                  </Text>
                  <Text
                    className="font-semibold text-gray_200 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body18"
                  >
                    Pricing
                  </Text>
                </div>
                <Img
                  src="images/img_rectangle10.svg"
                  className="h-[47px] md:ml-[0] sm:ml-[0] ml-[218px] w-[47px]"
                  alt="RectangleTen"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[325px] md:w-[100%] sm:w-[100%] w-[58%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[18px] rounded-radius19 w-[100%]"
                    style={{ backgroundImage: "url('images/img_group10.svg')" }}
                  >
                    <div className="flex flex-col items-start justify-start mt-[31px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="mt-[29px] text-bluegray_500 text-left w-[auto]"
                          variant="body19"
                        >
                          Mark Anderson
                        </Text>
                        <Button
                          className="cursor-pointer font-normal mb-[14px] min-w-[112px] not-italic sm:text-[19.84px] md:text-[21.84px] text-[23.84px] text-center text-white_A700 w-[auto]"
                          variant="FillDeeporangeA100"
                        >
                          Pending
                        </Button>
                      </div>
                      <Text
                        className="mt-[9px] text-indigo_900 text-left w-[auto]"
                        variant="body16"
                      >
                        Update Contract Agreement
                      </Text>
                      <div className="flex flex-row items-center justify-start mt-[11px] md:w-[100%] sm:w-[100%] w-[36%]">
                        <RatingBar
                          className=""
                          value={5}
                          starCount={5}
                          activeColor="#ffcc19"
                          size={26}
                        ></RatingBar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1594px] mt-[33px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <Line className="bg-amber_400 h-[6px] w-[14%]" />
              <Text
                className="font-bold leading-[44.00px] text-gray_801 text-left tracking-ls06 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                variant="body13"
              >
                See why over 100,000 teams choose TeamFlow.com
              </Text>
            </div>
            <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] sm:w-[100%] w-[auto]">
              <Img
                src="images/img_image1.png"
                className="h-[93px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                alt="imageOne"
              />
              <Img
                src="images/img_image2.png"
                className="h-[108px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                alt="imageTwo"
              />
              <Img
                src="images/img_image3.png"
                className="h-[95px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                alt="imageThree"
              />
              <Img
                src="images/img_image4.png"
                className="h-[95px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                alt="imageFour"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1540px] mt-[174px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[110px] md:gap-[40px] sm:gap-[40px] items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[28%]">
                <Text
                  className="text-gray_701 text-left tracking-ls096 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body9"
                >
                  <span className="sm:text-[38px] md:text-[44px] text-gray_701 text-[48px] font-nunitosans font-semibold">
                    What you
                  </span>
                  <span className="sm:text-[38px] md:text-[44px] text-gray_701 text-[48px] font-nunitosans font-bold">
                    {" "}
                  </span>
                  <span className="sm:text-[38px] md:text-[44px] text-amber_400 text-[48px] font-nunitosans font-bold">
                    can do?
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 sm:flex-1 flex-col justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-orange_A100 flex flex-col h-[102px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[178px] mr-[157px] p-[28px] sm:px-[20px] rounded-radius26 w-[102px]">
                    <Img
                      src="images/img_graph1.svg"
                      className="h-[45px] w-[45px]"
                      alt="graphOne"
                    />
                  </div>
                  <Text
                    className="font-bold md:ml-[0] sm:ml-[0] ml-[113px] mt-[54px] text-indigo_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body18"
                  >
                    Business Planning
                  </Text>
                  <Text
                    className="leading-[34.00px] mt-[28px] not-italic text-center text-gray_702 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body23"
                  >
                    Our Business Plan is a written document describing a
                    company’s core business activities.
                  </Text>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_financialicon.svg"
                    className="h-[102px] md:ml-[0] sm:ml-[0] ml-[204px] w-[102px]"
                    alt="financialicon"
                  />
                  <Text
                    className="font-bold md:ml-[0] sm:ml-[0] ml-[140px] mt-[54px] text-indigo_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body18"
                  >
                    Financial Planning
                  </Text>
                  <Text
                    className="leading-[34.00px] mt-[28px] not-italic text-center text-gray_702 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body23"
                  >
                    Our expert team sensible decision about their money, to
                    ensure they achieve the life goals. A financial plan.
                  </Text>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-deep_orange_A100 flex flex-col h-[102px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[177px] mr-[156px] p-[27px] sm:px-[20px] rounded-radius20 w-[102px]">
                    <Img
                      src="images/img_search.svg"
                      className="h-[47px] w-[auto]"
                      alt="search"
                    />
                  </div>
                  <Text
                    className="font-bold md:ml-[0] sm:ml-[0] ml-[126px] mt-[54px] text-indigo_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body18"
                  >
                    Market Analysis
                  </Text>
                  <Text
                    className="leading-[34.00px] mt-[28px] not-italic text-center text-gray_702 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body23"
                  >
                    A market analysis is a quantitative and qualitative
                    assessment of a market. It looks into the size of the
                    market.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[102px] md:gap-[40px] sm:gap-[40px] items-center justify-start max-w-[1540px] mt-[160px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <Text
              className="text-gray_701 text-left tracking-ls096 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body9"
            >
              <span className="sm:text-[38px] md:text-[44px] text-gray_701 text-[48px] font-nunitosans font-semibold">
                Our
              </span>
              <span className="sm:text-[38px] md:text-[44px] text-gray_701 text-[48px] font-nunitosans font-bold">
                {" "}
              </span>
              <span className="sm:text-[38px] md:text-[44px] text-amber_400 text-[48px] font-nunitosans font-bold">
                Features
              </span>
            </Text>
            <div className="flex md:flex-col sm:flex-col flex-row font-poppins md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="sm:h-[1300px] h-[678px] md:h-[979px] relative md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="absolute sm:h-[1300px] h-[678px] md:h-[979px] inset-[0] justify-center m-[auto] md:w-[100%] sm:w-[100%] w-[678px]">
                    <div className="absolute border-2 border-bluegray_101 border-solid h-[292px] inset-[0] justify-center m-[auto] rounded-radius50 w-[292px]"></div>
                    <div className="absolute border-2 border-bluegray_101 border-solid h-[504px] inset-[0] justify-center m-[auto] rounded-radius50 w-[504px]"></div>
                    <div className="absolute border-2 border-bluegray_101 border-solid flex flex-col md:h-[auto] sm:h-[auto] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[15px] rounded-radius50 w-[678px]">
                      <div className="flex flex-col gap-[8px] justify-start mb-[29px] mt-[45px] md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex md:flex-col sm:flex-col flex-row gap-[11px] items-center justify-between w-[100%]">
                          <div className="flex md:flex-1 sm:flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[77px] justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[88%]">
                              <div className="bg-blue_A200 h-[8px] mb-[330px] sm:mt-[0] mt-[21px] rounded-radius50 w-[8px]"></div>
                              <div className="md:h-[290px] sm:h-[290px] h-[359px] relative sm:w-[100%] w-[86%]">
                                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[93%]">
                                  <div className="flex flex-col gap-[109px] md:gap-[40px] sm:gap-[40px] justify-start w-[100%]">
                                    <Img
                                      src="images/img_volume_blue_50.svg"
                                      className="h-[80px] md:ml-[0] sm:ml-[0] ml-[56px] w-[80px]"
                                      alt="volume One"
                                    />
                                    <div className="flex flex-row items-start justify-between w-[100%]">
                                      <Img
                                        src="images/img_download.svg"
                                        className="h-[80px] mt-[90px] w-[80px]"
                                        alt="download"
                                      />
                                      <Img
                                        src="images/img_ellipse.png"
                                        className="h-[96px] md:h-[auto] sm:h-[auto] mb-[32px] mt-[42px] rounded-radius50 w-[96px]"
                                        alt="Ellipse"
                                      />
                                      <Img
                                        src="images/img_ellipse_56x56.png"
                                        className="h-[56px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[56px]"
                                        alt="Ellipse One"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-amber_300 h-[14px] ml-[14px] my-[auto] rounded-radius50 w-[14px]"></div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] p-[14px] rounded-radius19 top-[10%] w-[87%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group16.svg')",
                                  }}
                                >
                                  <div className="flex flex-row gap-[35px] items-center justify-between mb-[20px] md:w-[100%] sm:w-[100%] w-[96%]">
                                    <div className="flex flex-col items-start justify-start w-[auto]">
                                      <div className="h-[51px] md:h-[auto] sm:h-[auto] relative w-[51px]">
                                        <Img
                                          src="images/img_ellipse_51x51.png"
                                          className="h-[51px] m-[auto] rounded-radius50 w-[51px]"
                                          alt="Ellipse Two"
                                        />
                                        <div className="absolute bg-green_500 border border-solid border-white_A700 bottom-[0] h-[14px] right-[0] rounded-radius50 w-[14px]"></div>
                                      </div>
                                      <Text
                                        className="mt-[21px] text-indigo_500 text-left tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                        variant="body26"
                                      >
                                        Angelina{" "}
                                      </Text>
                                      <Text
                                        className="font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body28"
                                      >
                                        Member T2M Team
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-end justify-start w-[auto]">
                                      <Text
                                        className="font-medium text-green_501 text-left w-[auto]"
                                        variant="body28"
                                      >
                                        Task Done
                                      </Text>
                                      <div className="flex flex-row items-center justify-end ml-[auto] mt-[9px] md:w-[100%] sm:w-[100%] w-[79%]">
                                        <RatingBar
                                          className=""
                                          value={5}
                                          starCount={5}
                                          activeColor="#ea9341"
                                          size={14}
                                        ></RatingBar>
                                      </div>
                                      <Button
                                        className="cursor-pointer font-normal leading-[normal] min-w-[105px] mt-[31px] text-[14px] text-center text-gray_802 w-[auto]"
                                        size="lg"
                                      >
                                        Message
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                              <div className="bg-blue_300 h-[20px] mb-[8px] mt-[37px] rounded-radius50 w-[20px]"></div>
                              <Img
                                src="images/img_ellipse_65x65.png"
                                className="h-[65px] md:h-[auto] sm:h-[auto] ml-[126px] rounded-radius50 w-[65px]"
                                alt="Ellipse Three"
                              />
                              <div className="bg-green_400 h-[12px] mb-[32px] ml-[144px] mt-[21px] rounded-radius50 w-[12px]"></div>
                            </div>
                          </div>
                          <div className="flex md:flex-1 sm:flex-1 flex-col gap-[117px] md:gap-[40px] sm:gap-[40px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <div className="bg-deep_orange_400 h-[8px] mb-[77px] rounded-radius50 w-[8px]"></div>
                              <Img
                                src="images/img_music.svg"
                                className="h-[80px] mt-[5px] w-[80px]"
                                alt="music"
                              />
                            </div>
                            <Img
                              src="images/img_group28.svg"
                              className="h-[202px] md:ml-[0] sm:ml-[0] ml-[3px] w-[auto]"
                              alt="GroupTwentyEight"
                            />
                          </div>
                        </div>
                        <Button
                          className="flex items-center justify-center md:ml-[0] ml-[355px] mr-[79px] sm:ml-[0] text-center"
                          leftIcon={
                            <Img
                              src="images/img_ticket.svg"
                              className="mr-[13px] text-center"
                              alt="ticket"
                            />
                          }
                          size="4xl"
                          variant="OutlineIndigo50028"
                        >
                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-indigo_A700 text-left">
                            Boost your work
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_ellipse_80x80.png"
                    className="absolute h-[80px] left-[0] rounded-radius50 top-[26%] w-[80px]"
                    alt="Ellipse Four"
                  />
                </div>
                <div className="bg-pink_300 h-[18px] mb-[319px] md:mt-[0] sm:mt-[0] mt-[341px] rounded-radius50 w-[18px]"></div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col font-nunitosans items-start justify-start md:mt-[0] sm:mt-[0] mt-[209px] md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="leading-[147.40%] text-gray_803 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[90%]"
                  variant="body10"
                >
                  Manage everything in one workspace
                </Text>
                <Line className="bg-orange_A100 h-[4px] mt-[20px] w-[11%]" />
                <Text
                  className="font-normal leading-[38.00px] mt-[16px] not-italic text-gray_703 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body18"
                >
                  Planning, tracking and delivering your team’s best work has
                  never been easier. An integrated workspace that’s simple to
                  use, TeamFlow lets you spend less time managing your work and
                  more time actually doing it.
                </Text>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col items-start justify-end max-w-[1882px] mt-[138px] mx-[auto] p-[4px] md:px-[20px] sm:px-[20px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group15.svg')" }}
          >
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between md:ml-[0] sm:ml-[0] ml-[167px] mr-[auto] mt-[34px] md:w-[100%] sm:w-[100%] w-[79%]">
              <div className="flex flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[159px] md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-gray_803 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body10"
                >
                  Set up in minutes
                </Text>
                <Line className="bg-orange_A100 h-[4px] mt-[20px] w-[11%]" />
                <Text
                  className="font-normal leading-[38.00px] mt-[16px] not-italic text-gray_703 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body18"
                >
                  Get started fast with hundreds of visual and customizable
                  templates - or create your own. Use our free online template
                  maker to create beautiful template in minutes. Choose from
                  hundreds of pre-made templates and tell stories with data with
                  our easy drag-and-drop infographic creator.
                </Text>
              </div>
              <div className="h-[658px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="absolute h-[658px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] md:w-[100%] sm:w-[100%] w-[98%]">
                  <Img
                    src="images/img_group33.svg"
                    className="absolute bottom-[10%] h-[428px] right-[0] w-[auto]"
                    alt="GroupThirtyThree"
                  />
                  <div className="absolute h-[658px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] w-[100%]">
                    <Img
                      src="images/img_image14.png"
                      className="h-[658px] m-[auto] object-cover w-[100%]"
                      alt="imageFourteen"
                    />
                    <Img
                      src="images/img_group34.svg"
                      className="absolute h-[249px] left-[15%] top-[2%] w-[auto]"
                      alt="GroupThirtyFour"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_group37.svg"
                  className="absolute h-[106px] right-[0] top-[6%] w-[auto]"
                  alt="GroupThirtySeven"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1268px] mt-[261px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col justify-start w-[100%]">
              <Text
                className="leading-[147.40%] md:ml-[0] sm:ml-[0] ml-[248px] text-center text-gray_701 tracking-ls096 md:tracking-ls1 sm:tracking-ls1"
                variant="body9"
              >
                <span className="sm:text-[38px] md:text-[44px] text-amber_400 text-[48px] font-nunitosans font-bold">
                  Integrate
                </span>
                <span className="sm:text-[38px] md:text-[44px] text-gray_701 text-[48px] font-nunitosans font-bold">
                  {" "}
                </span>
                <span className="sm:text-[38px] md:text-[44px] text-gray_701 text-[48px] font-nunitosans font-semibold">
                  with your existing tools
                  <br />
                  in a few clicks
                </span>
              </Text>
              <div className="bg-blue_A700 h-[16px] md:ml-[0] sm:ml-[0] ml-[226px] mr-[1026px] mt-[54px] rounded-radius50 w-[16px]"></div>
              <div className="md:gap-[40px] sm:gap-[40px] gap-[92px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between mt-[30px] w-[100%]">
                <Img
                  src="images/img_image21.png"
                  className="h-[180px] md:h-[auto] sm:h-[auto] object-cover rounded-radius20 w-[180px]"
                  alt="imageTwentyOne"
                />
                <Img
                  src="images/img_image19.png"
                  className="h-[180px] md:h-[auto] sm:h-[auto] object-cover rounded-radius20 w-[180px]"
                  alt="imageNineteen"
                />
                <Img
                  src="images/img_image16.png"
                  className="h-[180px] md:h-[auto] sm:h-[auto] object-cover rounded-radius20 w-[180px]"
                  alt="imageSixteen"
                />
                <Img
                  src="images/img_image15.png"
                  className="h-[180px] md:h-[auto] sm:h-[auto] object-cover rounded-radius20 w-[180px]"
                  alt="imageFifteen"
                />
                <Img
                  src="images/img_image17.png"
                  className="h-[180px] md:h-[auto] sm:h-[auto] object-cover rounded-radius20 w-[180px]"
                  alt="imageSeventeen"
                />
              </div>
              <div className="flex flex-row items-start justify-between ml-[auto] mt-[100px] md:w-[100%] sm:w-[100%] w-[33%]">
                <Button
                  className="cursor-pointer font-semibold min-w-[230px] sm:text-[22px] md:text-[24px] text-[26px] text-bluegray_900 text-center w-[auto]"
                  size="3xl"
                >
                  View All
                </Button>
                <div className="bg-blue_A700 h-[20px] mb-[14px] mt-[36px] rounded-radius50 w-[20px]"></div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1540px] mt-[210px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="md:h-[582px] sm:h-[582px] h-[680px] relative md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="absolute border-bw3 border-dashed border-gray_300 md:h-[582px] sm:h-[582px] h-[680px] inset-[0] justify-center m-[auto] p-[38px] sm:px-[20px] rounded-radius50 md:w-[100%] sm:w-[100%] w-[680px]">
                <div className="absolute h-[582px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] sm:w-[100%] w-[582px]">
                  <div className="h-[582px] md:h-[auto] sm:h-[auto] m-[auto] sm:w-[100%] w-[582px]">
                    <Img
                      src="images/img_andrea.png"
                      className="h-[582px] m-[auto] rounded-radius50 w-[582px]"
                      alt="andrea"
                    />
                    <div className="absolute border-blue_51 border-bw6 border-solid h-[500px] inset-[0] justify-center m-[auto] rounded-radius50 w-[500px]"></div>
                  </div>
                  <div className="absolute bg-blue_300 h-[40px] left-[3%] rounded-radius50 top-[9%] w-[40px]"></div>
                </div>
                <div className="absolute bg-deep_orange_400 bottom-[0] h-[24px] left-[22%] rounded-radius50 w-[24px]"></div>
              </div>
              <div className="absolute bg-pink_300 bottom-[44%] h-[24px] right-[0] rounded-radius50 w-[24px]"></div>
            </div>
            <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <Text
                className="text-gray_803 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body10"
              >
                Save time with Automations
              </Text>
              <Line className="bg-amber_400 h-[4px] mt-[30px] w-[11%]" />
              <Text
                className="font-normal leading-[38.00px] mt-[16px] not-italic text-gray_703 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                variant="body18"
              >
                Automate the repetitive work in seconds so you can avoid human
                error and focus on what matters. It gives the impression of
                software that its highly automated which implies that it is good
                for client for who want to save time and manage team members
                easily.
              </Text>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col items-center justify-end max-w-[1882px] mt-[150px] mx-[auto] p-[87px] md:px-[20px] sm:px-[20px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group15.svg')" }}
          >
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between mt-[11px] md:w-[100%] sm:w-[100%] w-[91%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-gray_803 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body10"
                >
                  Visualize work with Views
                </Text>
                <Line className="bg-indigo_A200 h-[4px] mt-[30px] w-[11%]" />
                <Text
                  className="font-normal leading-[38.00px] mt-[16px] not-italic text-gray_703 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                  variant="body18"
                >
                  View data as a map, calendar, timeline, kanban, and more
                  <br />
                  The easy-to-use, visual interface lets any team member jump in
                  and get started, no training required.
                </Text>
              </div>
              <div className="md:h-[440px] sm:h-[440px] h-[651px] relative md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="absolute border-bw3 border-dashed border-gray_301 bottom-[0] md:h-[440px] sm:h-[440px] h-[580px] p-[15px] right-[2%] rounded-radius50 sm:w-[100%] w-[580px]">
                  <div className="absolute border-bw3 border-dashed border-gray_301 h-[440px] inset-[0] justify-center m-[auto] rounded-radius50 w-[440px]"></div>
                  <div className="absolute bg-green_A400 h-[30px] right-[10%] rounded-radius50 top-[36%] w-[30px]"></div>
                  <div className="absolute bg-deep_orange_A100 bottom-[0] flex flex-col h-[200px] items-center justify-start p-[30px] sm:px-[20px] right-[7%] rounded-radius50 w-[200px]">
                    <div className="flex flex-col justify-start my-[8px] w-[100%]">
                      <div className="flex flex-row gap-[17px] items-center justify-start md:w-[100%] sm:w-[100%] w-[76%]">
                        <div className="bg-deep_orange_300 h-[18px] my-[26px] rounded-radius50 w-[18px]"></div>
                        <Img
                          src="images/img_clock.svg"
                          className="h-[70px] w-[70px]"
                          alt="clock"
                        />
                      </div>
                      <div className="h-[52px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[20px] relative w-[86%]">
                        <div className="absolute bg-deep_orange_300 h-[52px] inset-y-[0] my-[auto] right-[0] rounded-radius50 w-[52px]"></div>
                        <Text
                          className="absolute bottom-[15%] font-bold left-[0] text-left text-white_A700 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body18"
                        >
                          Timeline
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-blue_A200 bottom-[11%] h-[50px] left-[11%] rounded-radius50 w-[50px]"></div>
                </div>
                <div className="absolute bg-cyan_300 flex flex-col h-[220px] items-start justify-start p-[35px] sm:px-[20px] right-[0] rounded-radius50 top-[0] w-[220px]">
                  <div className="flex flex-row items-start justify-start my-[6px] md:w-[100%] sm:w-[100%] w-[90%]">
                    <div className="bg-white_A700_49 h-[30px] mb-[30px] mt-[77px] rounded-radius50 w-[30px]"></div>
                    <div className="flex flex-col gap-[24px] justify-start ml-[5px] w-[75%]">
                      <div className="flex flex-row items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[80px] w-[80px]"
                          alt="location"
                        />
                        <div className="bg-white_A700_49 h-[20px] mb-[34px] mt-[26px] rounded-radius50 w-[20px]"></div>
                      </div>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[11px] text-left text-white_A700 tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body14"
                      >
                        Map
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-deep_orange_401 h-[24px] left-[33%] rounded-radius50 top-[5%] w-[24px]"></div>
                <div className="absolute bg-amber_301 flex flex-col h-[180px] items-start justify-start left-[0] p-[26px] sm:px-[20px] rounded-radius50 top-[24%] w-[180px]">
                  <div className="flex flex-col gap-[9px] items-end justify-start mb-[20px] mt-[10px] md:w-[100%] sm:w-[100%] w-[88%]">
                    <div className="md:h-[50px] sm:h-[50px] h-[55px] relative w-[63%]">
                      <div className="absolute bg-white_A700_3f h-[42px] right-[0] rounded-radius50 top-[0] w-[42px]"></div>
                      <Img
                        src="images/img_calendar1.svg"
                        className="absolute bottom-[0] h-[50px] left-[0] w-[50px]"
                        alt="calendarOne"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-evenly w-[100%]">
                      <div className="bg-white_A700_3f h-[15px] mb-[18px] rounded-radius7 w-[15px]"></div>
                      <Text
                        className="font-bold mt-[11px] text-left text-white_A700 tracking-ls044 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body20"
                      >
                        Calendar
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[118px] md:gap-[40px] sm:gap-[40px] items-start justify-start max-w-[1463px] mt-[260px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="md:h-[639px] h-[704px] sm:h-[869px] relative md:w-[100%] sm:w-[100%] w-[45%]">
              <div className="absolute md:h-[639px] h-[704px] sm:h-[869px] inset-y-[0] left-[0] my-[auto] sm:w-[100%] w-[89%]">
                <div className="flex flex-col h-[100%] items-center justify-start m-[auto] w-[100%]">
                  <div className="flex flex-col gap-[104px] md:gap-[40px] sm:gap-[40px] justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[154px] sm:gap-[40px] items-start justify-start mr-[64px] md:w-[100%] sm:w-[100%] w-[89%]">
                      <div className="bg-cyan_300 h-[428px] mb-[108px] w-[49%]"></div>
                      <div className="bg-orange_A100 h-[190px] sm:mt-[0] mt-[346px] w-[21%]"></div>
                    </div>
                    <Img
                      src="images/img_group42.svg"
                      className="h-[63px] md:ml-[0] sm:ml-[0] ml-[445px] w-[auto]"
                      alt="GroupFortyTwo"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_image24.png"
                  className="absolute h-[588px] left-[3%] object-cover top-[2%] w-[84%]"
                  alt="imageTwentyFour"
                />
              </div>
              <div className="absolute bg-white_A700 bottom-[3%] flex flex-col items-center justify-start p-[21px] sm:px-[20px] right-[0] rounded-radius19 shadow-bs4 w-[68%]">
                <div className="flex flex-col gap-[33px] items-start justify-start mb-[6px] md:w-[100%] sm:w-[100%] w-[94%]">
                  <Text
                    className="font-normal leading-[160.69%] not-italic text-bluegray_800 text-left tracking-ls04037276077270508 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[95%]"
                    variant="body22"
                  >
                    “We ensure that any information you need is served
                    immediately by simply contacting our team”
                  </Text>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_901 text-left tracking-ls04037276077270508 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body22"
                    >
                      Peter Fennimore
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_300 text-left tracking-ls04037276077270508 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body22"
                    >
                      Head of CS{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[98px] md:w-[100%] sm:w-[100%] w-[48%]">
              <Text
                className="text-gray_803 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body10"
              >
                24/7 Customer Support
              </Text>
              <Line className="bg-amber_400 h-[4px] mt-[20px] w-[10%]" />
              <Text
                className="font-normal leading-[38.00px] mt-[16px] not-italic text-gray_703 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                variant="body18"
              >
                Our team is here to give you personalized support within the
                hour available 24/7. In accordance with our commitment to
                providing superior and professional service. Join daily live
                webinars, watch our tutorials, or browse through our knowledge{" "}
                <br />
                base
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[230px] mt-[32px] sm:text-[22px] md:text-[24px] text-[26px] text-bluegray_900 text-center w-[auto]"
                size="3xl"
              >
                Read More
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1652px] mt-[180px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="leading-[147.40%] text-center text-indigo_900 tracking-ls096 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[27%]"
                variant="body9"
              >
                <span className="sm:text-[38px] md:text-[44px] text-bluegray_902 text-[48px] font-nunitosans font-semibold">
                  Client
                </span>
                <span className="sm:text-[38px] md:text-[44px] text-indigo_900 text-[48px] font-nunitosans font-bold">
                  {" "}
                </span>
                <span className="sm:text-[38px] md:text-[44px] text-amber_400 text-[48px] font-nunitosans font-bold">
                  Testimonials
                </span>
              </Text>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="mt-[63px] w-[100%]"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-center justify-start mx-[10px]">
                      <div
                        className="bg-cover bg-no-repeat md:h-[517px] sm:h-[517px] h-[694px] p-[30px] sm:px-[20px] relative w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group48.svg')",
                        }}
                      >
                        <div className="absolute flex flex-col items-center justify-start right-[13%] top-[28%] w-[67%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                            <Img
                              src="images/img_ellipse_100x101.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] md:mt-[0] sm:mt-[0] mt-[177px] rounded-radius50 w-[101px]"
                              alt="Ellipse Five"
                            />
                            <div
                              className="bg-cover bg-no-repeat flex md:flex-1 sm:flex-1 flex-col items-start justify-start mb-[57px] md:ml-[0] sm:ml-[0] ml-[193px] p-[18px] md:w-[100%] sm:w-[100%] w-[45%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group21.svg')",
                              }}
                            >
                              <div className="flex flex-col gap-[11px] justify-start mb-[27px] md:w-[100%] sm:w-[100%] w-[95%]">
                                <div className="flex flex-row gap-[107px] items-start justify-start md:w-[100%] sm:w-[100%] w-[70%]">
                                  <Img
                                    src="images/img_quote1.svg"
                                    className="h-[43px] mb-[33px] w-[43px]"
                                    alt="quoteOne"
                                  />
                                  <Text
                                    className="mt-[41px] text-bluegray_801 text-left w-[auto]"
                                    variant="body15"
                                  >
                                    Rocky Dixon
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal leading-[160.69%] md:ml-[0] sm:ml-[0] ml-[25px] not-italic text-bluegray_802 text-center sm:w-[100%] w-[95%]"
                                  variant="body20"
                                >
                                  “The features on monday.com make our team work
                                  faster and easier to organize”
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_ellipse_1.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[214px] md:mt-[0] sm:mt-[0] mt-[176px] rounded-radius50 w-[101px]"
                              alt="Ellipse Six"
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-[4%] flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start right-[22%] w-[51%]">
                          <Img
                            src="images/img_ellipse_65x66.png"
                            className="h-[65px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[66px]"
                            alt="Ellipse Seven"
                          />
                          <div className="flex flex-col gap-[360px] md:gap-[40px] sm:gap-[40px] justify-start md:ml-[0] sm:ml-[0] ml-[66px] md:mt-[0] sm:mt-[0] mt-[24px] md:w-[100%] sm:w-[100%] w-[74%]">
                            <Img
                              src="images/img_ellipse_2.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[231px] rounded-radius50 w-[101px]"
                              alt="Ellipse Eight"
                            />
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_ellipse_86x87.png"
                                className="h-[86px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[87px]"
                                alt="Ellipse Nine"
                              />
                              <Img
                                src="images/img_ellipse_3.png"
                                className="h-[86px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[87px]"
                                alt="Ellipse Ten"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_ellipse_4.png"
                            className="h-[65px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[4px] rounded-radius50 w-[66px]"
                            alt="Ellipse Eleven"
                          />
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                Indicator={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-radius50 h-[14px] bg-amber_400 w-[14px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-radius50 h-[14px] bg-gray_302 w-[14px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="flex h-[14px] mt-[40px] w-[83px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-radius50 h-[14px] bg-amber_400 w-[14px]"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-radius50 h-[14px] bg-gray_302 w-[14px]"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block md:ml-[0] mx-[10.18px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[10.18px] sm:ml-[0]"
              />
            </div>
          </div>
          <div className="bg-gray_53 flex flex-col items-center justify-end max-w-[1882px] mt-[147px] mx-[auto] p-[100px] md:px-[20px] sm:px-[20px] w-[100%]">
            <Text
              className="font-bold mt-[3px] text-left text-yellow_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body18"
            >
              Support
            </Text>
            <Text
              className="mt-[28px] text-bluegray_801 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body10"
            >
              Subscribe Newsletter & get
            </Text>
            <Text
              className="mt-[7px] text-bluegray_801 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body12"
            >
              Company News
            </Text>
            <div className="bg-white_A700 flex flex-row items-center justify-end mt-[54px] p-[7px] rounded-radius20 shadow-bs5 md:w-[100%] sm:w-[100%] w-[39%]">
              <Img
                src="images/img_mail.svg"
                className="h-[24px] w-[24px]"
                alt="mail"
              />
              <Text
                className="ml-[23px] not-italic text-bluegray_302 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body23"
              >
                Your email
              </Text>
              <Input
                className="font-semibold p-[0] text-[20px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                wrapClassName="flex ml-[277px] mr-[3px] sm:w-[100%] w-[29%]"
                name="GroupOne"
                placeholder="Subscribe"
                prefix={
                  <Img
                    src="images/img_offer.svg"
                    className="mr-[12px] my-[auto]"
                    alt="offer"
                  />
                }
                shape="RoundedBorder20"
                size="md"
                variant="FillIndigoA200"
              ></Input>
            </div>
          </div>
          <div className="font-poppins md:h-[1996px] sm:h-[2073px] h-[627px] mt-[142px] relative w-[100%]">
            <Line className="absolute bg-gray_200 bottom-[21%] h-[1px] inset-x-[0] mx-[auto] rotate-[-180deg] w-[100%]" />
            <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[88%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start md:w-[100%] sm:w-[100%] w-[95%]">
                    <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[13%]">
                      <Button
                        className="flex h-[35px] items-center justify-center w-[35px]"
                        shape="icbRoundedBorder17"
                        size="smIcn"
                        variant="icbFillIndigoA201"
                      >
                        <Img
                          src="images/img_volume.svg"
                          className=""
                          alt="volume Two"
                        />
                      </Button>
                      <Text
                        className="font-semibold text-indigo_A201 text-left w-[auto]"
                        variant="body13"
                      >
                        <span className="sm:text-[26px] md:text-[28px] text-indigo_A201 text-[30px] font-poppins">
                          Team
                        </span>
                        <span className="sm:text-[26px] md:text-[28px] text-deep_orange_402 text-[30px] font-poppins">
                          Flow
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[332px] md:mt-[0] sm:mt-[0] mt-[12px] text-indigo_900 text-left w-[auto]"
                      variant="body20"
                    >
                      Product
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[184px] md:mt-[0] sm:mt-[0] mt-[13px] text-indigo_900 text-left w-[auto]"
                      variant="body20"
                    >
                      Team
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[224px] md:mt-[0] sm:mt-[0] mt-[12px] text-indigo_900 text-left w-[auto]"
                      variant="body20"
                    >
                      Solutions
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[276px] md:mt-[0] sm:mt-[0] mt-[13px] text-indigo_900 text-left w-[auto]"
                      variant="body20"
                    >
                      Resources
                    </Text>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[50px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <Text
                      className="md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      All Rights Reserved © teamflow.com
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[176px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Product
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[193px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      About Us
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[198px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Project Management
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[167px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Knowledge Base
                    </Text>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-end ml-[auto] mt-[32px] md:w-[100%] sm:w-[100%] w-[60%]">
                    <Text
                      className="md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Pricing
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[203px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Contact Us
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[177px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Marketing
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[278px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Guides
                    </Text>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[26px] md:w-[100%] sm:w-[100%] w-[97%]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body20"
                    >
                      Address
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[443px] md:mt-[0] sm:mt-[0] mt-[7px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Enterprise
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[172px] md:mt-[0] sm:mt-[0] mt-[6px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Careers
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[208px] md:mt-[0] sm:mt-[0] mt-[5px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      CRM and Sales
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[229px] md:mt-[0] sm:mt-[0] mt-[7px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Daily Webinars
                    </Text>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[19px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <Text
                      className="mb-[15px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      26 W 12th St. New York, NY 10342, NYC
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[171px] md:mt-[0] sm:mt-[0] mt-[14px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Partners
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[188px] md:mt-[0] sm:mt-[0] mt-[13px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Find a Partner
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[150px] md:mt-[0] sm:mt-[0] mt-[15px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Software Development
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[150px] md:mt-[0] sm:mt-[0] mt-[15px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Community
                    </Text>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end ml-[auto] mt-[32px] md:w-[100%] sm:w-[100%] w-[67%]">
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Affiliate
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[196px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      In the News
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[173px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Constructions
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[238px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body23"
                    >
                      Customer Stories
                    </Text>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between mt-[16px] w-[100%]">
                    <div className="flex md:flex-1 sm:flex-1 flex-col gap-[22px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-indigo_900 text-left w-[auto]"
                        variant="body20"
                      >
                        Social Media
                      </Text>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Img
                          src="images/img_facebook.svg"
                          className="h-[41px] w-[41px]"
                          alt="facebook"
                        />
                        <Img
                          src="images/img_camera.svg"
                          className="h-[41px] w-[41px]"
                          alt="camera"
                        />
                        <Button
                          className="flex h-[41px] items-center justify-center w-[41px]"
                          shape="icbRoundedBorder20"
                          size="mdIcn"
                          variant="icbFillBluegray803"
                        >
                          <Img
                            src="images/img_twitter.svg"
                            className=""
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="flex h-[41px] items-center justify-center w-[41px]"
                          shape="icbRoundedBorder20"
                          size="mdIcn"
                          variant="icbFillBluegray803"
                        >
                          <Img
                            src="images/img_play.svg"
                            className=""
                            alt="play"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                        <Text
                          className="md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Integrations
                        </Text>
                        <Text
                          className="md:ml-[0] sm:ml-[0] ml-[438px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Creative Production
                        </Text>
                        <Text
                          className="md:ml-[0] sm:ml-[0] ml-[179px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Templates
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[32px] w-[100%]">
                        <Text
                          className="sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Developers
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[447px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Remote Work
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[244px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Profesionals Services
                        </Text>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start mt-[32px] md:w-[100%] sm:w-[100%] w-[95%]">
                        <Text
                          className="not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Students
                        </Text>
                        <Text
                          className="md:ml-[0] sm:ml-[0] ml-[470px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          HR
                        </Text>
                        <Text
                          className="md:ml-[0] sm:ml-[0] ml-[351px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Video Tutorials
                        </Text>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[37px] md:w-[100%] sm:w-[100%] w-[86%]">
                        <Text
                          className="not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Work OS
                        </Text>
                        <Text
                          className="md:ml-[0] sm:ml-[0] ml-[476px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          IT
                        </Text>
                        <Text
                          className="md:ml-[0] sm:ml-[0] ml-[362px] md:mt-[0] sm:mt-[0] mt-[2px] not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          Blog
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between ml-[auto] mt-[32px] md:w-[100%] sm:w-[100%] w-[41%]">
                        <Text
                          className="not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
                        >
                          See More Solutions
                        </Text>
                        <Text
                          className="not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body23"
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
    </>
  );
};

export default FramePage;
