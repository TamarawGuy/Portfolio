import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiSolidity, SiReact, SiFirebase } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle style={{ marginTop: "4rem" }}>Technologies</SectionTitle>
      <SectionText style={{ fontWeight: "bold" }}>
        Here are the technologies I have used to build my projects.
      </SectionText>
      <List>
        <ListItem>
          <SiReact size="2rem" style={{ marginBottom: "10px" }} />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              HTML, CSS, JavaScript, React.js, Next.js, Redux, Redux Toolkit, Bootstrap, Tailwind CSS, Styled-Components
            </ListParagraph>
          </ListContainer>
        </ListItem>

        {/* <ListItem>
          <SiFirebase size="2rem" style={{ marginBottom: "10px" }} />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br /> Node.js and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem> */}

        <ListItem>
          <SiSolidity size="2rem" style={{ marginBottom: "10px" }} />
          <ListContainer>
            <ListTitle>Web3</ListTitle>
            <ListParagraph>
              Solidity, Hardhat, Etherjs
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
