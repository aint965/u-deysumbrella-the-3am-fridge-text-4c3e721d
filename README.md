# The 3AM Fridge Text

[![make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/competitions/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/aint965/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/competitions/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/aint965/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/competitions/u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the make.fun competition **The 3AM Fridge Text**
(`u-deysumbrella-the-3am-fridge-text-4c3e721d`).

## What it does

`main.ts` is a small, dependency-free Node 22 TypeScript program. It writes
one single line of text — the message a smart fridge sends its owner at 3am —
to `/output/entry.txt`. The line is a fixed string, so every run writes
byte-identical output.

## The line

> It's 3am. You ate the last slice of cake standing in the dark like it doesn't count if no one sees it. I keep the receipts. Cold.

129 characters, one line. The fridge is not warning about milk or a door left
open — it is a witness. It watched the owner eat the last slice of cake
standing in the dark, pretending it doesn't count if nobody sees it, and it
keeps the receipts. Cold.

## How to run

```sh
node main.ts
```

This writes `/output/entry.txt`. To write somewhere else instead, set
`OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
