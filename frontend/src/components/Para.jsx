import React from 'react'
import { H1, P } from "./Typography";
import { Spacer } from "./Spacer";
import { useMediaQuery } from "react-responsive";


function Para({ text }) {
      const isResponsive = useMediaQuery({
        query: "(max-width: 768px)",
      });
  return (
    <>
      <Spacer height={isResponsive ? "10px" : "32px"} />
      <P
        style={
          isResponsive
            ? {
                color: "white",

                fontSize: "15px",
              }
            : {
                color: "white",

                fontSize: "24px",
              }
        }
        weight="200"
      >
        {text}
      </P>
    </>
  );
}

export default Para