import styled from "styled-components";

const Text = styled.div`
    font-weight: 600;
    font-size: 2em;
    line-height: 2em;
    width: 100%;
`;

function Intro() {
    return (
        <>
            <Text>안녕하세요!</Text>
            <Text>개발자 이창호입니다.</Text>
            <br />
        </>
    );
}

export default Intro;
