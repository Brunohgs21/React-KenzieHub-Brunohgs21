import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5rem 0 12.5rem;

  border-bottom: 0.0313rem solid #868e96;

  @media (max-width: 700px) {
    padding: 0 5% 0 5%;
    width: 100%;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.0152rem;
    gap: 0.6344rem;

    width: 3.4681rem;
    height: 2rem;

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
    @media (max-width: 700px) {
      padding: 0;
    }
  }
`;

export const Container = styled.div`
  height: 118px;

  /* grey-4 */

  background: #121214;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.0313rem solid #868e96;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12.5rem 0 12.5rem;

    @media (max-width: 700px) {
      flex-direction: column;
      padding: 0;
    }
  }

  .name {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    /* identical to box height, or 156% */

    /* grey-0 */

    color: #f8f9fa;
  }

  .module {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
    /* identical to box height, or 183% */

    color: #868e96;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0 5% 0 5%;
  }

  .text {
    margin-top: 2.3125rem;
    margin-bottom: 1.4375rem;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    /* identical to box height, or 156% */

    /* grey-0 */

    color: #f8f9fa;
  }

  .text2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    /* identical to box height, or 152% */

    color: #ffffff;
  }

  div {
    display: flex;
    padding: 0 12.5rem 0 12.5rem;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;

    @media (max-width: 700px) {
      padding: 0;
    }
  }

  .techText {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: #f8f9fa;
  }

  .addBtn {
    height: 32px;
    width: 32.485294342041016px;
    background: #212529;
    border-radius: 4px;
    color: #ffffff;
    font-size: large;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DivCheck = styled.div`
  position: absolute;
  background-color: #212529;
  border-radius: 0.5rem;
  padding: 0.3125rem;
  .valid {
    display: none;
  }
  .invalid {
    color: white;
  }
`;

export const List = styled.div`
  padding: 0 12.5rem 0 12.5rem;
  width: 100%;

  max-height: 416px;

  ul {
    background-color: #212529;
    width: 100%;
    max-height: 416px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 15px;
    overflow: auto;
  }
`;

export const DivModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  width: 369px;
  height: 342px;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  div {
    display: flex;

    justify-content: space-between;
    width: 100%;
    height: 50px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    padding: 12px 20px;
  }
  .closeBtn {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */
    background-color: transparent;
    border: none;

    /* grey-1 */

    color: #868e96;
  }
  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    /* grey-0 */

    color: #f8f9fa;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 5px;
  }

  label {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    /* identical to box height, or 0% */

    /* grey-0 */

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 165% */

    color: #ffffff;
    margin-top: 25px;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    /* grey-2 */

    background: #343b41;
    /* grey-0 */

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 165% */

    color: #ffffff;
  }

  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    /* grey-2 */

    background: #343b41;
    /* grey-0 */

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 165% */

    color: #ffffff;
  }

  .buttonSubmit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    /* color-primary */

    background: #ff577f;
    /* color-primary */

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    margin-top: 10px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 165% */

    color: #ffffff;
  }

  section {
    display: flex;
    gap: 22px;
    margin-top: 10px;
  }

  .btnSave {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    width: 204px;
    height: 48px;

    /* color-primary-Disable */

    background: #59323f;
    /* color-primary-Disable */

    border: 1.2182px solid #59323f;
    border-radius: 4px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 165% */

    color: #ffffff;
  }

  .btnDelete {
    position: absolute;
    bottom: 16px;
    right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    width: 98px;
    height: 48px;

    /* grey-1 */

    background: #868e96;
    /* grey-1 */

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 165% */

    color: #ffffff;
  }
`;

export const BackGround = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
`;

export const ItemTech = styled.li`
  width: 95%;
  min-height: 49px;

  background: #121214;
  border-radius: 4px;

  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 22px;
  /* identical to box height, or 183% */

  /* grey-0 */
  padding-left: 13px;
  padding-right: 13px;

  color: #f8f9fa;
`;
