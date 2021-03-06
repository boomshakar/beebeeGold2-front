import styled from "styled-components";

export const LoadPage = styled.div`
  background: #fff;
  overflow: hidden;
`;
export const Loader = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;

  & div {
    width: calc(100% - 15px);
    height: calc(100% - 15px);
    border: 2px solid #fff;
    border-top: 2px solid crimson;
    border-radius: 50%;
    animation: rotate 10s linear infinite alternate-reverse;
  }
  @keyframes rotate {
    50% {
      transform: rotate(80deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
