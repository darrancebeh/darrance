# Company logos

Wired up in `workedWith` in `src/content/profile.ts`.

| File | Source | Height |
| --- | --- | --- |
| `pwc.png` | 1000×759 RGBA, full-colour lockup | 45 |
| `citi.svg` | vector, `viewBox="0 0 56 33"` | 31 |
| `loreal.png` | 288×52 RGBA, cropped wordmark | 22 |

## Why the heights all differ

They are set for equal *optical* weight, not equal pixel height. PwC is a
stacked lockup where the wordmark is only about half the image; L'Oréal is a
bare wordmark that is all cap-height. Rendering all three at the same height
makes PwC look tiny and L'Oréal look enormous.

If you swap a file, re-tune its `height` by eye rather than reusing the old
number.

## Fixes already applied

- `loreal.png` arrived 320×320 with the wordmark occupying only 52px in the
  middle — roughly three-quarters empty padding. Cropped to its content box,
  otherwise `height: 22` would have rendered a ~4px wordmark.
- `citi.svg` had `width="100%" height="100%"`, which gives an `<img>` no
  reliable intrinsic size. Set to the viewBox dimensions.

## The PwC colour caveat

All three render forced to white (`brightness(0) invert`). For PwC this flattens
the orange/red/yellow mosaic to a solid white shape.

Full colour is not an option with the current file: the "pwc" wordmark is black
and would be invisible against the near-black background. To keep the mosaic in
colour you need the official white/reversed lockup from PwC's brand centre —
one where the wordmark itself is white. Drop that in, set `mono: false` on the
entry, and check it against the background.
