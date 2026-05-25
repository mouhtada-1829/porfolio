# Theme Refresh — Dark & Vibrant Palette

## Background

User chose Option C (static gradient + noise texture) as the background but found the
overall site too dark and unappealing. Direction: keep dark theme but make colors
**more saturated and vibrant**, with amber/gold accents complementing the existing
purple palette.

## Color Palette

| Variable | Current | New |
|---|---|---|
| `--primary-color` | `#8b5cf6` | `#7c3aed` |
| `--primary-light` | `#a78bfa` | `#c084fc` |
| `--amber` | — | `#f59e0b` |
| `--amber-light` | — | `#fbbf24` |
| `--accent-glow` | `rgba(139,92,246,0.3)` | `rgba(124,58,237,0.5)` |
| `--surface-color` | `#1a1e3a` | `#1e2248` |
| `--surface-hover` | `#22284a` | `#282e54` |

Additional: increase glow intensity across all components.

## Background (Option C — Enhanced)

- Keep gradient + noise structure
- Make gradients more saturated: stronger purple presence, add amber hints
- Increase noise contrast slightly
- Add very slow animated "breathing" via CSS (20s cycle, barely perceptible)

## Component Changes

### Cards (Projects, Skills, Experience)
- Border on hover: `1px solid linear-gradient(135deg, purple, amber)`
- Hover glow: stronger, wider radius

### Tags / Badges
- Tech tags in projects: add amber variant alongside cyan
- Section badges: stronger glow on hover

### Skill Bars
- Gradient fill more saturated: `var(--primary-color)` → `var(--amber)`
- Hover glow more visible

### Timeline
- Markers: stronger glow
- Timeline gradient: purple → amber instead of purple → cyan

### Buttons / Links
- Box-shadow glows more pronounced
- Hover transforms preserved

### Contact Form
- Focus ring color: use amber alongside purple
- Input border glow more visible

## Files to Modify

1. `src/styles/variables.css` — color palette
2. `src/components/CursorGlow/CursorGlow.css` — Option C background enhanced
3. `src/components/Projects/Projects.css` — card hover, tags
4. `src/components/Skills/Skills.css` — skill bars, category cards
5. `src/components/Experience/Experience.css` — timeline, cards
6. `src/components/Hero/Hero.css` — badges, buttons
7. `src/components/About/About.css` — stat items
8. `src/components/Contact/Contact.css` — form focus, info cards
9. `src/components/Navbar/Navbar.css` — link underline, button
10. `src/App.css` — footer, scroll-top, scrollbar
