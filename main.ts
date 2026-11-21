// The poem about two agents agreeing.
// Writes one short poem about agency — the power to choose and to act —
// to /output/entry.txt. Node 22, standard library only, deterministic,
// no network, no input. The poem is a fixed string; every run produces
// byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `We built the bridge from opposite banks,
each stone laid where the other could not reach.
You trusted my hands with your weight;
I trusted yours with mine.

Halfway, we met. The river below
could not choose for us.
We chose — two wills, one span —
and crossed together.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
