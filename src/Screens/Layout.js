import styled from "styled-components";

const Content = styled.main`
    margin: 0 auto;
    margin-top: 8%;
    margin-bottom: 8%;
    width: 40%;
`;

function Layout({ children }) {
    return (
        <>
            <Content>{children}</Content>
        </>
    );
}

export default Layout;
