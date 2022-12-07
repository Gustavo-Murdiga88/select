import { StylesConfig } from "react-select";
import { theme } from "stitches.config";

interface Options {
  label: string;
  value: any;
}

const {
  shadows: { focus, error },
  colors: { gray50, blue },
  background: { row },
  fontSizes: { xs },
} = theme;

export const StylesSelect: StylesConfig<Options> = {
  control: (css) => {
    return {
      ...css,
      minHeight: "0px",
      borderRadius: "8px",
      overflow: "auto",
      borderColor: "black",

      "&:has(input:not(:active,:focus)):hover": {
        borderColor: "black",
      },

      "&:disabled": {
        borderColor: "transparent",
      },

      "&:has(input:focus)": {
        boxShadow: focus.value,
        borderColor: "transparent",
      },

      "&.invalid": {
        boxShadow: error.value,
        borderColor: "transparent",
      },
    };
  },

  loadingIndicator: (css) => {
    return {
      ...css,
      color: blue.value,
    };
  },

  input: (css) => {
    return {
      ...css,
      fontSize: xs.value,
    };
  },
  dropdownIndicator: (css) => {
    return {
      ...css,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "black",

      "&:hover": {
        color: "black",
      },
    };
  },
  valueContainer: (css) => {
    return {
      ...css,
      minHeight: "28px",
    };
  },

  placeholder: (css) => {
    return {
      ...css,
      color: gray50.value,
      fontSize: xs.value,
    };
  },

  indicatorSeparator: (css) => {
    return {
      ...css,
      display: "none",
    };
  },

  menu: (css) => {
    return {
      ...css,
      padding: "0px",
    };
  },

  menuList: (css) => {
    return {
      ...css,
      padding: "6px 0",
      margin: 0,
      borderRadius: "8px",
    };
  },

  option: (css, { isSelected }) => {
    return {
      ...css,
      margin: 0,
      fontSize: xs.value,
      color: "black",
      backgroundColor: isSelected ? row.value : "white",
      fontWeight: isSelected ? "600" : "500",
      minHeight: "0",
      alignItems: "center",
      display: "flex",
      flex: 1,
      padding: "8px 1rem",
      "&:hover": {
        backgroundColor: row.value,
      },
    };
  },

  multiValue: (css) => {
    return {
      ...css,
      backgroundColor: row.value,
      borderRadius: "8px",
      fontSize: "12px",
      fontWeight: "bold",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "10px",
      minWidth: "50px",
    };
  },

  multiValueLabel: (css) => {
    return {
      ...css,
      marginRight: "4px",
    };
  },

  multiValueRemove: (css) => {
    return {
      ...css,
      height: "100%",
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    };
  },

  group: (css) => {
    return {
      ...css,
      borderRadius: "8px",
      margin: "0",
      padding: "0",
      fontSize: xs.value,
      display: "flex",
      flexWrap: "wrap",
    };
  },

  noOptionsMessage: (css) => {
    return {
      ...css,
      fontSize: xs.value,
      fontWeight: 500,
      display: "flex",
      wordBreak: "break-word",
      overflow: "hidden",
    };
  },
};
