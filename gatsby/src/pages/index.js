import React from 'react';
import Section, { SectionContent } from '@components/Section/Section';
import Intro from '@components/Intro/Intro';
import styled from 'styled-components';

const SectionsWrapperStyles = styled.div`
  counter-reset: item;
`;

const IndexPage = () => (
  <>
    <Intro>
      <h2>Hi, my name is</h2>
      <h1>James Howell</h1>
      <h3>
        I make The Internet* <span>(well some of it)</span>
      </h3>
      <p>
        I'm a front-end web developer based in London with over a decade of
        experience in the advertising, marketing and banking industries.
      </p>
      <p>I love building beautiful interfaces for web apps and websites.</p>
    </Intro>
    <SectionsWrapperStyles>
      <Section id="about" title="About Me">
        <p>
          I've been building websites since you were in short trousers (around
          2007 to be exact) and a lot has changed on the Web in that time.
          Luckily for you, I've changed with it and have moved on from
          Macromedia Dreamweaver to Visual Studio Code (with quite a few other
          editors used along the way!) My Classic ASP skills aren't what they
          were but in their place are new skills in Angular, React and Node.
        </p>
        <p>
          I love to learn but most of all I love building beautiful, performant
          interfaces and user-experiences which everyone can use.
        </p>
        <p>
          I'm also a big fan of productivity tools so will spend time
          customising my editor, Alfred workflows, Terminal and keyboard
          shortcuts to get things done as efficiently as possible.
        </p>
        <p>Below are a few skills I've been picking up recently:</p>
      </Section>
      <Section id="experience" title="My Experience">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
          iste maxime. Veritatis nisi, nulla deleniti quaerat commodi assumenda!
          Possimus aliquam labore quaerat blanditiis hic deleniti ab, rem
          incidunt mollitia at.
        </p>
      </Section>
      <Section id="recommendations" title="My Recommendations / Things I Use">
        <h2>Hardware</h2>
        <SectionContent>
          <h3>Dev Machine</h3>
          <p>
            My personal machine is a 2015 iMac Retina 5K 3.2 Ghz Quad-Core i5 with
            32Gb RAM
          </p>
        </SectionContent>
        <SectionContent>
          <h3>Monitor</h3>
          <p>
            As a second screen I've got a Dell P2715Q 27-Inch Ultra HD 4K LCD
            Monitor
          </p>
        </SectionContent>
        <h2>Dev Software</h2>
        <SectionContent>
          <h3>Code Editor</h3>
          <p>
            I've been using <a href="#">Visual Studio Code</a> for professional and personal
            projects since 2018. I've got a stack of extensions installed but here
            are some of my faves and what's cool about them:
          </p>
          <ul>
            <li><a href="#">Git Lens</a> - A vital extension if, like me, you work in a large team with lots of developers touching the same files. Git Lens adds a wealth of data from your repository into your editor showing the history of files, commits and even specific lines within files. You can also have a snoop around for who to blame when things go wrong, although I wouldn't encourage that!</li>
            <li><a href="#">Auto Rename Tag</a> - Ever converted a `span` into a `div` and then realised you forgot to change the closing tag? If so Auto Rename Tag will get you out of jail as it adds the ability to synchronise the editing of both tags at the same time.</li>
            <li><a href="#">Auto Close Tag</a> - Does exactly what you'd expect it would. But if you consider how often a developer needs to close a tag having this be automatic is a godsend.</li>
            <li><a href="#">Bracket Pair Colorizer</a> - A useful extension which colour codes opening and closing brackets which is especially useful in complex Javascript files.</li>
          </ul>
        </SectionContent>
        <SectionContent>
          <h3>Terminal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis
            quos. Facere ex unde impedit perferendis amet tempora dolorum
            praesentium, facilis ratione blanditiis distinctio culpa accusantium
            necessitatibus, soluta illo error.
          </p>
        </SectionContent>
        <h2>Desktop Apps</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          repellat obcaecati alias, repudiandae non minus quam animi quod unde
          porro nostrum deserunt quas sunt deleniti magni et. Ipsam, dicta
          porro?
        </p>
        <h2>Other gear</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          repudiandae nulla animi sed eum, alias aut esse porro ducimus aperiam
          expedita ea neque autem dolorem perferendis tempore labore eligendi
          nemo.
        </p>
      </Section>
      <Section id="blog" title="Blog">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure
          excepturi ex vel saepe, sequi suscipit perspiciatis illo itaque
          tempore sunt, eius consequatur. Debitis assumenda natus perferendis
          omnis ab eaque!
        </p>
      </Section>
      <Section id="contact" title="Contact Me">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          temporibus quia numquam ut fugit earum nesciunt reprehenderit fuga
          dolores, illum commodi blanditiis eaque sunt eum, excepturi repellat
          provident, a cumque.
        </p>
      </Section>
    </SectionsWrapperStyles>
  </>
);

export default IndexPage;
