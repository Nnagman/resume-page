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
    font-size: 1.1em;
    width: 100%;
`;

function Skill() {
    return (
        <Container>
            <Line></Line>
            <SubTitle>Skill.</SubTitle>
            <Text>
                <li>Frontend: React, Javascript</li>
                <li>Backend: Spring, Java, Node.js, AWS(EC2, S3)</li>
                <li>Database: Mysql, Oracle</li>
            </Text>
        </Container>
    );
}

export default Skill;
