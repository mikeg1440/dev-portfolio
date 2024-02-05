import React, { Component } from "react";
import { styled } from "styled-components";

export default function Skills({ sharedSkills }) {
  const renderSkills = () => {
    if (sharedSkills) {
      return sharedSkills.icons.map((skills, i) => (
        <SkillBadge key={i}>
          <i className={skills.class} style={{ fontSize: "220%" }}></i>
          <p>{skills.name}</p>
        </SkillBadge>
      ));
    }
  };

  return (
    <section id="skills">
      <SectionContainer>
        <h1 className="section-title">
          <span>Skills</span>
        </h1>
        <SkillsContainer>{renderSkills()}</SkillsContainer>
      </SectionContainer>
    </section>
  );
}

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding: 2rem;
  flex-wrap: wrap;
`;

const SkillBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(248, 245, 244, 0.05);
  border-radius: 8px;
  padding: 2rem;
  font-size: 220%;
  margin: 1rem 3rem;
  color: white;
  box-shadow: -11px 17px 30px #141414, -26px 26px 30px #2a2a2a;
}
`;

const SkillIcon = styled.i`
  font-size: 220%;
`;
