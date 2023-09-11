import { extendTheme, theme } from "@chakra-ui/react";

const myTheme = extendTheme({
    colors:{
        primary: theme.colors.cyan,
        secondary: theme.colors.pink
    },
    fonts:{
      title:"Yellowtail"
    },
    styles: {
        global: (props) => ({
          "html, body, #root": {
            height:"100%",
            fontSize: "sm",
            lineHeight: "tall",
          }})
        }
    })

export default myTheme;