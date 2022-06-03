import styled from "styled-components";

const Container = styled.div`
    flex-direction: column;
`;

const SubTitle = styled.div`
    width: 100%;
    color: rgba(217, 115, 13, 1);
    font-weight: 600;
    font-size: 1.5em;
    line-height: 2em;
`;

const Text = styled.div`
    width: 100%;
`;

const Span = styled.span`
    color: gray;
`;

function Info() {
    return (
        <Container>
            <SubTitle>Contatct.</SubTitle>
            <Text>
                Email. <strong>nnagman@kakao.com</strong>
            </Text>
            <SubTitle>Blog.</SubTitle>
            <Text>
                Velog.{" "}
                <a href="https://velog.io/@nnagman">
                    <Span>https://velog.io/@nnagman</Span>
                </a>
            </Text>
            <Text>
                Naver.{" "}
                <a href="https://blog.naver.com/ckdgh930314">
                    <Span>https://blog.naver.com/ckdgh930314</Span>
                </a>
            </Text>
            <SubTitle>Gihub.</SubTitle>
            <Text>
                Gihub.{" "}
                <a href="https://github.com/Nnagman">
                    <Span>https://github.com/Nnagman</Span>
                </a>
            </Text>
        </Container>
    );
}

export default Info;
