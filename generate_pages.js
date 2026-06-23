const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');

const cities = [
    {
        slug: 'negombo',
        name: 'Negombo',
        lat: 7.2081,
        lng: 79.8360,
        desc: 'Start your Sri Lanka adventure from Negombo - the closest Tuk Tuk rental to Bandaranaike International Airport.',
        keywords: 'rent tuk tuk negombo, tuk tuk rental negombo sri lanka, negombo tuk tuk hire, self drive tuk tuk negombo, tuk tuk near colombo airport, sri lanka airport tuk tuk rental, negombo 3 wheeler hire, rent a tuk tuk sri lanka, tuk tuk rental price sri lanka, aac driving permit sri lanka',
        ogDescription: 'Start your Sri Lanka adventure in Negombo! The closest tuk tuk rental to the airport. Full training, insurance, and AAC driving permit included.',
        locationContent: `
    <!-- Negombo Location Guide -->
    <section class="py-5 bg-white" id="location-guide">
        <div class="container py-5">
            <div class="text-center mb-5">
                <span class="text-success fw-bold text-uppercase">Your Starting Point</span>
                <h2 class="display-5 fw-bold mt-2">Explore Negombo by Tuk Tuk</h2>
                <p class="text-muted fs-5 mx-auto" style="max-width:700px">The perfect gateway city - minutes from the airport and packed with beaches, canals, and seafood.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 1: Coastal Strip</h5>
                        <p class="text-muted">Drive the 15 km beach road from Negombo south to Uswetakeiyawa - golden sands, fishing villages, and fresh king prawn stalls en route.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 2: Dutch Canal Road</h5>
                        <p class="text-muted">Follow the 17th-century Dutch Canal north to Chilaw through quiet backroads, lagoon views, and traditional fishing communities.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 3: Into the Wetlands</h5>
                        <p class="text-muted">Head east to the Muthurajawela wetland reserve - a 30-minute tuk tuk ride to a spectacular mangrove ecosystem teeming with wildlife.</p>
                    </div>
                </div>
            </div>
            <div class="alert alert-success mt-5 rounded-4 p-4">
                <strong><i class="bi bi-lightbulb-fill me-2"></i>Local Tip:</strong> Pick up your tuk tuk the evening you land - Negombo is only 8 km from the airport. Start fresh the next morning and drive north at sunrise for the best coastal light.
            </div>
        </div>
    </section>`,
        faqSchema: [
            { q: 'Can I pick up a Tuk Tuk directly from Negombo airport?', a: 'Yes! Negombo is only 8 km from Bandaranaike International Airport. We can arrange a pickup or delivery to your Negombo hotel on the same day you land, so you can start exploring immediately.' },
            { q: 'What is the best route to drive from Negombo?', a: 'The coastal strip south toward Colombo and the Dutch Canal road north toward Chilaw are both fantastic. For a wilder route, head east to the Muthurajawela wetlands. Most tourists use Negombo as a starting point for a clockwise island loop.' },
            { q: 'Does the rental include insurance?', a: 'Yes, all our Tuk Tuk rentals come with comprehensive rental insurance that covers you and the vehicle. We want you to explore Sri Lanka with total peace of mind.' },
            { q: 'How much does it cost to rent a Tuk Tuk in Negombo?', a: 'Our Negombo rental rates start from $11 USD per day for long-term bookings. The standard Explorer model is $16/day and the premium Pro model is $18/day, including insurance and AAC permit processing.' }
        ],
        positioning: {
            eyebrow: 'Why Start in Negombo',
            heading: 'Negombo Is the Practical First Stop for Foreign Travelers',
            intro: 'Negombo works best when you want the least friction between landing in Sri Lanka and starting your self-drive trip.',
            cards: [
                { icon: 'bi-airplane', title: 'Closest airport handover logic', text: 'Bandaranaike International Airport is the main arrival point for most foreign travelers, so Negombo keeps the first handover day simple.' },
                { icon: 'bi-sunrise', title: 'Easy first-night transition', text: 'You can sleep near the airport, collect the tuk tuk, and start the road trip fresh without a long transfer inland.' },
                { icon: 'bi-signpost-split', title: 'Strong route flexibility', text: 'Negombo works for northbound coastal loops, direct drives toward Kandy, or full island circuits starting clockwise.' },
                { icon: 'bi-shield-check', title: 'Best for first-time drivers', text: 'The flatter roads around Negombo make it a more forgiving place to settle into the vehicle before longer stages.' }
            ],
            compareIntro: 'If Negombo is not the right first stop for your route, compare the other destination pages below before you inquire.'
        }
    },
    {
        slug: 'ella',
        name: 'Ella',
        lat: 6.8667,
        lng: 81.0500,
        desc: 'Start your hill-country tuk tuk trip from Ella with scenic mountain roads, tea-estate viewpoints, and beginner-friendly route support.',
        keywords: 'rent tuk tuk ella sri lanka, tuk tuk rental ella, ella tuk tuk hire, self drive tuk tuk ella, nine arch bridge ella tuk tuk, ella rock tuk tuk, hill country tuk tuk rental, tuk tuk ella to nuwara eliya, rent a tuk tuk sri lanka, aac driving permit sri lanka',
        ogDescription: 'Explore misty tea estates and the famous Nine Arch Bridge around Ella in your own tuk tuk. Full training, insurance, and AAC permit included.',
        locationContent: `
    <!-- Ella Location Guide -->
    <section class="py-5 bg-white" id="location-guide">
        <div class="container py-5">
            <div class="text-center mb-5">
                <span class="text-success fw-bold text-uppercase">Hill Country Paradise</span>
                <h2 class="display-5 fw-bold mt-2">Explore Ella by Tuk Tuk</h2>
                <p class="text-muted fs-5 mx-auto" style="max-width:700px">Wind through emerald tea estates, over mountain bridges, and past dramatic waterfalls at your own pace.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 1: Nine Arch Bridge Loop</h5>
                        <p class="text-muted">Drive the 10-minute route to the iconic colonial viaduct at Demodara. Time it right and you'll watch a vintage blue train cross above the jungle canopy.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 2: Ravana Falls & Back</h5>
                        <p class="text-muted">Take the main road 6 km down the mountain to Ravana Falls - one of Sri Lanka's widest cascades - then push on to Wellawaya for incredible valley views.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 3: Nuwara Eliya Scenic Drive</h5>
                        <p class="text-muted">The 3-hour mountain drive to Nuwara Eliya winds through some of the island's most spectacular tea country. Allow a full day and stop at a tea factory en route.</p>
                    </div>
                </div>
            </div>
            <div class="alert alert-success mt-5 rounded-4 p-4">
                <strong><i class="bi bi-lightbulb-fill me-2"></i>Local Tip:</strong> The Ella Gap viewpoint is best at sunrise before clouds roll in. Park your tuk tuk at Little Adam's Peak trailhead - the 45-minute hike rewards you with a 270 degrees panorama of the valley.
            </div>
        </div>
    </section>`,
        faqSchema: [
            { q: 'Is it safe to drive a Tuk Tuk on the mountain roads around Ella?', a: 'Yes, with proper training it is very manageable. The roads around Ella are scenic but have tight hairpin bends, so we give specific mountain-driving tips as part of your lesson. Our tuk tuks are well-maintained with reliable brakes for hill country driving.' },
            { q: 'What are the best places to visit by Tuk Tuk near Ella?', a: 'The Nine Arch Bridge at Demodara, Little Adam\'s Peak trailhead, Ravana Falls, and the Ella Rock viewpoint are all easily reachable within 15 minutes by tuk tuk. For a longer day trip, drive to Nuwara Eliya through the tea estates.' },
            { q: 'Does the rental include insurance?', a: 'Yes, all our Tuk Tuk rentals come with comprehensive rental insurance that covers you and the vehicle. We want you to explore Sri Lanka with total peace of mind.' },
            { q: 'How much does it cost to rent a Tuk Tuk in Ella?', a: 'Our Ella rental rates start from $11 USD per day for long-term bookings. The standard Explorer model is $16/day and the premium Pro model is $18/day, including insurance and AAC permit processing.' }
        ],
        positioning: {
            eyebrow: 'Why Start in Ella',
            heading: 'Ella Fits Travelers Who Want the Hill Country First',
            intro: 'Ella is the better start point when the trip is built around scenery, tea estates, and a slower pace rather than airport convenience.',
            cards: [
                { icon: 'bi-tree', title: 'Tea-country focus', text: 'Ella is ideal when the main goal is mountain roads, viewpoints, waterfalls, and short scenic drives between stops.' },
                { icon: 'bi-camera', title: 'Strong sightseeing density', text: 'Nine Arch Bridge, Ravana Falls, and Little Adam\'s Peak are all close enough to keep your driving days compact.' },
                { icon: 'bi-signpost-2', title: 'Good for slower itineraries', text: 'Ella works best for travelers who want to explore one area deeply before moving toward the south coast or central highlands.' },
                { icon: 'bi-cloud-fog2', title: 'Different driving feel', text: 'The mountain roads need more caution than the coast, so this page is better for travelers comfortable with a scenic but less relaxed road profile.' }
            ],
            compareIntro: 'If Ella is too far inland for your arrival plan, compare the other pickup pages below and choose the city that matches your first driving day.'
        }
    },
    {
        slug: 'mirissa',
        name: 'Mirissa',
        lat: 5.9483,
        lng: 80.4516,
        desc: 'Cruise the stunning southern coast and whale-watching shores of Mirissa in your own self-drive Tuk Tuk.',
        keywords: 'rent tuk tuk mirissa sri lanka, tuk tuk rental mirissa, mirissa tuk tuk hire, self drive tuk tuk south coast, tuk tuk mirissa to galle, mirissa whale watching tuk tuk, southern sri lanka tuk tuk rental, rent a tuk tuk sri lanka, tuk tuk weligama, aac driving permit sri lanka',
        ogDescription: 'Drive the beautiful southern coastline from Mirissa to Galle in your own tuk tuk. Whale watching, surf beaches, and secret coves await. Insurance and permit included.',
        locationContent: `
    <!-- Mirissa Location Guide -->
    <section class="py-5 bg-white" id="location-guide">
        <div class="container py-5">
            <div class="text-center mb-5">
                <span class="text-success fw-bold text-uppercase">Southern Coast & Whale Watching</span>
                <h2 class="display-5 fw-bold mt-2">Explore Mirissa by Tuk Tuk</h2>
                <p class="text-muted fs-5 mx-auto" style="max-width:700px">Turquoise water, surf breaks, and the chance to spot blue whales just offshore - all connected by open coastal roads.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 1: Weligama Surf Run</h5>
                        <p class="text-muted">Drive 10 km west along the coast road to Weligama - the beginner surf capital of Sri Lanka. Watch surfers at sunrise, then grab a beach breakfast.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 2: Galle Fort Day Trip</h5>
                        <p class="text-muted">A 35 km coastal cruise west to the UNESCO World Heritage Galle Fort. Stop at Jungle Beach and Unawatuna along the way for a perfect southern day trip.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 3: Tangalle & Beyond</h5>
                        <p class="text-muted">Head 40 km east to the laid-back lagoon town of Tangalle and the wild turtle nesting beach at Rekawa. Some of the best coastal scenery in all of Sri Lanka.</p>
                    </div>
                </div>
            </div>
            <div class="alert alert-success mt-5 rounded-4 p-4">
                <strong><i class="bi bi-lightbulb-fill me-2"></i>Local Tip:</strong> Blue and sperm whale season runs November to April. Book an early morning whale watch boat, then spend the afternoon exploring the coast - Parrot Rock and Secret Beach are 5 minutes by tuk tuk from the main strip.
            </div>
        </div>
    </section>`,
        faqSchema: [
            { q: 'Can I drive a Tuk Tuk from Mirissa to Galle?', a: 'Absolutely! The 35 km coastal road from Mirissa to Galle is one of the most beautiful drives in Sri Lanka. The road is flat, well-paved, and passes Unawatuna beach and Jungle Beach. Allow about 1.5 hours each way to stop and enjoy the views.' },
            { q: 'What are the must-see spots near Mirissa by Tuk Tuk?', a: 'Parrot Rock (5 min), Secret Beach (5 min), Weligama surf beach (10 min), and Coconut Tree Hill (15 min) are all easily accessible. For a full day, drive to Galle Fort or east to Tangalle\'s lagoon beaches.' },
            { q: 'Does the rental include insurance?', a: 'Yes, all our Tuk Tuk rentals come with comprehensive rental insurance that covers you and the vehicle. We want you to explore Sri Lanka with total peace of mind.' },
            { q: 'How much does it cost to rent a Tuk Tuk in Mirissa?', a: 'Our Mirissa rental rates start from $11 USD per day for long-term bookings. The standard Explorer model is $16/day and the premium Pro model is $18/day, including insurance and AAC permit processing.' }
        ],
        positioning: {
            eyebrow: 'Why Start in Mirissa',
            heading: 'Mirissa Works Best for Beach-First Self-Drive Trips',
            intro: 'Mirissa makes sense when the route is built around the south coast, surf stops, and easy beach-town movement before heading inland.',
            cards: [
                { icon: 'bi-water', title: 'South-coast trip logic', text: 'Mirissa puts you straight into one of the easiest and most popular coastal driving stretches for foreign travelers.' },
                { icon: 'bi-brightness-alt-high', title: 'Relaxed road profile', text: 'Compared with hill-country roads, this area is better suited to travelers who want simpler driving and more stop-anywhere flexibility.' },
                { icon: 'bi-map', title: 'Easy links to nearby towns', text: 'Weligama, Galle, Unawatuna, Tangalle, and smaller beach stops are all practical add-ons from a Mirissa base.' },
                { icon: 'bi-binoculars', title: 'Good for activity travel', text: 'This page fits travelers combining the tuk tuk trip with surf, whale watching, beach days, and short coastal excursions.' }
            ],
            compareIntro: 'If Mirissa is too far south for your arrival or overall route, compare the other pickup pages below and choose a better first base.'
        }
    },
    {
        slug: 'kandy',
        name: 'Kandy',
        lat: 7.2906,
        lng: 80.6337,
        desc: 'Navigate the cultural capital Kandy and the misty Hanthana mountains with our premium self-drive Tuk Tuks.',
        keywords: 'rent tuk tuk kandy sri lanka, tuk tuk rental kandy, kandy tuk tuk hire, self drive tuk tuk kandy, tuk tuk kandy to pinnawala, temple of the tooth kandy tuk tuk, cultural triangle tuk tuk rental, rent a tuk tuk sri lanka, kandy peradeniya tuk tuk, aac driving permit sri lanka',
        ogDescription: 'Explore Kandy\'s temples, elephant orphanages, and mountain roads in your own tuk tuk. The cultural capital awaits - insurance and AAC permit included.',
        locationContent: `
    <!-- Kandy Location Guide -->
    <section class="py-5 bg-white" id="location-guide">
        <div class="container py-5">
            <div class="text-center mb-5">
                <span class="text-success fw-bold text-uppercase">The Cultural Capital</span>
                <h2 class="display-5 fw-bold mt-2">Explore Kandy by Tuk Tuk</h2>
                <p class="text-muted fs-5 mx-auto" style="max-width:700px">Ancient temples, royal lakes, elephant orphanages, and mountain tea estates - all connected by scenic highland roads.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 1: Peradeniya Gardens Loop</h5>
                        <p class="text-muted">Drive 6 km from Kandy centre to the Royal Botanic Gardens - 147 acres of orchids, bamboo groves, and a spectacular avenue of royal palms. Allow a full morning.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 2: Pinnawala Elephant Run</h5>
                        <p class="text-muted">A 45-minute drive northwest on the Colombo Road to Pinnawala - home to the world's largest captive elephant herd and an iconic river bathing spectacle every morning.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 3: Hanthana Mountain Drive</h5>
                        <p class="text-muted">Wind up into the Hanthana Range south of the city for panoramic views over Kandy Lake and into the hill country. Excellent tea estate stops along the way.</p>
                    </div>
                </div>
            </div>
            <div class="alert alert-success mt-5 rounded-4 p-4">
                <strong><i class="bi bi-lightbulb-fill me-2"></i>Local Tip:</strong> Park your tuk tuk at Kandy Lake and walk to the Temple of the Tooth - the UNESCO-listed temple is only accessible on foot. In the evening, stay for the traditional Kandyan dance performance at the Cultural Centre.
            </div>
        </div>
    </section>`,
        faqSchema: [
            { q: 'Is driving a Tuk Tuk in Kandy\'s city centre easy?', a: 'Kandy city centre can be busy, especially near the Temple of the Tooth. We recommend parking at the lakeside and walking the centre. The real joy is on the mountain roads around Hanthana and the A1 highway to Pinnawala - these are straightforward and extremely scenic.' },
            { q: 'What are the best day trips from Kandy by Tuk Tuk?', a: 'Pinnawala Elephant Orphanage (45 min), Peradeniya Botanical Gardens (15 min), Dambulla Cave Temple (1.5 hrs), and Sigiriya Rock Fortress (2 hrs) are all reachable by tuk tuk. Kandy makes a perfect base for the entire Cultural Triangle.' },
            { q: 'Does the rental include insurance?', a: 'Yes, all our Tuk Tuk rentals come with comprehensive rental insurance that covers you and the vehicle. We want you to explore Sri Lanka with total peace of mind.' },
            { q: 'How much does it cost to rent a Tuk Tuk in Kandy?', a: 'Our Kandy rental rates start from $11 USD per day for long-term bookings. The standard Explorer model is $16/day and the premium Pro model is $18/day, including insurance and AAC permit processing.' }
        ],
        positioning: {
            eyebrow: 'Why Start in Kandy',
            heading: 'Kandy Is the Better Base for Central and Cultural Routes',
            intro: 'Kandy is a strong start point when the trip is about temples, central Sri Lanka, and reaching both the Cultural Triangle and hill-country roads.',
            cards: [
                { icon: 'bi-bank', title: 'Cultural Triangle access', text: 'Kandy gives you practical onward access toward Sigiriya, Dambulla, Pinnawala, and other inland heritage stops.' },
                { icon: 'bi-building', title: 'City plus highlands mix', text: 'This page suits travelers who want a city handover but also want to move quickly into scenic mountain routes.' },
                { icon: 'bi-signpost', title: 'Useful inland positioning', text: 'Kandy is better than a coastal start when your route is not centered on airport arrival or beach travel.' },
                { icon: 'bi-people', title: 'Good for structured itineraries', text: 'Travelers with a tighter plan often choose Kandy because it links efficiently to both northern and southern legs of the trip.' }
            ],
            compareIntro: 'If Kandy does not match your first driving day or arrival logistics, compare the other pickup pages below before choosing your route.'
        }
    },
    {
        slug: 'galle',
        name: 'Galle',
        lat: 6.0535,
        lng: 80.2210,
        desc: 'Visit the UNESCO-listed Galle Fort and the pristine beaches of Unawatuna on your own schedule.',
        keywords: 'rent tuk tuk galle sri lanka, tuk tuk rental galle fort, galle tuk tuk hire, self drive tuk tuk galle, tuk tuk galle to unawatuna, tuk tuk galle to hikkaduwa, southern sri lanka tuk tuk rental, rent a tuk tuk sri lanka, galle fort tuk tuk, aac driving permit sri lanka',
        ogDescription: 'Explore Galle Fort (UNESCO World Heritage) and the beautiful southern beaches by tuk tuk. From Unawatuna to Hikkaduwa - insurance and AAC permit included.',
        locationContent: `
    <!-- Galle Location Guide -->
    <section class="py-5 bg-white" id="location-guide">
        <div class="container py-5">
            <div class="text-center mb-5">
                <span class="text-success fw-bold text-uppercase">UNESCO World Heritage</span>
                <h2 class="display-5 fw-bold mt-2">Explore Galle by Tuk Tuk</h2>
                <p class="text-muted fs-5 mx-auto" style="max-width:700px">A 16th-century Dutch fort, coral reef snorkelling, and some of Sri Lanka's best beach strips - all within easy tuk tuk reach.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 1: Unawatuna Beach Run</h5>
                        <p class="text-muted">Drive 5 km east from Galle Fort to the crescent-shaped Unawatuna Bay - consistently rated among Asia's best beaches. Stop at Jungle Beach on the way for a secret snorkel spot.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 2: Hikkaduwa Coral Reef</h5>
                        <p class="text-muted">Head 18 km north along the coast to Hikkaduwa - the surf and snorkel capital of the west. The coral sanctuary is just metres offshore and home to sea turtles.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi bi-signpost-2"></i></div>
                        <h5 class="fw-bold">Route 3: Mirissa Whale Watch</h5>
                        <p class="text-muted">Drive 35 km east along the southern highway to Mirissa for an early morning blue whale watching boat trip, then return via coconut-fringed back roads through Weligama.</p>
                    </div>
                </div>
            </div>
            <div class="alert alert-success mt-5 rounded-4 p-4">
                <strong><i class="bi bi-lightbulb-fill me-2"></i>Local Tip:</strong> Park your tuk tuk outside the fort walls and walk the ramparts at sunset - it's free and the views over the Indian Ocean are unforgettable. The fort's interior lanes are too narrow for vehicles, so exploring on foot is the way to go.
            </div>
        </div>
    </section>`,
        faqSchema: [
            { q: 'Can I drive a Tuk Tuk inside Galle Fort?', a: 'The lanes inside Galle Fort are very narrow. We recommend parking your tuk tuk at the main gate and exploring the fort on foot - it only takes about 1-2 hours to walk the full perimeter walls. Your tuk tuk is then perfect for reaching the beaches outside the fort.' },
            { q: 'What beaches can I reach from Galle by Tuk Tuk?', a: 'Unawatuna (5 min), Jungle Beach (10 min), Dalawella Beach (15 min), Koggala Lake (20 min), and Hikkaduwa (30 min) are all accessible. Drive east toward Mirissa and Weligama for even more stunning coastline.' },
            { q: 'Does the rental include insurance?', a: 'Yes, all our Tuk Tuk rentals come with comprehensive rental insurance that covers you and the vehicle. We want you to explore Sri Lanka with total peace of mind.' },
            { q: 'How much does it cost to rent a Tuk Tuk in Galle?', a: 'Our Galle rental rates start from $11 USD per day for long-term bookings. The standard Explorer model is $16/day and the premium Pro model is $18/day, including insurance and AAC permit processing.' }
        ],
        positioning: {
            eyebrow: 'Why Start in Galle',
            heading: 'Galle Fits Heritage Travelers and South-Coast Loops',
            intro: 'Galle is the better page when your route combines beach travel with Galle Fort, nearby coves, and west-to-east coastal movement.',
            cards: [
                { icon: 'bi-building-lock', title: 'Fort-area travel intent', text: 'Searchers looking specifically for Galle Fort, Unawatuna, or nearby heritage stays should land on this page instead of a broader coast page.' },
                { icon: 'bi-tsunami', title: 'Simple coastal movement', text: 'The roads around Galle work well for travelers who want beach access, short day trips, and relatively easy point-to-point driving.' },
                { icon: 'bi-compass', title: 'Good anchor for west-to-east loops', text: 'Galle can act as a practical base before moving toward Mirissa, Weligama, Hikkaduwa, or back toward Colombo.' },
                { icon: 'bi-camera-reels', title: 'Best for mixed-interest trips', text: 'This page fits travelers who want culture, photography, and beach time together rather than a pure surf or airport-focused start.' }
            ],
            compareIntro: 'If Galle is not the right anchor point for your first leg, compare the other pickup pages below and choose the city that fits your route better.'
        }
    }
];

cities.forEach(city => {
    let content = template;
    const pageDescription = `${city.desc} Full training, insurance, and AAC driving permit included. From $11/day.`;
    const positioningSection = `
    <!-- Why Choose Us for Tourists Section -->
    <section class="py-5 bg-light" id="homepage-basics">
        <div class="container py-5">
            <div class="text-center mb-5">
                <span class="text-success fw-bold text-uppercase">${city.positioning.eyebrow}</span>
                <h2 class="display-5 fw-bold mt-2">${city.positioning.heading}</h2>
                <p class="text-muted fs-5 mx-auto" style="max-width:760px">${city.positioning.intro}</p>
            </div>
            <div class="row g-4">
                ${city.positioning.cards.map((card) => `
                <div class="col-md-6 col-xl-3">
                    <div class="feature-card">
                        <div class="icon-box"><i class="bi ${card.icon}"></i></div>
                        <h3 class="h5 fw-bold">${card.title}</h3>
                        <p class="text-muted mb-0">${card.text}</p>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </section>`;

    // Replace Title
    content = content.replace(/<title>.*<\/title>/, `<title>Rent a Tuk Tuk in ${city.name}, Sri Lanka | Self-Drive Hire | SK Tuk Rides</title>`);

    // Replace Meta Title
    content = content.replace(/<meta name="title" content="[^"]*">/, `<meta name="title" content="Rent a Tuk Tuk in ${city.name}, Sri Lanka | Self-Drive Hire | SK Tuk Rides">`);

    // Replace Meta Description
    content = content.replace(/<meta name="description" content="[^"]*">/, () => `<meta name="description" content="${pageDescription}">`);

    // Replace Meta Keywords with city-specific keywords
    content = content.replace(/<meta name="keywords" content="[^"]*">/, `<meta name="keywords" content="${city.keywords}">`);

    // Replace Canonical
    content = content.replace(
        /<link rel="canonical" href="https:\/\/promo.sktukrides.com\/" \/>/,
        `<link rel="canonical" href="https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html" />`
    );

    // Fix OG meta tags to be city-specific
    content = content.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html">`);
    content = content.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="Rent a Tuk Tuk in ${city.name} | SK Tuk Rides Sri Lanka">`);
    content = content.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${city.ogDescription}">`);

    // Fix Twitter meta tags to be city-specific
    content = content.replace(/<meta property="twitter:url" content="[^"]*">/, `<meta property="twitter:url" content="https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html">`);
    content = content.replace(/<meta property="twitter:title" content="[^"]*">/, `<meta property="twitter:title" content="Rent a Tuk Tuk in ${city.name} | SK Tuk Rides Sri Lanka">`);
    content = content.replace(/<meta property="twitter:description" content="[^"]*">/, `<meta property="twitter:description" content="${city.ogDescription}">`);

    content = content.replace(
        /<!-- Language Alternates -->[\s\S]*?<!-- Twitter -->/,
        `<!-- Language Alternates -->\n    <link rel="alternate" hreflang="en" href="https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html" />\n    <link rel="alternate" hreflang="x-default" href="https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html" />\n\n    <!-- Twitter -->`
    );

    // Update Schema "name" to be specific
    content = content.replace(
        /"name": "SK Tuk Rides"/,
        `"name": "SK Tuk Rides - ${city.name} Branch"`
    );

    // Replace generic country areaServed with city-specific geo data
    content = content.replace(
        /"areaServed": \{\s*"@type": "Country",\s*"name": "Sri Lanka"\s*\}/,
        JSON.stringify({
            "areaServed": {
                "@type": "City",
                "name": city.name,
                "geo": { "@type": "GeoCoordinates", "latitude": city.lat, "longitude": city.lng },
                "containedInPlace": { "@type": "Country", "name": "Sri Lanka" }
            }
        }).slice(1, -1).trim()
    );

    // Remove homepage-only ItemList schema from city pages
    content = content.replace(
        /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "ItemList",[\s\S]*?\}\s*<\/script>\s*\n/,
        ''
    );

    // Remove homepage-only WebPage, ImageObject schemas (will be replaced with city-specific ones)
    content = content.replace(
        /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "ImageObject",[\s\S]*?\}\s*<\/script>\s*\n/,
        ''
    );
    content = content.replace(
        /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "WebPage",[\s\S]*?\}\s*<\/script>\s*\n/,
        ''
    );

    // Update WebSite schema @id to stay consistent
    content = content.replace(
        /"@type": "WebSite",\s*"@id": "https:\/\/promo\.sktukrides\.com\/#website"/,
        '"@type": "WebSite",\n      "@id": "https://promo.sktukrides.com/#website"'
    );

    // Replace homepage Organization @id with the same (consistent across site)
    // Inject city-specific WebPage schema before </head> replacement marker
    const cityWebPageSchema = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html#webpage",
      "url": "https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html",
      "name": "Rent a Tuk Tuk in ${city.name}, Sri Lanka | Self-Drive Hire | SK Tuk Rides",
      "description": "${pageDescription}",
      "isPartOf": { "@id": "https://promo.sktukrides.com/#website" },
      "about": { "@id": "https://promo.sktukrides.com/#organization" },
      "dateModified": "${new Date().toISOString().split('T')[0]}T00:00:00+00:00",
      "inLanguage": "en-US",
      "potentialAction": { "@type": "ReadAction", "target": ["https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html"] }
    }
    </script>`;

    content = content.replace(
        /(<\/script>\s*\n\s*<style>)/,
        () => `</script>\n    ${cityWebPageSchema}\n\n    <style>`
    );

    // Replace FAQ schema with city-specific questions
    const faqSchemaJson = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": city.faqSchema.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
    }, null, 2);

    content = content.replace(
        /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "FAQPage",[\s\S]*?\}\s*<\/script>/,
        `<script type="application/ld+json">\n    ${faqSchemaJson}\n    </script>`
    );

    // Replace WebSite schema BreadcrumbList with city-specific breadcrumb
    const breadcrumbJson = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://promo.sktukrides.com/" },
            { "@type": "ListItem", "position": 2, "name": `Rent Tuk Tuk ${city.name}`, "item": `https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html` }
        ]
    }, null, 2);

    content = content.replace(
        /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "BreadcrumbList",[\s\S]*?\}\s*<\/script>/,
        `<script type="application/ld+json">\n    ${breadcrumbJson}\n    </script>`
    );

    content = content.replace(
        /<h1 class="hero-title">[\s\S]*?<\/h1>/,
        `<h1 class="hero-title">Rent a Tuk Tuk in ${city.name} <span class="text-warning">and Explore at Your Own Pace.</span></h1>`
    );

    content = content.replace(
        /<p class="lead fs-4 mb-4 opacity-90">[\s\S]*?<\/p>/,
        `<p class="lead fs-4 mb-4 opacity-90">${city.desc} We help with permit guidance, beginner lessons, insurance support, and route planning for foreign travelers.</p>`
    );

    // Inject location-specific content section after the hero section (before Why Choose Us)
    content = content.replace(
        /<!-- Why Choose Us for Tourists Section -->/,
        `${city.locationContent}\n\n    <!-- Why Choose Us for Tourists Section -->`
    );

    content = content.replace(
        /<!-- Why Choose Us for Tourists Section -->[\s\S]*?<!-- Trust Stats Section -->/,
        `${positioningSection}\n\n    <!-- Trust Stats Section -->`
    );

    content = content.replace(/>Why Rent</g, `>Why ${city.name}<`);
    content = content.replace(/>Pickup Pages</g, '>Other Locations<');
    content = content.replace(
        /<h2 class="display-5 fw-bold">Start With the Right Pickup Page<\/h2>/,
        '<h2 class="display-5 fw-bold">Compare Other Pickup Locations</h2>'
    );
    content = content.replace(
        /<p class="text-muted mb-0">Each destination below has its own page, search intent, and visual context so travelers can choose the best start point before they inquire\.<\/p>/,
        `<p class="text-muted mb-0">${city.positioning.compareIntro}</p>`
    );

    // Replace FAQ accordion with city-specific questions
    const faqAccordion = `<div class="accordion" id="faqAccordion">
                        ${city.faqSchema.map((item, i) => `<div class="accordion-item border-0 mb-3 shadow-sm rounded-4 overflow-hidden">
                            <h2 class="accordion-header">
                                <button class="accordion-button fw-bold${i > 0 ? ' collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i + 1}">
                                    ${item.q}
                                </button>
                            </h2>
                            <div id="faq${i + 1}" class="accordion-collapse collapse${i === 0 ? ' show' : ''}" data-bs-parent="#faqAccordion">
                                <div class="accordion-body text-muted">
                                    ${item.a}
                                </div>
                            </div>
                        </div>`).join('\n                        ')}
                    </div>`;

    content = content.replace(
        /<div class="accordion" id="faqAccordion">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
        `${faqAccordion}\n                </div>\n            </div>\n        </div>\n    </section>`
    );

    // Write File
    const filename = `rent-tuk-tuk-${city.slug}.html`;
    fs.writeFileSync(path.join(__dirname, filename), content);
    console.log(`Generated: ${filename}`);
});

