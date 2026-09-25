<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Theophilus Martus Goh</strong>, a Computer Science undergraduate in Real-Time
      Interactive Simulation at Singapore Institute of Technology / DigiPen.
      <br />
      <br />I came into the degree from a Diploma in Game Development at Nanyang Polytechnic, and
      from two years of full-time Unreal Engine 5 and live motion capture work during National
      Service - building virtual avatars, running live multi-performer capture, and producing
      published video content.
      <br />
      <br />I'm looking for a <strong>2027 internship</strong> in engine, graphics, or XR /
      simulation engineering. Feel free to
      <router-link to="/contact">get in touch</router-link>.

      <div style="margin-top:20px; margin-bottom:20px;">
        <!-- TODO: copy resume.pdf into public/d/resume.pdf -->
        <a class="download-link" href="d/resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Unreal Engine &amp; Motion Capture Technician</h3>
      <h4>So Drama! Entertainment / SAF Music &amp; Drama Company &mdash; Feb 2022 to Feb 2024</h4>

      <div>
        Designed and programmed four custom real-time virtual avatars in Unreal Engine 5, owning
        character setup and Blueprint logic through to live deployment. Operated live motion capture
        for three public shows, driving four simultaneous performers on Xsens suits with Live Link
        Face morph-target facial animation, troubleshooting on air. Benchmarked Xsens, Rokoko and
        Perception Neuron under live show conditions and standardised the team on Xsens. Produced
        music videos and social content in UE5, and built a company-wide equipment inventory system
        in Google Apps Script.
      </div>

      <div class="tech-stack">Unreal Engine 5, Blueprints, Sequencer, Live Link Face, MetaHuman, Xsens, Rokoko, Perception Neuron, Google Apps Script</div>

      <h3>Production Operator</h3>
      <h4>ST Engineering, Advanced Materials Engineering &mdash; Mar 2024 to Aug 2024</h4>

      <div>
        Operated and maintained automated packing machinery and performed QA inspection on 5.56mm,
        7.62mm and .50 BMG rounds in a defence-manufacturing environment.
      </div>

      <h2>Skills</h2>

      <!-- TODO: these ratings are my best guess from what you told me. -->
      <!-- Adjust them - they are your self-assessment, not mine. -->
      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C++" :rate="5" />
        <SkillRate name="C#" :rate="4" />
        <SkillRate name="C" :rate="4" />
        <SkillRate name="GLSL" :rate="3" />
        <SkillRate name="Python" :rate="3" />
        <SkillRate name="Java" :rate="3" />
        <SkillRate name="JavaScript" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Engines &amp; Graphics</h3>
        <SkillRate name="Unreal Engine 5" :rate="4" />
        <SkillRate name="OpenGL" :rate="4" />
        <SkillRate name="Unity" :rate="3" />
        <SkillRate name="Blender" :rate="2" />
        <SkillRate name="Maya" :rate="2" />
      </div>

      <div class="skill-set">
        <h3>Virtual Production</h3>
        <SkillRate name="Xsens" :rate="4" />
        <SkillRate name="Live Link Face" :rate="4" />
        <SkillRate name="Rokoko" :rate="3" />
        <SkillRate name="Perception Neuron" :rate="3" />
        <SkillRate name="Git" :rate="4" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Singapore Institute of Technology / DigiPen &mdash; Sep 2024 to Apr 2028 (expected)</h3>
      <h4>B.S. Computer Science in Real-Time Interactive Simulation</h4>
      <div>
        Cumulative GPA 4.02 / 5.00. Coursework includes Real-Time Rendering, Computer Graphics,
        Modern C++ Design Patterns, Spatial Data Structures, Motion Dynamics, AI for Games,
        Developing Immersive Applications and Data Structures.
      </div>

      <h3>Nanyang Polytechnic &mdash; Apr 2017 to Apr 2021</h3>
      <h4>Diploma in Game Development and Technology</h4>

      <h2>Besides...</h2>
      <div>
        <!-- TODO: this section is optional - make it yours or delete it entirely. -->
        <!-- A couple of genuine interests here makes you a person rather than a keyword list. -->
        <h3>Simulation toys</h3>
        <div>
          Powder Toy, Noita, and anything where complex behaviour falls out of simple rules applied
          a few hundred thousand times a second.
        </div>

        <h3>Live production</h3>
        <div>
          Two years backstage taught me that the interesting failures are never the ones you
          planned for.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.tech-stack {
  font-style: italic;
}

@media only screen and (min-width: 620px){
  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
