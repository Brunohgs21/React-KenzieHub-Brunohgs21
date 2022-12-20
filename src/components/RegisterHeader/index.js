import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Div = styled.div`
  height: 100vh;
  width: 100%;
  background: #121214;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.625rem;

    width: 23.0625rem;

    background: #212529;
    box-shadow: 0rem 0.25rem 0.25rem -0.625rem rgba(0, 0, 0, 0.25);
    border-radius: 0.25rem;

    @media (max-width: 700px) {
      width: 80%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input,
  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem 1.0152rem;
    gap: 0.6344rem;

    width: 100%;
    height: 2rem;

    /* grey-2 */

    background: #343b41;
    /* grey-2 */

    border: 0.0761rem solid #343b41;
    border-radius: 0.25rem;

    margin-top: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;
    /* identical to box height, or 163% */

    /* grey-50 */

    color: #868e96;
  }
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.3959rem;
    gap: 0.6344rem;
    cursor: pointer;

    width: 100%;
    height: 2.1875rem;

    /* color-primary-Disable */

    background: #59323f;
    /* color-primary-Disable */

    border: 0.0761rem solid #59323f;
    border-radius: 0.25rem;
    margin-top: 1.25rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;
    /* identical to box height, or 165% */

    color: #ffffff;
  }
  .btn:hover {
    background-color: #ff577f;
    transition: 1s ease;
  }

  .btn2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.3959rem;
    gap: 0.6344rem;
    cursor: pointer;

    width: 100%;
    height: 2.1875rem;

    /* color-primary-Disable */

    background: #ff577f;
    /* color-primary-Disable */

    border: 0.0761rem solid #ff577f;
    border-radius: 0.25rem;
    margin-top: 1.25rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;
    /* identical to box height, or 165% */

    color: #ffffff;
  }

  .btn2:hover {
    color: #ff577f;
    background: #121214;
    border: #121214;
    transition: 1s ease;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    /* identical to box height, or 156% */
    margin-top: 0.625rem;

    /* grey-0 */

    color: #f8f9fa;
  }

  label {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;

    color: #f8f9fa;
    margin-top: 1rem;
  }

  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
    /* identical to box height, or 183% */

    /* grey-1 */

    color: #868e96;
  }
  .relative {
    position: relative;
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    width: 23.125rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 1.875rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    section {
      width: 80%;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 23.0625rem;
  margin-bottom: 0.625rem;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.0152rem;
  gap: 0.6344rem;

  width: 4.2181rem;
  height: 40z11px;

  /* grey-3 */

  background: #212529;
  border-radius: 0.25rem;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.75rem;
  /* identical to box height, or 237% */

  text-align: center;

  /* grey-0 */

  color: #f8f9fa;

  &&:hover {
    background-color: #ff577f;
    transition: 1s ease;
  }
`;

export const BtnLink = styled(LinkRouter)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.3959rem;
  gap: 0.6344rem;

  width: 20.25rem;
  height: 2.1875rem;

  background: #868e96;
  /* grey-1 */

  border: 0.0761rem solid #868e96;
  border-radius: 0.25rem;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.625rem;
  /* identical to box height, or 165% */

  /* grey-0 */

  color: #f8f9fa;

  &&:hover {
    background-color: #f8f9fa;
    color: #868e96;
    transition: 1s ease;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Logo = styled.h1`
  font-family: "Inter", sans-serif;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;

  /* color-primary */

  color: #ff577f;
`;
export const Logo2 = styled.h1`
  font-family: "Inter", sans-serif;

  /* color-primary */

  color: #ff577f;
`;
