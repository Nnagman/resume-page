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

const Box = styled.div`
    width: 100%;
`;

const BoxTitle = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 2em;
    line-height: 2em;
`;

function Experience() {
    return (
        <Container>
            <Line></Line>
            <SubTitle>Experience.</SubTitle>
            <Box>
                <BoxTitle>프로그래머스 백엔드 데브코스 (2022.03 ~ 진행중)</BoxTitle>
                프로그래머스에서 진행하는 백엔드 개발자 교육 프로그램
            </Box>
            <Line></Line>
            <Box>
                <BoxTitle>라플로우 (2021.07 ~ 2022.02)</BoxTitle>
            </Box>
            <Line></Line>
            <Box>
                <BoxTitle>페르소나 (2019.11 ~ 2021.04)</BoxTitle>
                비즈봇이란 지원사업 정보를 제공하는 챗봇을 서비스하는 기업
            </Box>
        </Container>
    );
}

export default Experience;
