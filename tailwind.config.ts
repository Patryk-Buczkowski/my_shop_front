import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D5CB4",
        primaryHover: "#4B69C1",
        black5: "#FAFBFF",
        black10: "#E0E8FF",
        black15: "#dedede",
        black20: "#c8c8c8",
        black40: "#9B9B9B",
        black60: "#343A40",
        black80: "#3A435C",        
        black100: "#111E40",
        blackHover: "#414141",
        darkMedium: "#414A4B",
        danger: "#FF2A2A",
        blue: "#3D5CB4",
      },
      fontSize: {
        xs: ["12px", "130%"],
        sm: ["14px", "100%"],
        md: ["16px", "100%"],
        lg: ["18px", "100%"],
        xl: ["20px", "100%"],
        "2xl": ["24px", "135%"],
        "3xl": ["26px", "150%"],
        "4xl": ["28px", "135%"],
        "5xl": ["32px", "135%"],
        "6xl": ["40px", "135%"],
        "7xl": ["48px", "135%"],
        "8xl": ["56px", "100%"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to bottom, rgba(31, 132, 239, 0) 20%, rgba(31, 132, 239, 0.5) 50%, #1F84EF 100%)",
      },
      boxShadow: {
        blueFancy: `
          0px 4px 8px 0px #4A59691A,
          0px 14px 14px 0px #4A596917,
          0px 32px 19px 0px #4A59690D,
          0px 56px 23px 0px #4A596903,
          0px 88px 25px 0px #4A596900
        `,
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/forms")],
};
export default config;
