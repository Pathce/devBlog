import styled from "styled-components";

export const StyledLayout = styled.div`
    height: 100vh;
    padding: 12px;
    background-color: ${({ theme }) => theme.style.backgroundColor};
    color: ${({ theme }) => theme.style.color};
`;