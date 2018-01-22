AI Planning with STRIPS
--------

This  is a demo of using the artificial intelligence planning library [strips](https://www.npmjs.com/package/strips), in node.js.

Requirements for use strips

-Node.js
-npm

From your console go to the project source folder.
Install all the dependencies with the command:


npm install strips


The following examples show how to solve planning problems by identifying the optimal set of actions to achieve a goal. For example, stacking blocks, and even [Starcraft] can be solved by the AI (see below, it's pretty neat!).

Several examples from the [Blocks World](http://en.wikipedia.org/wiki/Blocks_world) domain are included in this demo, in which the AI is able to successfully plan the series of steps to move and stack blocks on a series of tables.

The AI planning works by processing a simple [domain] using a PEG.js grammar sheet and runs the result using a simple STRIPS [problem]

The domain and problem PDDL files are parsed via PEG.js, producing a JSON [object] for a given domain. The JSON is then processed to identify applicable actions within a given state of the problem. The actions are then applied to the current state, producing a new set of states. This process is repeated, where applicable actions are identified for the new states, applied, and further new states produced. The resulting tree of possible states and actions may then be traversed using the A* algorithm to locate an optimal set of steps to achieve the goal state, as specified in the problem.

## Example Flow of Program

- Start with initial state.
- Identify valid actions for the current state.
- Apply actions on current state to produce child states.
- Repeat until goal state is found.

## Example Blocks World Problems

[Domain](.\examples\blocksworld1\domain.txt) | 
[Problem](.\examples\blocksworld1\problem.txt)
Move blocks a, b from table x to table y. Multiple blocks are permitted on a table. The only available action is "move".

[Domain](.\examples\blocksworld2\domain.txt) | 
[Problem](.\examples\blocksworld2\problem.txt)
Moves blocks a, b from table x to a stack ab on table y. Multiple blocks are permitted on a table. Available actions include "move", "stack", and "unstack".

[Domain](.\examples\blocksworld2\domain.txt) | 
[Problem](.\examples\blocksworld2\proble2.txt)
Unstacks blocks ba from table x to a stack ab on table y. Multiple blocks are permitted on a table. Available actions include "move", "stack", and "unstack".

[Domain](.\examples\blocksworld3\domain.txt) | 
[Problem](.\examples\blocksworld3\problem.txt)
The fun one! Unstack blocks ba from table 1 to a stack ab on table 3. Only one block or stack is permitted on a table. The AI needs to plan for moving a block temporarily to table 2, while it sets up the correct order for stacking on table 3. Available actions include "move", "stack", and "unstack".

## Example Output from Blocks World Problem #3

[Blocks] are stacked ab on table 1. The [goal] is to stack them ab on table 2. Only one block or stack is permitted per table. Here are the solutions.

```
*** Solution found in 6 steps!
1. unstack a b t1 t2
2. move b t1 t3
3. move a t2 t1
4. move b t3 t2
5. move a t1 t3
6. stack a t3 b t2
*** Solution found in 5 steps!
1. unstack a b t1 t2
2. move b t1 t3
3. move a t2 t1
4. move b t3 t2
5. stack a t1 b t2
*** Solution found in 5 steps!
1. unstack a b t1 t2
2. move a t2 t3
3. move b t1 t2
4. move a t3 t1
5. stack a t1 b t2
*** Solution found in 4 steps!
1. unstack a b t1 t2
2. move a t2 t3
3. move b t1 t2
4. stack a t3 b t2
*** Solution found in 4 steps!
1. unstack a b t1 t3
2. move b t1 t2
3. move a t3 t1
4. stack a t1 b t2
*** Solution found in 3 steps!
1. unstack a b t1 t3
2. move b t1 t2
3. stack a t3 b t2
```

## Sussman Anomaly Solution

Here is the AI's [solution] for the Blocks World [Sussman Anomaly]

```
*** Solution found in 3 steps!
1. unstack2 c a x
2. stack2 b c x
3. stack3 a b c x
```

## Starcraft!

Now, for some fun. Here is the Starcraft [domain] .\examples\starcraft\domain.txt). The task was to build a [barracks](.\examples\barracks.txt). Originally wanted to build a Battlecruiser, but that was taking way too long.

![Collect Minerals 1](.\examples\starcraft\domain.txt\minerals.jpg)
![Supply Depot](.\examples\starcraft\domain.txt\supply-depot.jpg)
![Collect Minerals 2](.\examples\starcraft\domain.txt\minerals.jpg)
![Barracks](.\examples\starcraft\domain.txt\barracks.jpg)

```
*** Solution found in 8 steps!
1. move scv sector-a mineral-field-b
2. collect-minerals scv mineral-field-b
3. move scv mineral-field-b sector-b
4. build-supply-depot scv sector-b
5. move scv sector-b mineral-field-a
6. collect-minerals scv mineral-field-a
7. move scv mineral-field-a sector-a
8. build-barracks scv sector-a sector-b
```

License
----

MIT

Author
----
Kory Becker
http://www.primaryobjects.com/kory-becker
