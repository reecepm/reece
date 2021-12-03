import styled from "styled-components";

export const Title = styled.div`
  font-size: 6em;
  font-weight: bold;
  color: #2e2c6c;

  @media (max-width: 1440px) {
    font-size: 5em;
  }

  @media (max-width: 768px) {
    font-size: 4em;
  }

  @media (max-width: 450px) {
    font-size: 3em;
  }
`;

export const SubTitle = styled.div`
  font-weight: bold;
  font-size: 1.25em;
  color: rgba(46, 44, 108, 0.25);

  @media (max-width: 1440px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.875em;
  }
`;

export const Desc = styled.div`
  font-size: 1.125em;
  font-weight: bold;
  text-align: center;
  color: rgba(46, 44, 108, 0.75);

  @media (max-width: 1440px) {
    font-size: 0.875em;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MainColumn = styled.div`
  max-width: 650px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.15s linear;

  @media (max-width: 768px) {
    max-width: 500px;
  }

  @media (max-width: 600px) {
    max-width: 400px;
  }

  @media (max-width: 450px) {
    max-width: 300px;
  }
`;
