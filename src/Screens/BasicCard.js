import styled from "styled-components";

const Content = styled.div`
    display: flex;
    margin: 0 auto;
    width: 100%;
`;

function BasicCard({ children }) {
    return (
        <>
            <Content>{children}</Content>
        </>
    );
}

export default BasicCard;
