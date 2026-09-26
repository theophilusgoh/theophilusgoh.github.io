<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Theophilus Martus Goh</strong>, a Computer Science undergraduate in
        <strong>Real-Time Interactive Simulation</strong> at Singapore Institute of Technology /
        DigiPen, based in Singapore.<br/><br/>
        I build things that run in real time. That has meant writing a
        <router-link to="/game-projects">game engine from scratch in C++</router-link>, a
        falling-sand simulation where the whole world is made of interacting particles, and
        two years of <router-link to="/other-projects">live virtual production</router-link>
        in Unreal Engine 5, driving motion-captured avatars on stage in front of an audience,
        where there is no second take.
      </div>

      <div style="margin-top: 20px;">
        The common thread is the frame budget. Whether it's a particle simulation that has to stay
        interactive with tens of thousands of active cells, or a live show where a dropped frame is
        visible to everyone in the room, the interesting problems all live in the gap between
        "it works" and "it works fast enough".
      </div>

      <div style="margin-top: 40px;">
        I'm <strong>looking for a 2027 internship</strong> in engine, graphics, or XR / simulation
        engineering. You can reach me at
        <a href="mailto:goh.theophilus@gmail.com">goh.theophilus@gmail.com</a> or
        <router-link to="/contact">through here</router-link>, and my
        <router-link to="/resume">resume is here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Photo of Theophilus" />
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.photo img {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 50%;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>
