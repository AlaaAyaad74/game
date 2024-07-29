import styled from "styled-components";

export default styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  padding: 1em 2em;
  transition: all 0.3s ease;

  .logo {
    width: 100px;
  }

  .cont_links {
    gap: 0.5em;
  }

  .cont_links a {
    color: var(--primary-color);
    /* color: #d9d9d9; */
    font-size: 1.5rem;
    padding: 0.3em 0.7em;
    border-radius: 0.2em;
    font-weight: 700;

    &:hover {
      background-color: #ff5151;
      color: var(--primary-color);
      transition: all 0.3s ease;
    }
  }

  .left_side {
    gap: 1em;
  }

  .left_side a {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-color);
  }

  .left_side .btn_link {
    padding: 0.5em 0.8em;
    background-image: linear-gradient(135deg, #feb692 10%, #ea5455 100%);
    color: var(--primary-color);
    border-radius: 0.2em;
  }

  .active {
    transform: translateY(0) !important;
  }

  button,
  .overlay {
    display: none;
  }
  button {
    font-size: 1.6rem;
    color: var(--primary-color);
  }
  @media (max-width: 890px) {
    .cont_links a {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 779px) {
    .cont_links {
      position: absolute;
      top: 100px;
      left: 0;
      transform: translateY(-160%);
      transition: all 0.5s ease;
      flex-direction: column;
      width: 100%;
      padding: 1em;
      background-color: var(--primary-color);
      align-items: flex-end;
      gap: 0;
      z-index: 11; /* Ensure it appears above the overlay */
    }

    .cont_links a {
      border-radius: 0 !important;
      width: 96%;
      color: black;
    }
    .cont_links button {
      color: black;
    }

    .cont_links a:not(:last-child) {
      border-bottom: 1px solid;
    }

    button {
      display: block;
    }

    .overlay {
      display: none;
    }

    .overlay.active {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 10;
    }
  }
  @media (max-width: 470px) {
    padding: 1em;
  }
  @media (max-width: 380px) {
    padding: 0.5em;
    .left_side {
      gap: 0.5em;
    }
  }
`;
