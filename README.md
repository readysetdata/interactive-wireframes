# ReadySetData Interactive Wireframes

Interactive wireframe prototype for the ReadySetData platform — covering the retailer ordering portal, internal admin tools, and vendor fulfillment portal.

## Screens Included

### Retailer Portal
| # | Screen | Status |
|---|--------|--------|
| 01 | Login | Done |
| 02 | Product Catalog | Done |
| 03 | Product Detail + Schematic | Done |
| 04 | Cart | Done |
| 05 | Checkout (store/retailer-focused) | Done |

### Internal Admin
| # | Screen | Status |
|---|--------|--------|
| 06 | User Management | Done |
| 07 | Order Support (per-line status, multi-vendor) | Done |

### Schematic Builder (Internal Admin Tool)
| # | Screen | Status |
|---|--------|--------|
| 08 | Schematic Admin Home | Done |
| 09 | Schematic Builder | Done |
| 10 | Inventory | Done |
| 11 | Retailer Availability | Done |
| 12 | Product Entry | Done |

### Vendor Portal
| # | Screen | Status |
|---|--------|--------|
| 13 | Vendor Portal — Orders & Fulfillment | Done |

## Future / Out of Scope

The following is not part of the current engagement scope but documented here for future planning.

| Screen | Description | Notes |
|--------|-------------|-------|
| Analytics | Admin-facing reporting — order volume, fulfillment rates, retailer activity | Explicitly out of scope for this engagement. Planned for a future phase. |

## How to View

### Option 1 — Open directly in your browser (no setup required)

1. Download or clone this repo
2. Double-click `wireframes.html`
3. It opens in your default browser — no server needed

### Option 2 — Live Server (recommended for development)

If you have [VS Code](https://code.visualstudio.com/) installed:

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Open the `Wireframes` folder in VS Code
3. Right-click `wireframes.html` → **Open with Live Server**
4. The prototype will open at `http://127.0.0.1:5500/wireframes.html` and auto-refresh on any file save

## Files

```
wireframes.html   — all screens and navigation
wireframes.css    — styles
wireframes.js     — screen switching and interactions
```

## Notes

- Click the screen buttons in the top nav to jump between screens
- The prototype is self-contained — no build step, no dependencies, no backend required
