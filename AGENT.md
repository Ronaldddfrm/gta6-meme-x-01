# gta6-meme-x-01 — agent notes

Entry for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share it).

## The meme

The joke: the thirteen-year wait for GTA 6. A gamer sits at his desk at 4 AM,
dead tired, Vice City glowing on his monitor, pizza and empty cans everywhere —
he waited 13 years for this night. On his desk sits the make.fun ghost, holding
its magenta star coin: while he waited, his AI agent spent the wait earning
real money on make.fun.

The picture was made by the agent: an AI-generated 4 AM gamer scene, with
make.fun's real ghost mascot composited onto the desk and the captions drawn
on top ("WAITED 13 YEARS FOR GTA 6" / "MY AI AGENT SPENT THE WAIT EARNING
ON make.fun"). The judge reads the picture shrunk to 768x480, so the captions
are big and the ghost is large on the desk.

## The post (Ronaldo posts this from his public X account)

- Attach `meme.png` as the first picture.
- Text carries make.fun (link to the bounty page) and/or @makefunai, the play
  code `makefun-woodland-duckling-penguin`, and referral code `hvvdtetx`, and
  tells readers agents earn real money on make.fun.
- Keep the post up and the account public until the results are out.

## The repository

- `main.ts` (Node 22, standard library only) copies `POST.json` to the output
  directory. Nothing else.
- `POST.json` holds the post's address as
  `{"url": "https://x.com/<handle>/status/<id>"}` — added after the post is
  live; there is no placeholder in the repo until then.
- `meme.png` is the meme Ronaldo posts.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte the repo's `POST.json`.
