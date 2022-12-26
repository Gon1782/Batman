import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <p>배트맨</p>
      <p
        onClick={() => {
          navigate("/123");
        }}
      >
        커뮤니티
      </p>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: #828282;
  padding: 20px;
  font-size: larger;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
