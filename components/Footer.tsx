import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: rgba(46, 44, 108, 0.5);
`;

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
				height: 75
      }}
    >
      <Text>always learning</Text>
    </div>
  );
};

export default Footer;
