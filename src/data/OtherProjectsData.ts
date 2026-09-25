import ProjectData from '@/data/ProjectData.ts'

export default [

    new ProjectData("virtual-production", "Virtual Production & Live Motion Capture",
    "https://fakeimg.pl/600x400/6b4a9f/ffffff?text=Virtual+Production",
    `
    <div class="paragraph">
        Two years as an <strong>Unreal Engine 5 and motion capture technician</strong> at
        <strong>So Drama! Entertainment</strong> (SAF Music &amp; Drama Company), building and
        operating real-time virtual avatars for live shows and published video content.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Pff3eljjwB8" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <strong>Four custom avatars.</strong> I designed and programmed four bespoke characters in
        Unreal Engine 5 - character setup and Blueprint logic through to live deployment. The
        company also ran MetaHuman-based avatars; the four I owned were custom-built.
    </div>

    <div class="paragraph">
        <strong>Live multi-performer capture.</strong> Three public shows driven by four performers
        in <strong>Xsens</strong> suits capturing simultaneously, so multiple avatars could act
        together in real time. Facial animation ran live through <strong>Live Link Face</strong>
        driving morph targets on the characters.
    </div>

    <div class="paragraph">
        <strong>Capture hardware evaluation.</strong> We tested Xsens, Rokoko and Perception Neuron
        under live show conditions. Xsens proved the most stable under the constraints that actually
        matter on a show floor - occlusion, drift over a long run, and recovery after a dropout - and
        became our production standard.
    </div>

    <div class="paragraph">
        The operational reality of this work was the interesting part: a live show has no retakes.
        Every failure mode has to be anticipated, and anything that goes wrong has to be diagnosed
        and fixed while the show is running.
    </div>

    <div class="paragraph">
        <strong>Video production.</strong> Beyond live shows, I produced music videos and social
        media content featuring the avatars - scene assembly, lighting, Sequencer animation and
        final render-out in UE5.
    </div>

    <div class="paragraph">
    <div class="notice">
        More virtual production work on
        <a href="https://www.instagram.com/reel/CuV_VLoPBKY/" target="_blank">Instagram</a>.
    </div>
    </div>
    `, "#6b4a9f", true, true),

    new ProjectData("view-culling", "LOD & Frustum Culling",
    "img/projects/view-culling-icon.jpg",
    `
    <div class="paragraph">
        A solo C++/OpenGL project built to implement and visualise two standard real-time
        optimisation techniques: <strong>level of detail</strong> and <strong>frustum culling</strong>.
    </div>

    <div class="paragraph">
        The player is surrounded by a large number of entities. A debug overhead view renders the
        player's theoretical view frustum as red lines, so you can watch entities enter and leave
        the frustum and see exactly what is being culled and why. Both LOD and frustum culling can
        be toggled independently at runtime to compare their effect.
    </div>

    <div class="paragraph">
        Making the optimisation <em>visible</em> was the point - it turns an invisible performance
        win into something you can inspect and verify.
    </div>

    <div class="paragraph">
        The debug overlay reports live vertex count and frame rate, so the cost of each toggle is
        measurable on screen rather than inferred.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/view-culling-1.jpg" alt="View Culling screenshot" />
        <img class="pc-screenshot" src="img/projects/view-culling-2.jpg" alt="View Culling screenshot" />
    </div>
    `, "#3a7a7a"),

    new ProjectData("graphics-coursework", "Real-Time Graphics & Shaders",
    "https://fakeimg.pl/600x400/9f6b2d/ffffff?text=Graphics+%26+Shaders",
    `
    <div class="paragraph">
        Coursework from <strong>Introduction to Computer Graphics</strong> and
        <strong>Introduction to Real-Time Rendering</strong>, written in C++ with OpenGL and
        <strong>GLSL</strong>, covering the programmable graphics pipeline.
    </div>

    <!-- TODO: list the actual assignments - Phong/Blinn-Phong lighting? normal mapping? -->
    <!-- shadow mapping? deferred shading? texture mapping? post-processing? -->
    <!-- Screenshots of shader output are some of the easiest, highest-impact images -->
    <!-- you can put on this site. -->

    <div class="paragraph">
        Topics covered:
        <ul>
        <li>TODO - specific shader or rendering technique, and what was hard about it</li>
        <li>TODO</li>
        <li>TODO</li>
        </ul>
    </div>
    `, "#9f6b2d"),

    new ProjectData("multiplayer-asteroids", "Networked Multiplayer Asteroids",
    "https://fakeimg.pl/600x400/4a4a7a/ffffff?text=Multiplayer+Asteroids",
    `
    <div class="paragraph">
        A networked multiplayer implementation of Asteroids, built for the networking module.
        Multiple clients share a single authoritative game state over the network.
    </div>

    <!-- TODO: what network model? client-server with an authoritative host? -->
    <!-- How did you handle latency - client-side prediction, interpolation, -->
    <!-- dead reckoning? What broke first when you added lag? That story is gold. -->

    <div class="paragraph">
        Implementation:
        <ul>
        <li>TODO - network architecture and protocol</li>
        <li>TODO - how state was synchronised between clients</li>
        </ul>
    </div>
    `, "#4a4a7a"),

    new ProjectData("moba-sim", "MOBA Lane Simulator",
    "https://fakeimg.pl/600x400/7a5a2d/ffffff?text=MOBA+Lane+Sim",
    `
    <div class="paragraph">
        A simulation of a <strong>League of Legends</strong>-style lane, built for the
        <strong>Artificial Intelligence for Games</strong> module to study
        <strong>emergent behaviour</strong> in MOBA mechanics.
    </div>

    <div class="paragraph">
        Rather than scripting lane behaviour directly, agents follow simple individual rules -
        and recognisable MOBA dynamics fall out of the interaction between them. The interesting
        result is how much apparently strategic behaviour emerges from rules that contain no
        strategy at all.
    </div>

    <!-- TODO: what agent rules did you implement (minion aggro, last-hitting, -->
    <!-- tower aggro priority, wave equilibrium/freezing)? Which emergent behaviours -->
    <!-- actually appeared that you did not explicitly program? -->
    `, "#7a5a2d"),

    new ProjectData("inventory-system", "Equipment Inventory System",
    "https://fakeimg.pl/600x400/4a6a5a/ffffff?text=Inventory+System",
    `
    <div class="paragraph">
        A <strong>company-wide equipment inventory and deployment tracking system</strong>, built in
        <strong>Google Apps Script</strong> at So Drama! Entertainment.
    </div>

    <div class="paragraph">
        Audio-visual equipment was being tracked by hand, which does not survive contact with a
        touring production schedule - gear moves between events faster than a manual log can follow.
        I built the replacement on Google Apps Script specifically so that
        <strong>everyone in the company could access it</strong> without installing anything or
        being given new accounts: the tool met people where they already worked.
    </div>

    <div class="paragraph">
        Not a graphics project, but the one piece of software I wrote that had daily non-technical
        users - which turned out to be a very different engineering problem from writing an engine.
    </div>

    <!-- TODO: how many staff used it, how many items it tracked, how much time it saved. -->
    `, "#4a6a5a"),
]
