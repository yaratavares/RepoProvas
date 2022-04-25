import styled from "styled-components";

const ContentHeader = styled.div`
  width: 100%;
  height: 250px;
  padding: 55px 33px 25px 33px;
  border-bottom: 1px solid #c4c4c4;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 294px;
  }

  .iconLogout {
    margin-right: 50px;

    :hover {
      cursor: pointer;
    }
  }
`;

const ContentImgAndLogout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentSearchBar = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;

  input {
    width: 32.5%;
    border: 1px solid #c4c4c4;
    border-radius: 6px;
    padding: 0 12px;

    ::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export { ContentHeader, ContentImgAndLogout, ContentSearchBar };
