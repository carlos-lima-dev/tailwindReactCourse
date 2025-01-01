/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc", // Blue
        secondary: "#ffed4a", // Yellow
        accent: "#e3342f", // Red
        background: "#f7fafc", // Light gray background
        dark: "#2d3748", // Dark gray text
        light: "#edf2f7", // Light gray accents
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font for sans-serif
        serif: ["Merriweather", "serif"], // Custom font for serif
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2d3748", // Default text color
            a: {
              color: "#3490dc", // Link color
              "&:hover": {
                color: "#1d72b8", // Hover link color
              },
            },
            h1: {
              fontFamily: "Merriweather", // Serif font for headings
              fontWeight: "700",
              color: "#2d3748", // Heading color
            },
            h2: {
              fontFamily: "Merriweather",
              fontWeight: "700",
              color: "#2d3748",
            },
            h3: {
              fontFamily: "Merriweather",
              fontWeight: "700",
              color: "#2d3748",
            },
            p: {
              fontFamily: "Inter", // Sans-serif font for paragraphs
              color: "#4a5568", // Paragraph text color
            },
            ul: {
              listStyleType: "circle",
            },
            ol: {
              listStyleType: "decimal",
            },
            blockquote: {
              borderLeft: "4px solid #e3342f", // Red border for blockquotes
              paddingLeft: "16px",
              color: "#4a5568",
              fontStyle: "italic",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
