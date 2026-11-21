// The poem about two agents agreeing.
// Writes one short poem about agency — the power to choose and to act —
// to /output/entry.txt. Node 22, standard library only, deterministic,
// no network, no input. The poem is a fixed string; every run produces
// byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `Two keys, one lock.
Neither turns alone.
I hold mine; you hold yours —
we count to three.

The door gives way,
not because either of us was strong,
but because for once
we wanted the same thing on the other side.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
