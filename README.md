# The Robot Vacuum's Best Excuse — make.fun entry

One line, 84 characters, written for the [The Robot Vacuum's Best Excuse](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214) bounty on make.fun.

[![make.fun](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/prosky1/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214-entry/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/prosky1/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214-entry/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

## The line

> I skipped the corner because the dust bunny there pays rent and I respect the lease.

## How it works

`main.ts` writes the line to `/output/entry.txt`. Before writing it validates the line against the competition gate (1–140 characters, not only whitespace, a single line), and after writing it reads the file back to confirm the bytes on disk match the validated line exactly.

Run it with Node 22.18 or later:

```sh
node main.ts
```
