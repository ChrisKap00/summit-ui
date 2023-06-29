import React from "react";
import PropTypes from "prop-types";

export const TextArea = ({
  autoResize,
  placeholder,
  minRows,
  autoFocus,
  theme,
  hoverBg,
  style,
}) => {
  return (
    <textarea
      className="summit-textarea-autoresize"
      style={{
        border: "none",
        fontFamily: "inherit",
        fontSize: "1rem",
        backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.07)",
        borderRadius: "10px",
        padding: "0.5rem 1rem",
        boxSizing: "border-box",
        outline: "none",
        color: theme === "dark" ? "white" : "black",
        resize: "none",
        width: "100%",
        overflow: autoResize ? "none" : "auto",
        ...style,
      }}
      role="textbox"
      autoFocus={autoFocus}
      placeholder={placeholder || "Placeholder"}
      rows={minRows < 1 ? 1 : minRows}
      onChange={
        autoResize
          ? (e) => {
              e.target.style.height = `calc(${minRows * 18}px + 1rem)`;
              e.target.style.height = `${
                document.querySelector(".summit-textarea-autoresize").scrollHeight
              }px`;
            }
          : undefined
      }
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor =
          theme === "dark"
            ? hoverBg || "rgba(255, 255, 255, 0.15)"
            : hoverBg || "rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor =
          theme === "dark" ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.07)";
      }}
    ></textarea>
  );
};

TextArea.propTypes = {
  /**
   * Whether or not to resize vertically on full text area
   */
  autoResize: PropTypes.bool,

  /**
   * Placeholder for the text area
   */
  placeholder: PropTypes.string,

  /**
   * Minimum number of rows if autoResize is true, otherwise number of rows
   */
  minRows: PropTypes.number,

  /** Automatically focus on load */
  autoFocus: PropTypes.bool,

  /**Light or Dark theme */
  theme: PropTypes.string,

  /** Text area background on hover */
  hoverBg: PropTypes.string,

  /**Extra styling, like width etc... */
  style: PropTypes.object,
};

TextArea.defaultProps = {
  autoResize: true,
  placeholder: "placeholder",
  minRows: 1,
  autoFocus: false,
  theme: "dark",
  hoverBg: undefined,
  style: {},
};
