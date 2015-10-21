/*eslint-disable object-shorthand*/
const colors = {
  primary: "#5abd4f",
  secondary: "#787f8c",
  tertiary: "white",
  headings: "#5c5c5c",
  pacman: "#bbbbbb",
};

const fonts = {
  primary: "proxima-nova",
  secondary: "sans-serif",
  tertiary: "monospace"
};

module.exports = {
  colors: colors,
  fonts: fonts,

  MLlogo: {
   margin: '40px auto 0',
   display: 'block',
   left: '0',
   right: '0',
  },

  slerkScreenshot: {
    height: '40vh',
  },

  global: {
    body: {
      background: colors.tertiary,
      fontFamily: fonts.primary,
      fontWeight: "normal",
      fontSize: "2em",
      color: colors.secondary,
      overflow: "hidden"
    },
    "html, body": {
      height: "100%"
    },
    "*": {
      boxSizing: "border-box"
    }
  },
  progress: {
    pacman: {
      container: {
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transition: "all 1s ease-in-out 0.2s",
        zIndex: 1000
      },
      pacman: {
        position: "absolute",
        transition: "left 0.3s ease-in-out 0.2s",
        width: "20px",
        height: "20px",
        transform: "translate(-5px, -5px)"
      },
      pacmanTop: {
        position: "absolute",
        content: " ",
        width: "20px",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        background: colors.pacman
      },
      pacmanBottom: {
        position: "absolute",
        content: " ",
        width: "20px",
        height: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        background: colors.pacman,
        top: "10px"
      },
      point: {
        position: "absolute",
        float: "left",
        background: "transparent",
        width: "10px",
        height: "10px",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: colors.pacman,
        borderRadius: "50%",
        transition: "all 0.01s ease-out 0.4s"
      }
    },
    bar: {
      container: {
        position: "absolute",
        height: "10px",
        width: "100%",
        bottom: 0,
        left: 0,
        transition: "all 1s ease-in-out 0.2s",
        zIndex: 1000
      },
      bar: {
        height: "100%",
        background: colors.primary,
        transition: "all 0.3s ease-out"
      }
    },
    number: {
      container: {
        position: "absolute",
        bottom: 10,
        right: 10,
        zIndex: 1000,
        color: colors.primary
      }
    }
  },
  components: {
    blockquote: {
      textAlign: "left",
      position: "relative",
      display: "inline-block"
    },
    quote: {
      borderLeft: "1px solid " + colors.primary,
      paddingLeft: 40,
      display: "block",
      color: colors.primary,
      fontSize: "4.9em",
      lineHeight: 1,
      fontWeight: "bold"
    },
    cite: {
      color: colors.tertiary,
      display: "block",
      clear: "left",
      fontSize: "2em",
      marginTop: "1em"
    },
    content: {
      margin: "0 auto",
      textAlign: "center"
    },
    codePane: {
      pre: {
        margin: "auto",
        fontSize: "1em",
        fontWeight: "normal",
        fontFamily: fonts.tertiary,
        minWidth: "100%",
        maxWidth: 800
      },
      code: {
        margin: "50",
        textAlign: "left",
        padding: 40,
        backgroundColor: "#282828",
        borderRadius: 5,
        fontWeight: "normal"
      }
    },
    code: {
      color: "black",
      fontSize: "2.66em",
      fontFamily: fonts.tertiary,
      margin: "0.25em auto",
      backgroundColor: "rgba(0,0,0,0.15)",
      padding: "0 10px",
      borderRadius: 3
    },
    heading: {
      h1: {
        color: colors.headings,
        fontSize: "7.05em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: 0,
        zoom: 1
      },
      h2: {
        color: colors.headings,
        fontSize: "5.88em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: 0
      },
      h3: {
        color: colors.headings,
        fontSize: "4.9em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0"
      },
      h4: {
        color: colors.headings,
        fontSize: "3.82em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0"
      },
      h5: {
        color: colors.headings,
        fontSize: "3.19em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0"
      },
      h6: {
        color: colors.headings,
        fontSize: "2.66em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0"
      }
    },
    image: {
      display: "block",
      maxWidth: "100%",
    },
    link: {
      textDecoration: "none",
      color: "#366AB9",
    },
    listItem: {
      fontSize: "2.66em"
    },
    list: {
      textAlign: "left",
      listStylePosition: "inside",
      padding: 0
    },
    s: {
      strikethrough: {}
    },
    text: {
      color: colors.secondary,
      fontSize: "2.66em",
      fontFamily: fonts.primary,
      margin: "0.5em auto 0",
      lineHeight: "1"
    }
  }
};
