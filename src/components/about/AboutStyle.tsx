import styled from "styled-components";

export default styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 84%;
  margin: auto;
  padding: 8em 0 4em 0;
  justify-items: center;
  align-items: center;
  gap: 1em;
  .right_cont {
  }
  .right_cont .title {
    font-size: 3rem;
    margin-bottom: 0.5em;
  }
  .right_cont .descruption {
    font-size: 1.4rem;
    line-height: 1.8;
  }
  .right_cont .title span {
    font-weight: 900;
  }
  .left_cont {
    position: relative;
  }
  .left_cont img {
    width: 450px;
  }
  .left_cont::before {
    position: absolute;
    content: "";
    inset: 0;
    background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
    box-shadow: 0 4px 7px 0 #3a3d40;
    z-index: -1;
    border-radius: 50%;
    width: 450px;
    height: 450px;
  }
  .expo::before {
    box-shadow: none;
    background-image: none;
  }
  .btn_link {
    font-size: 1.8rem;
    margin-top: 1em;
    border-radius: 0.25em;
    color: var(--primary-color);
    padding: 0.5em 1em;
    background-color: rgb(37, 150, 190);
    display: block;
    width: fit-content;
  }
  @media (max-width: 1080px) {
    .left_cont img {
      width: 350px;
    }
    .left_cont::before {
      width: 350px;
      height: 350px;
    }
  }
  @media (max-width: 799px) {
    grid-template-columns: 1fr;
    .left_cont img {
      width: 400px;
    }
    .left_cont::before {
      width: 400px;
      height: 400px;
    }
    .left_cont {
      margin-top: 1.5em;
    }
  }
  @media (max-width: 485px) {
    width: 90%;
    .left_cont img {
      width: 90%;
    }
    .left_cont::before {
      width: 90%;
      height: 90%;
    }
  }
`;
