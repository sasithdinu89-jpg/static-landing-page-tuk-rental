const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');

const cities = [
    {
        slug: 'negombo',
        name: 'Negombo',
        desc: 'Start your journey from Negombo! The closest Tuk Tuk rental to Colombo Airport.'
    },
    {
        slug: 'ella',
        name: 'Ella',
        desc: 'Explore the misty tea plantations of Ella in your own Tuk Tuk.'
    },
    {
        slug: 'mirissa',
        name: 'Mirissa',
        desc: 'Drive along the southern coast and surf beaches of Mirissa with a self-drive Tuk Tuk.'
    },
    {
        slug: 'kandy',
        name: 'Kandy',
        desc: 'Navigate the cultural capital Kandy and Hanthana mountains with our premium Tuk Tuks.'
    },
    {
        slug: 'galle',
        name: 'Galle',
        desc: 'Visit the historic Galle Fort and Unawatuna beaches on your own schedule.'
    }
];

cities.forEach(city => {
    let content = template;

    // Replace Title
    content = content.replace(
        /<title>.*<\/title>/,
        `<title>Rent a Tuk Tuk in ${city.name} | Self-Drive Rental Sri Lanka | SK Tuk Rides</title>`
    );

    // Replace Meta Title
    content = content.replace(
        /<meta name="title" content=".*">/,
        `<meta name="title" content="Rent a Tuk Tuk in ${city.name} | Self-Drive Rental Sri Lanka">`
    );

    // Replace Meta Description
    content = content.replace(
        /<meta name="description" content=".*">/,
        `<meta name="description" content="${city.desc} We provide full training, insurance, and driving permits. Book your 3-wheeler in ${city.name} today!">`
    );
    
    // Replace "Locations" footer column to "Nearby Cities" (Avoid circular logic or massive footers)
    // Actually, keeping the links is good for SEO internal linking mesh. 
    // We will just update the H1 and Meta data.

    // Replace H1 Hero Title
    // Identifying the hero title by specific text to ensure we replace the right part
    content = content.replace(
        /Explore Sri Lanka <br>Like a Local: <span class="text-warning">Rent a Tuk Tuk.<\/span>/,
        `Explore ${city.name} <br>Like a Local: <span class="text-warning">Rent a Tuk Tuk.</span>`
    );

    // Replace Canonical
    content = content.replace(
        /<link rel="canonical" href="https:\/\/promo.sktukrides.com\/" \/>/,
        `<link rel="canonical" href="https://promo.sktukrides.com/rent-tuk-tuk-${city.slug}.html" />`
    );

    // Update Schema "name" to be specific
    content = content.replace(
        /"name": "SK Tuk Rides"/,
        `"name": "SK Tuk Rides - ${city.name} Branch"`
    );
    
    // Write File
    const filename = `rent-tuk-tuk-${city.slug}.html`;
    fs.writeFileSync(path.join(__dirname, filename), content);
    console.log(`Generated: ${filename}`);
});
