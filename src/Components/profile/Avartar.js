import styled from "styled-components";

const SAvatar = styled.div`
    width: 25%;
    height: 25%;
    border-radius: 50%;
    margin-right: 10%;
    background-color: #2c2c2c;
    overflow: hidden;
`;

const Img = styled.img`
    max-width: 100%;
`;

function Avartar() {
    return (
        <SAvatar>
            <Img src="https://avatars.githubusercontent.com/u/16336810?v=4" />
        </SAvatar>
    );
}

export default Avartar;
