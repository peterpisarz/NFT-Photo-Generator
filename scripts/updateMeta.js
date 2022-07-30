const path = require("path");
const fs = require("fs");
const base = process.cwd()
const buildBasePath = path.join(base, "/build")
const config = require('../settings/config.json')
const attributearray = [['name', 'Got The Time?', 'Clear for Launch', 'Long Exposure Congress', 'Dock on Town Lake', '360 Dream', 'Lakeway Techno Bum', 'Down Stream', 'Neon Lone Star', "What's up There?", 'Sustainable Sunrise', 'Your first Sotol experience', 'Man vs Machine', 'No Rush', 'Corona Truck', 'Let it Ride', 'Kung Fu Grip'], ['description', 'Do you know what the colors of the tower signify?', 'Starship SN8 awaiting her first (and only) high altitude test flight at Starbase', 'Stood in the street for 10 seconds with my tripod', 'Just the bats and I', 'Do you remember your first time here?', 'Guessed the wifi password on the first try. So I kept coming back', 'Which way to Lady Bird?', 'Your little reminder of freedom. Your beacon of new opportunity.', "Off set level on Austin's iconic The Independent tower", 'South Texas winds, gulf morning skies', "Sweet baby Jesus, that's good!", 'Yak on lady bird takes on the Riverboat', "Sailing Lake Travis to escape the 'rona", 'The more you look at it, the truer it is', '35N at dusk. Ride or die', 'How to build a giant sail, by Google'], ['trait_type', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas', 'POV You Moved to Texas'], ['value', 'UT Tower', 'Starbase', 'Congress', 'Town Lake', 'Bridge', 'Lakeway', 'Abstract Canoe', 'Neon', 'The Independent', 'Windmills', 'Sotol', 'Riverboat', 'Sailboat', 'Corona Truck', 'Motorcycle', 'Ninja'], ['trait_type', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera', 'Camera'], ['value', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha', 'Sony Alpha'], ['trait_type', 'Photography', 'SpaceX', 'Photography', 'Photography', '', 'Lake', 'Art', 'Neon', 'High Rise', 'Texas', 'Liquor', 'Lake', 'Lake', '', '', 'Skyline'], ['value', 'Nightime', 'Starship', 'Long Exposure', 'Nightime', '', 'Sailboat', 'Sculpture', 'Sign', 'Offset', 'Rio Grande Valley', 'Agave', 'Lady Bird', 'Travis', '', '', 'Austin, TX']]

const main = async () => {
    const metadata = await getExistingMetadata()
    var z = 1

    for (var i = 1; i <= metadata.length; i++) {
        const file = require(`${buildBasePath}/json/${i}.json`)

        file.name = attributearray[0][i]
        file.description = attributearray[1][i]

        let traits = {};

        traits.trait_type = attributearray[2][i];
        traits.value = attributearray[3][i];

        file.attributes.push(traits);

        traits = {};

        traits.trait_type = attributearray[4][i];
        traits.value = attributearray[5][i];

        file.attributes.push(traits);

        traits = {};

        traits.trait_type = attributearray[6][i];
        traits.value = attributearray[7][i];

        file.attributes.push(traits);

        traits = {};

        console.log("done");
        fs.writeFileSync(`${buildBasePath}/json/${i}.json`, JSON.stringify(file, null, 2))
    }

    console.log(`\nUpdated Metadata\n`)
}

const getExistingMetadata = async () => {
    return fs
        .readdirSync(`${buildBasePath}/json/`)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .map((i, index) => {
            return {
                id: index,
                filename: i
            }
        })
}

main()