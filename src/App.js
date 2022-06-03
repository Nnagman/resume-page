import Experience from "./Components/experience/Experience";
import Introduce from "./Components/introduce/Introduce";
import Avartar from "./Components/profile/Avartar";
import Info from "./Components/profile/Info";
import BasicCard from "./Screens/BasicCard";
import Layout from "./Screens/Layout";
import Skill from "./Components/skill/Skill";
import Intro from "./Components/profile/Intro";

function App() {
    return (
        <Layout>
            <Intro></Intro>
            <BasicCard>
                <Avartar></Avartar>
                <Info></Info>
            </BasicCard>
            <BasicCard>
                <Introduce></Introduce>
            </BasicCard>
            <BasicCard>
                <Skill></Skill>
            </BasicCard>
            <BasicCard>
                <Experience></Experience>
            </BasicCard>
        </Layout>
    );
}

export default App;
