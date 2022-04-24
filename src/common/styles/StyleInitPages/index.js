import styled from "styled-components";

const InitContent = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 55px;
  }
`;

const ContainerCenterPage = styled.div`
  height: 100%;
  width: 464px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerClicks = styled.div`
  width: 100%;
  margin-top: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: rgba(70, 115, 202, 0.8);
    text-decoration-line: underline;

    :hover {
      cursor: pointer;
    }
  }
`;

const GithubButton = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 31px;

  border: none;
  background: rgba(66, 68, 69, 0.5);
  color: white;
  font-size: 14px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  :hover {
    cursor: auto !important;
  }
`;

export { InitContent, ContainerCenterPage, ContainerClicks, GithubButton };
