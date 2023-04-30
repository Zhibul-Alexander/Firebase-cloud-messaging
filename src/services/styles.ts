import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  max-width: 400px;
  max-height: 200px;

  border: transparent;
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const ToastTitle = styled.h3`
  width: 100%;

  font-family: "Roboto Light", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  align-self: start;
`;

export const ToastText = styled.div`
  width: 100%;

  font-family: "Roboto Light", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  align-self: start;

  padding: 10px 0;
`;
