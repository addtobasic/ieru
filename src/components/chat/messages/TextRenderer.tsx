import { styled } from "@mui/material/styles";
import React from "react";
import reactStringReplace from "react-string-replace";

interface TextRendererProps {
  text: string;
}

const TextRenderer: React.FC<TextRendererProps> = ({ text }) => (
  <p>
    {reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
      <StyledA key={i} href={match} target="_blank" rel="noreferrer">
        {match}
      </StyledA>
    ))}
  </p>
);

const StyledA = styled("a")({
  color: "#1b95e0",
});

export default TextRenderer;
