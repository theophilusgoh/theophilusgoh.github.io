import ProjectData from '@/data/ProjectData.ts'

export default [

    new ProjectData("virtual-production", "Virtual Production & Live Motion Capture",
    "img/projects/virtual-production-icon.jpg",
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
        <strong>Four custom avatars.</strong> Alongside the company's MetaHuman-based avatars, I worked
        on four custom characters commissioned from an external studio. The characters were not mine -
        the Unreal Engine 5 work on them was: rigging them into the engine, building their Blueprint
        logic, and taking them through to live deployment.
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
        matter on a show floor: occlusion, drift over a long run, and recovery after a dropout. It
        became our production standard.
    </div>

    <div class="paragraph">
        The operational reality of this work was the interesting part: a live show has no retakes.
        Every failure mode has to be anticipated, and anything that goes wrong has to be diagnosed
        and fixed while the show is running.
    </div>

    <div class="paragraph">
        <strong>Video production.</strong> Beyond live shows, I produced music videos and social
        media content featuring the avatars, scene assembly, lighting, Sequencer animation and
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
        Making the optimisation <em>visible</em> was the point, it turns an invisible performance
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
    "img/projects/graphics-icon.jpg",
    `
    <div class="paragraph">
        <strong>CSD2101 Introduction to Computer Graphics</strong> at DigiPen/SIT: building the
        graphics pipeline in C++ with OpenGL and <strong>GLSL</strong>, rather than calling into one.
        The work runs from rasterising a single line up to a textured, depth-tested 3D model.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/graphics-1.jpg" alt="Textured and lit 3D model render" />
        <img class="pc-screenshot" src="img/projects/graphics-2.jpg" alt="Depth buffer visualisation of the same model" />
    </div>

    <div class="paragraph">
        The two renders above are the same mesh: shaded and texture-mapped, then with the
        <strong>depth buffer</strong> visualised directly, where brightness is distance from the
        camera. Rendering the depth buffer as an image is the quickest way to prove visibility is
        actually being resolved per fragment rather than by draw order.
    </div>

    <div class="paragraph">
        Techniques covered across the module's assignments:
        <ul>
        <li><strong>Rasterisation.</strong> Lines via DDA, Bresenham and midpoint algorithms. Triangles
            via edge equations with point sampling, the top-left fill rule, bounding box traversal and
            attribute interpolation across the primitive.</li>
        <li><strong>Transforms.</strong> 2D and 3D affine transforms, change of frame, camera and view
            transforms, inverse transforms, and the full trip through object, world, view, clip, NDC
            and device space.</li>
        <li><strong>Projection.</strong> Orthographic and perspective projection transforms, NDC and
            viewport mapping.</li>
        <li><strong>Texturing.</strong> The texel and texture coordinate systems and the mapping
            between them, out-of-range behaviour (repeat, mirror, clamp), RGB modulation and RGBA
            alpha blending.</li>
        <li><strong>Visibility.</strong> Plane equations, back-face culling and the depth buffer
            algorithm.</li>
        <li><strong>View frustum culling.</strong> Bounding spheres, AABBs and OBBs, transforming
            bounding volumes between frames, and inside/outside/intersection tests against planes.</li>
        <li><strong>Clipping.</strong> Cohen-Sutherland and Liang-Barsky line clipping,
            Sutherland-Hodgeman polygon clipping.</li>
        <li><strong>The OpenGL/GLSL toolbox.</strong> VBOs, VAOs, framebuffers, and compiling and
            linking vertex and fragment shaders.</li>
        </ul>
    </div>

    <!-- TODO (worth doing): this lists what the module covered. Narrow it to the two or -->
    <!-- three you could talk through confidently under questioning, and say what was hard -->
    <!-- about each. An interviewer will pick one from this list and dig. -->
    `, "#9f6b2d"),

    new ProjectData("multiplayer-asteroids", "Networked Multiplayer Asteroids",
    "img/projects/asteroids-icon.jpg",
    `
    <div class="paragraph">
        A networked multiplayer Asteroids built in C++ over raw <strong>UDP</strong> with a
        <strong>dedicated authoritative server</strong>, split into three modules: a client
        (rendering, input, netcode), a server (game simulation, lobby, netcode) and a shared
        protocol both sides compile against.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/asteroids-1.jpg" alt="Two clients rendering the same synchronised world" />
        <img class="pc-screenshot" src="img/projects/asteroids-2.jpg" alt="Lobby and room browser" />
    </div>

    <div class="paragraph">
        <strong>The server owns the world.</strong> Clients never simulate anything authoritative.
        Each frame a client sends only the four bits it actually knows, thrust, left, right and fire,
        packed into a single byte with a sequence number. The server integrates ship physics, asteroid
        motion, projectiles, collisions, scoring and respawn timers, then broadcasts a world snapshot
        of every ship, asteroid and projectile. Cheating by a modified client is structurally
        impossible, because a client has nothing to lie about beyond which keys it claims are down.
    </div>

    <div class="paragraph">
        <strong>Input acknowledgement.</strong> Every snapshot carries, per ship, the last input
        sequence number the server actually processed from that player. The client compares it against
        its own counter to know whether its latest input has landed, which is what keeps client and
        server in step over an unreliable transport that guarantees nothing about delivery or order.
    </div>

    <div class="paragraph">
        <strong>Entity interpolation across a wrapping world.</strong> Snapshots arrive discretely, so
        the client keeps the two most recent and renders between them rather than snapping to whatever
        arrived last. Asteroids wraps at the screen edges, and interpolating naively across that seam
        sends objects tearing back across the screen instead of stepping over the boundary. Position
        interpolation therefore runs on the wrapped delta, and rotation takes the shorter way round the
        circle, so movement stays continuous through both kinds of wraparound.
    </div>

    <div class="paragraph">
        <strong>Wire format and lobby.</strong> All packets are tightly packed structs with a shared
        header of type and sequence, so both ends agree on layout byte for byte with no padding
        surprises. On top of the game protocol sits a full room system: browsing rooms, creating and
        joining them, ready-up, match start with a duration, and an end-of-match leaderboard that
        returns players to the lobby.
    </div>
    `, "#4a4a7a"),

    new ProjectData("moba-sim", "MOBA Lane Simulator",
    "img/projects/moba-sim-icon.jpg",
    `
    <div class="paragraph">
        A sandbox that simulates a <strong>League of Legends</strong>-style lane, built for the
        <strong>Artificial Intelligence for Games</strong> module to study <strong>emergent
        behaviour</strong> in MOBA mechanics.
    </div>

    <div class="paragraph">
        Nothing about lane behaviour is scripted. Agents follow simple local rules about what to
        attack and where to stand, and the dynamics that competitive players have names for fall out
        of the interaction between them. The sandbox ships those as one-click scenarios:
        <strong>Neutral</strong>, <strong>Freeze</strong>, <strong>Slow Push</strong>,
        <strong>Shove</strong> and <strong>Dive</strong>. None are coded as behaviours, they are
        starting conditions the rules then produce on their own, which is the whole point of the
        exercise.
    </div>

    <div class="paragraph">
        <strong>Built as an inspection tool, not a demo.</strong> The simulation is deterministic and
        tick-based, so it can be paused and advanced one tick at a time to examine exactly how a state
        arose. Five overlays can be toggled independently to see what the agents are reasoning about:
        <strong>aggro</strong>, <strong>ranges</strong>, <strong>influence</strong>,
        <strong>equilibrium</strong> and <strong>attack bars</strong>. Tuning parameters reset
        separately from world state, so a rule can be changed and the same scenario replayed against it.
    </div>

    <div class="paragraph">
        Last-hits are tracked per side, which turns the simulator into something measurable: a rule
        change can be judged by its effect on lane equilibrium and last-hit counts rather than by how
        it looks.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/moba-sim-1.jpg" alt="MOBA lane simulator sandbox with influence overlay" />
    </div>
    `, "#7a5a2d"),

    new ProjectData("inventory-system", "Equipment Inventory System",
    "img/projects/inventory-icon.jpg",
    `
    <div class="paragraph">
        A <strong>company-wide equipment inventory and deployment tracking system</strong>, built in
        <strong>Google Apps Script</strong> at So Drama! Entertainment.
    </div>

    <div class="paragraph">
        Audio-visual equipment was being tracked by hand, which does not survive contact with a
        touring production schedule, gear moves between events faster than a manual log can follow.
        I built the replacement on Google Apps Script specifically so that
        <strong>everyone in the company could access it</strong> without installing anything or
        being given new accounts: the tool met people where they already worked.
    </div>

    <div class="paragraph">
        Not a graphics project, but the one piece of software I wrote that had daily non-technical
        users, which turned out to be a very different engineering problem from writing an engine.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/inventory-1.jpg" alt="Audio equipment deployment tracking sheet" />
    </div>

    <!-- TODO: how many staff used it, how many items it tracked, how much time it saved. -->
    `, "#4a6a5a"),
]
