import { createGlobalStyle } from "styled-components";

export interface Colors {
	themeBackground: string;
	white: string;
	green: string;
	base: string;
	black: string;
	yellow: string;
	neon: string;
	buttonColor: string;
	cardBackground: string;
	gray: string;
	lightGray: string;
	InputBackground: string;
}

export const colors: Colors = {
	themeBackground: "#1B2732",
	white: "#ffffff",
	neon: "#00D7E7",
	green: "#01D14E",
	base: "#313131",
	black: "#333333",
	yellow: "#F3B723",
	buttonColor: "#F3B723",
	cardBackground: "#919ba5",
	gray: "#979797",
	lightGray: "#8499AE",
	InputBackground: "#767e86",
};

export interface ThemeStarter {
	[propName: string]: string | undefined;
	themeBackground: string;
	white: string;
	green: string;
	base: string;
	black: string;
	yellow: string;
	neon: string;
	buttonColor: string;
	cardBackground: string;
	gray: string;
	lightGray: string;
	InputBackground: string;
}

export const theme: ThemeStarter = {
	themeBackground: colors.themeBackground,
	white: colors.white,
	green: colors.green,
	base: colors.base,
	black: colors.black,
	yellow: colors.yellow,
	neon: colors.neon,
	buttonColor: colors.buttonColor,
	cardBackground: colors.cardBackground,
	gray: colors.gray,
	lightGray: colors.lightGray,
	InputBackground: colors.InputBackground,
};

export interface ScreenSizes {
	mediaXS: number;
	mediaS: number;
	mediaM: number;
	mediaL: number;
	mediaXL: number;
	mediaXXL: number;
	mediaLX: number;
	mediaLXX: number;
}

export const screenSizes: ScreenSizes = {
	mediaXS: 380,
	mediaS: 640,
	mediaM: 800,
	mediaL: 1024,
	mediaXL: 1280,
	mediaXXL: 1480,
	mediaLX: 1800,
	mediaLXX: 2000,
};

export default createGlobalStyle`
  html {
	background-image: linear-gradient(to right top, #284d83, #4756a5, #7558c1, #ac53d2, #e740d8);
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   aling-items: center;
   @media only screen and (max-width: ${screenSizes.mediaM}px) {
	background-color:#e740d8 ;
	background-image: none;
	}
  }
`;
