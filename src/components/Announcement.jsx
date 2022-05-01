import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
`;

const Announcement = () => {
  return <Container>
      Dela !!!!
  </Container>;
};

export default Announcement;
