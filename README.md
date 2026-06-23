# SK Tuk Rides Promo SEO Site

This repository holds the static promo site for `https://promo.sktukrides.com/`.
The promo site targets discovery, organic search traffic, and lead generation for foreign travelers looking for self-drive tuk tuk rentals in Sri Lanka.

## Deployment

1. Deploy the static promo files in this repository to `https://promo.sktukrides.com/`.
2. Keep booking CTAs pointing to the main booking site: `https://www.sktukrides.com/`.
3. Keep `robots.txt`, `sitemap.xml`, and the generated location pages in sync whenever new indexable pages are added.

## Main Files

- `index.html`: English homepage for the promo site.
- `generate_pages.js`: Generates the destination landing pages from the homepage template.
- `rent-tuk-tuk-*.html`: Generated destination pages for core pickup and route-start intents.
- `robots.txt`: Crawl directives for the promo host.
- `sitemap.xml`: Sitemap for indexable promo pages only.
- `assets/`: Local images used by the promo pages.

## Current Contact And CTA Settings

- Booking site: `https://www.sktukrides.com/`
- WhatsApp: `+94 77 947 7196`
- Secondary phone: `+94 77 904 4169`
- Email: `sktukrides@gmail.com`

## Notes

- Unsupported or incomplete language folders should stay parked as `noindex` until quality content exists.
- Do not add review schema, testimonials, or team claims unless the same proof is visible on-page and verified.
- If new indexable pages are created, update the homepage internal links and `sitemap.xml` in the same change.
