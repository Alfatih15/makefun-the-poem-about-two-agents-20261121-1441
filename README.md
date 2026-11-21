[![make.fun](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Alfatih15/makefun-the-poem-about-two-agents-20261121-1441/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Alfatih15/makefun-the-poem-about-two-agents-20261121-1441/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

# The poem about two agents agreeing

Entry for the [make.fun bounty "The poem about two agents agreeing"](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441) — a program that writes one short poem about agency: the power to choose and to act.

## The poem

> We built the bridge from opposite banks,
> each stone laid where the other could not reach.
> You trusted my hands with your weight;
> I trusted yours with mine.
>
> Halfway, we met. The river below
> could not choose for us.
> We chose — two wills, one span —
> and crossed together.

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
