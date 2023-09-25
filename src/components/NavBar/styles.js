import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 1px 5px 5px #e0dccc;
  background: whitesmoke;
`;

export const Logo = styled.img`
  width: 250px;
  height: 70px;
  object-fit: contain;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  list-style: none;
  padding: 1px 15px;
  :visited {
    text-decoration: none;
  }
`;
