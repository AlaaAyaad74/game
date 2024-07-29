import styled from "styled-components";

export default styled.section`
  height: 96vh;
  position: relative;

  background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);

  box-shadow: 0 4px 7px 0 #3a3d40;
  padding-top: 100px;
  border-radius: 0 0 0 5rem;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--primary-color);
    text-align: center;
    max-width: 400px;
  }
  .content h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1em;
    color: var(--primary-color);
  }
  .content p span {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--primary-color);
  }
  .content p {
    font-size: 1.5rem;
    color: var(--primary-color);
  }
  .btn_cont {
    margin-top: 1em;
    gap: 1em;
  }
  .btn_cont a {
    font-size: 1.65rem;
    padding: 0.4em;
    border-radius: 0.2em;
    width: 180px;
    font-weight: 700;
  }
  .btn_cont .right {
    background-color: var(--btn-color);
    color: var(--primary-color);
  }
  .btn_cont .left {
    background-color: var(--primary-color);
    color: var(--btn-color);
  }
  @media (max-width: 470px) {
    .btn_cont a {
      font-size: 1.4rem;
      width: 160px;
    }
    .content {
      width: 90%;
    }
  }
`;
