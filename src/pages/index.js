import React from "react";
import Link from "gatsby-link";
import Typist from "react-typist";
import { Divider, Segment, Header } from "semantic-ui-react";
import styles from "./index-css-modules.module.css";
import { Progress } from "semantic-ui-react";
import "./semantic.min.css";

const DividerExampleInverted = () => <Divider horizontal>SKILLS</Divider>;

const SkillBar = props => {
  return (
    <div className={styles.progress}>
      <p className={styles.skillbar__label}>{props.label}</p>
      <p className={styles.skillbar__percent}>{props.percent}%</p>
      <Progress
        percent={props.percent}
        indicating
        className={styles.skillbar}
      />
    </div>
  );
};
class IndexPage extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "10rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 className="ui huge header">
          keep coming back. under construction.
        </h1>

        <div>
          <DividerExampleInverted />
        </div>
        <div className={styles.skillContainer}>
          <SkillBar percent={80} label="Go" />
          <SkillBar percent={60} label="Kubernetes" />
          <SkillBar percent={55} label="Node JS" />
          <SkillBar percent={50} label="Docker" />
          <SkillBar percent={30} label="Ansible" />
          <SkillBar percent={48} label="Python" />
          <SkillBar percent={43} label="React" />
          <SkillBar percent={48} label="Javascript" />
          <SkillBar percent={70} label="HTML/CSS" />
          <SkillBar percent={47} label="VueJs" />
          <SkillBar percent={60} label="Devops" />
        </div>
      </div>
    );
  }
}

export default IndexPage;
