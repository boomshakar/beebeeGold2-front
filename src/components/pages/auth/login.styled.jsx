import styled from "styled-components";

export const LoginPage = styled.div`
  max-width: 500px;
  border: 2px solid rgb(3, 165, 206);
  border-radius: 5px;
  padding: 30px;
  margin: 50px auto;

  & h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #555;
  }

  & form input,
  & form button {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0 5px;
    outline: rgb(3, 165, 206);
    border: 1px solid rgb(3, 165, 206);
  }
`;
export const LoginPageRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    width: 150px !important;
    background: rgb(3, 165, 206);
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  & a {
    color: orange;
    letter-spacing: 1.3px;
    text-transform: uppercase;
  }
`;
