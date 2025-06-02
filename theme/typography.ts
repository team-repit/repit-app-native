import fonts from "./fonts";

const typography = {
  // headline
  Headline_1: {
    fontFamily: fonts.bold,
    fontSize: 23,
    lineHeight: 32.4,
  },
  SubHeadline_3_1: {
    fontFamily: fonts.bold,
    fontSize: 18,
    lineHeight: 24.3,
  },
  SubHeadline_3_2: {
    fontFamily: fonts.regular,
    fontSize: 18,
    lineHeight: 24.3,
  },

  // body
  Body_1_1: {
    fontFamily: fonts.bold,
    fontSize: 15,
    lineHeight: 21.75,
  },
  Body_1_2: {
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 21.75,
  },
  Body_2_1: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 17.4,
  },
  Body_2_2: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 17.4,
  },

  // caption
  Caption_1_1: {
    fontFamily: fonts.bold,
    fontSize: 10,
    lineHeight: 14.5,
  },
  Caption_1_2: {
    fontFamily: fonts.regular,
    fontSize: 10,
    lineHeight: 14.5,
  },
};

export type TypographyKey = keyof typeof typography;
export default typography;
