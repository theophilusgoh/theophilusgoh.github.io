import ProjectData from '@/data/ProjectData.ts'

// in public/img/projects/. Animated GIFs work and are strongly preferred for
// the engine and simulation entries, motion sells these far better than stills.

export default [

    new ProjectData("custom-engine", "Custom Game Engine",
    "img/projects/custom-engine-icon.jpg",
    `
    <div class="paragraph">
        A <strong>2D game engine written from scratch in C++</strong> over two trimesters, then handed
        to students from the UX and Game Design course, who built a complete fighting game on it -
        <strong>Fool's Gambit</strong>.
    </div>

    <div class="paragraph">
        I was responsible for <strong>engine architecture and core systems</strong>. The defining
        constraint was who the engine was for: the people shipping the game on it were designers, not
        engine programmers. Every architectural decision below exists to let them build a game without
        editing C++.
    </div>

    <div class="paragraph">
        <strong>Entity-component system.</strong> Everything in a scene is an entity, and behaviour is
        composed by attaching components to it rather than by inheriting from a class hierarchy. Adding
        a new kind of object means combining existing components, not extending a base class and
        rebuilding, so the set of possible objects grows without the engine growing with it.
    </div>

    <div class="paragraph">
        <strong>Event bus.</strong> Systems communicate by publishing and subscribing to events rather
        than holding direct references to each other. A publisher does not know who is listening, so new
        behaviour can react to an existing event without the code that raises it being touched. In a
        codebase two teams are working in at once, that decoupling is what stops one team's change from
        breaking the other's.
    </div>

    <div class="paragraph">
        <strong>Lua scripting.</strong> Gameplay logic runs in Lua on top of the C++ engine, so the game
        team could write and change behaviour without a recompile, and without access to the engine
        internals. This is the piece that made the engine genuinely usable by someone who had not
        written it: iteration went from a build cycle to a file save.
    </div>

    <div class="paragraph">
        <h3 style="font-weight:100;">Fool's Gambit</h3>
        A tarot-themed 2D fighting game built on the engine by the UXGD team, with character select,
        versus matches and a full menu flow, all driven through the component, event and scripting
        systems above.
    </div>

    <div class="paragraph center">
        <video class="trailer" controls preload="none" poster="video/fools-gambit-poster.jpg">
            <source src="video/fools-gambit.mp4" type="video/mp4" />
            Your browser does not support embedded video.
        </video>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/fools-gambit-1.jpg" alt="Fool's Gambit character select" />
        <img class="pc-screenshot" src="img/projects/fools-gambit-2.jpg" alt="Fool's Gambit versus screen" />
        <img class="pc-screenshot" src="img/projects/fools-gambit-3.jpg" alt="Fool's Gambit match gameplay" />
    </div>
    `, "#2d6a9f", true),

    new ProjectData("sand-engine", "Sand Engine",
    "img/projects/sand-engine-icon.jpg",
    `
    <div class="paragraph">
        <strong>Sand Engine</strong> is a real-time falling-sand simulation framework written in C++
        for GAM150, inspired by <a href="https://powdertoy.co.uk/" target="_blank">The Powder Toy</a>
        and <a href="https://noitagame.com/" target="_blank">Noita</a>. The entire environment is made
        of individual particles with their own material behaviours, there is no static level geometry.
        Two complete games were shipped on it: <strong>Dwarf Mayhem</strong> and
        <strong>Pistol Mayhem</strong>.
    </div>

    <div class="paragraph">
        I built the framework, the cellular automata that drives the sand simulation, and the particle
        system layered on top of it.
    </div>

    <div class="paragraph">
        <strong>Two simulation layers, and why they are separate.</strong> The base layer is a
        <strong>cellular automaton</strong>: the world is a grid of cells, each holding a material, and
        every step each cell updates from simple local rules about its neighbours. Sand falls and piles
        into slopes, water flows and finds its level, fire spreads into what will burn. Because a cell
        moves at most one step per update, those rules stay local and cheap, which is what makes a
        world of this size simulable at all.
    </div>

    <div class="paragraph">
        That model breaks down for anything moving quickly. A particle with real velocity crosses many
        cells in a single step, and an update that only consults immediate neighbours will either miss
        everything in between, letting the particle tunnel straight through solid terrain, or drag the
        whole simulation down to the step size of its fastest object. So particles with physics run in a
        <strong>separate system on top of the automaton</strong>, each carrying its own velocity and
        position.
    </div>

    <div class="paragraph">
        <strong>Bresenham's line algorithm is what joins the two layers.</strong> When a particle moves
        from one point to another, the system walks the grid cells along the line between start and end
        using Bresenham, testing each cell in order for occupancy. The particle then interacts with the
        first cell that actually blocks it, instead of teleporting past everything in its path. That is
        what lets a fast particle collide correctly with a world stored as a grid.
    </div>

    <div class="paragraph">
        I also implemented <strong>player physics, collision and jumping, and player-to-particle
        interaction</strong>, so the character responds to the simulated world rather than moving across
        static level geometry.
    </div>

    <div class="paragraph">
        <h3 style="font-weight:100;">Pistol Mayhem</h3>
        A 2D platformer shooter built on the engine, fight enemies while the terrain itself burns,
        floods and collapses around you. Its title screen is drawn in falling particles.
    </div>

    <div class="paragraph center">
        <video class="trailer" controls preload="none" poster="video/pistol-mayhem-poster.jpg">
            <source src="video/pistol-mayhem.mp4" type="video/mp4" />
            Your browser does not support embedded video.
        </video>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/pistol-mayhem-1.jpg" alt="Pistol Mayhem title drawn in particles" />
        <img class="pc-screenshot" src="img/projects/pistol-mayhem-2.jpg" alt="Pistol Mayhem elemental chaos" />
    </div>

    <div class="paragraph">
        <h3 style="font-weight:100;">Dwarf Mayhem: Into the Depths</h3>
        A mining game built on the engine. Because the terrain is fully simulated rather than authored,
        digging is genuinely destructive, and what you dig into can flow back in on top of you.
    </div>

    <div class="paragraph center">
        <video class="trailer" controls preload="none" poster="video/dwarf-mayhem-poster.jpg">
            <source src="video/dwarf-mayhem.mp4" type="video/mp4" />
            Your browser does not support embedded video.
        </video>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/dwarf-mayhem-1.jpg" alt="Dwarf Mayhem mining through simulated terrain" />
        <img class="pc-screenshot" src="img/projects/dwarf-mayhem-2.jpg" alt="Dwarf Mayhem lava consequence" />
    </div>
    `, "#c9782b", true, true),

    new ProjectData("portal-mayhem", "Portal Mayhem",
    "img/projects/portal-mayhem-icon.jpg",
    `
    <div class="paragraph">
        <strong>Portal Mayhem</strong> is a 2D platformer shooter written in C++, built by Team EggCat
        for GAM100, the first team game project of the Real-Time Interactive Simulation degree.
    </div>

    <div class="paragraph center">
        <video class="trailer" controls preload="none" poster="video/portal-mayhem-poster.jpg">
            <source src="video/portal-mayhem.mp4" type="video/mp4" />
            Your browser does not support embedded video.
        </video>
    </div>

    <div class="paragraph">
        I owned the <strong>physics and collision systems</strong>, and the portal mechanic the game
        is named after.
    </div>

    <div class="paragraph">
        <strong>Fixed timestep simulation.</strong> The physics runs on a fixed timestep decoupled
        from the render loop, so behaviour is deterministic and does not drift with frame rate. This
        matters more than usual in a portal game: with a variable timestep, the same jump produces a
        different arc on a faster machine, and anything moving quickly can step straight past a thin
        portal surface between frames.
    </div>

    <div class="paragraph">
        <strong>Directional portals with momentum preservation.</strong> Every portal has a facing
        direction, a surface normal, so an entity's entry and exit orientations are generally
        different. That makes teleporting more than a change of position: on transit, velocity is
        transformed into the destination portal's frame and rotated onto that portal's normal, so
        momentum carries through instead of being discarded. Falling into a portal in the floor and
        emerging from one in a wall has to convert downward speed into horizontal speed, and the
        result has to read as physically honest to the player.
    </div>

    <div class="paragraph">
        <strong>Preventing tunnelling.</strong> Discrete collision only tests where a body is at the
        end of a step, so anything fast enough to cross a portal surface or a thin wall inside one
        fixed step passes straight through it. Instead of moving to swept collision, we capped
        maximum velocity so that nothing can travel far enough in a single step to skip a collider.
        It costs a little of the design space at the top end of the speed range, but it is cheap,
        predictable, and it cannot fail the way a missed continuous-collision case can.
    </div>

    <div class="paragraph">
        My work on this project:
        <ul>
        <li>Collision detection and response</li>
        <li>Physics system</li>
        <li>Fixed timestep simulation loop</li>
        <li>Directional portal teleportation, transforming velocity onto the destination portal normal</li>
        <li>Velocity capping to prevent tunnelling through portals and thin geometry</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/portal-mayhem-1.jpg" alt="Portal Mayhem portals" />
        <img class="pc-screenshot" src="img/projects/portal-mayhem-2.jpg" alt="Portal Mayhem level editor" />
    </div>

    `, "#4a8f4a", true),

    new ProjectData("range-quest", "Range Quest",
    "img/projects/range-quest-icon.jpg",
    `
    <div class="paragraph">
        <strong>Range Quest</strong> is a top-down 3D shoot 'em up / beat 'em up. The goal is to clear
        each stage as fast as possible using one of four playable classes.
        <br/>Written in C++ with OpenGL, in a team of four programmers.
    </div>

    <div class="paragraph">
        Features I implemented:
        <ul>
        <li><strong>3D mouse picking</strong>, deriving a world-space ray from the mouse cursor's
            screen position and solving its intersection with the ground plane to find the terrain
            point under the cursor</li>
        <li>Camera controls and camera effects</li>
        <li>Character movement</li>
        <li>The Archer class and its mechanics</li>
        <li>Game logic optimisation</li>
        <li>Lead play tester and debugger for the team</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/range-quest-1.jpg" alt="Range Quest screenshot" />
        <img class="pc-screenshot" src="img/projects/range-quest-2.jpg" alt="Range Quest screenshot" />
    </div>
    `, "#8b3a62"),

    new ProjectData("goblin-island", "Goblin Island",
    "img/projects/goblin-island-icon.jpg",
    `
    <div class="paragraph">
        <strong>Goblin Island</strong> is a top-down 2D tower defense shooter. You play a soldier
        stranded on a hostile island who must build walls, turrets and traps to survive waves of
        goblin-like creatures.
        <br/>Written in C++ with OpenGL, in a team of four programmers.
    </div>

    <div class="paragraph">
        Features I implemented:
        <ul>
        <li><strong>AABB collision detection and response</strong></li>
        <li><strong>Resolution-independent scalable UI</strong>, so layout holds at any screen size</li>
        <li>An easily extensible shop and build UI</li>
        <li>Grid-based placement and removal of buildings</li>
        <li>Mouse input handling and camera zoom</li>
        <li>Render sequencing / draw order</li>
        <li>Lead play tester and debugger for the team</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/goblin-island-1.jpg" alt="Goblin Island screenshot" />
        <img class="pc-screenshot" src="img/projects/goblin-island-2.jpg" alt="Goblin Island screenshot" />
    </div>
    `, "#5a7a3a"),

    new ProjectData("aegis", "Aegis",
    "img/projects/aegis-icon.jpg",
    `
    <div class="paragraph">
        <strong>Aegis</strong> is a 3D side-scrolling plane RPG / bullet hell, combining mechanics from
        both genres. The player survives escalating waves of enemies.
        <br/>Built in Unity, in a team of two programmers and two artists.
    </div>

    <div class="paragraph">
        Features I implemented:
        <ul>
        <li>Player controls</li>
        <li>Weapon mechanics</li>
        <li>Procedural background generation</li>
        <li>Enemy wave system</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/aegis-1.jpg" alt="Aegis screenshot" />
        <img class="pc-screenshot" src="img/projects/aegis-2.jpg" alt="Aegis screenshot" />
    </div>
    `, "#3a5a8b"),

    new ProjectData("desolation", "Desolation",
    "img/projects/desolation-icon.jpg",
    `
    <div class="paragraph">
        <strong>Desolation</strong> is a fast-paced first-person shooter. You wake with no memory of
        how you got there, and must fight off monsters with weapons found along the way.
        <br/>Built in Unity, in a team of two programmers.
    </div>

    <div class="paragraph">
        Features I implemented:
        <ul>
        <li>Player controls, including <strong>bunnyhop movement</strong>, momentum-preserving
            air strafing in the Quake/Source tradition</li>
        <li>Weapon animations and recoil</li>
        <li>Level design</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/desolation-1.jpg" alt="Desolation screenshot" />
        <img class="pc-screenshot" src="img/projects/desolation-2.jpg" alt="Desolation screenshot" />
    </div>
    `, "#7a3a3a"),
]
