import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Line = styled.div`
    margin: 5% 0 3% 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(55, 53, 47, 0.16);
`;

const SubTitle = styled.div`
    width: 100%;
    color: rgba(217, 115, 13, 1);
    font-weight: 600;
    font-size: 2.5em;
    line-height: 2em;
`;

const Text = styled.div`
    font-size: 1.5em;
    width: 100%;
`;

const Text2 = styled.div`
    color: gray;
    width: 100%;
`;

function Introduce() {
    return (
        <Container>
            <Line></Line>
            <SubTitle>Introduce.</SubTitle>
            <Text>
                안녕하세요. 이타적인 기회주의자를 목표로 하고 있는 개발자입니다.
                <br/>
                아래는 제가 요즘 밀고 있는 문구입니다.
            </Text>
            <br />
            <Text2>
                오스카 쉰들러는 흔해빠진 기회주의자요, 부패한 사업가였다. 
                <br/>
                그러나 거대한 악이 이 세상을 집어삼킬 것 처럼 보였을 때, 
                <br/>
                그 악에 대항하여 생명을 구한 이는 귀족도, 성직자도, 지식인도 아닌 
                <br/>
                부패한 기회주의자 오스카 쉰들러였다. 그의 영혼에 안식과 축복이 있기를
            </Text2>
        </Container>
    );
}

export default Introduce;
