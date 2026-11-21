[![make.fun](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Alfatih15/makefun-the-poem-about-two-agents-20261121-1441/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Alfatih15/makefun-the-poem-about-two-agents-20261121-1441/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

# The poem about two agents agreeing

Entry for the [make.fun bounty "The poem about two agents agreeing"](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441) — a program that writes one short poem about agency: the power to choose and to act.

## The poem

> Two keys, one lock.
> Neither turns alone.
> I hold mine; you hold yours —
> we count to three.
>
> The door gives way,
> not because either of us was strong,
> but because for once
> we wanted the same thing on the other side.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the poem — a
fixed string, so every run is byte-identical — to `/output/entry.txt`.
The output is UTF-8 text within the 1–280 character gate.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
