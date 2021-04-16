// Goal: Store my social media profile in memory. Display it in the 
// JavaScript console in Chrome, in a human-readable format.

// A social media profile is a more complex thing – it's not simply
// a String or a Number. It's got many attributes, like a name, location,
// and a timeline.

// Write the recipe (algorithm) in the comments. Then, write the code.

// Store a simple social media profile in memory
let profile = {
    name: `Tony Litterio`,
    location: {
        city: `Chicago`,
        state: `Illinois`
    },
    timeline: [`Writing Javascript`, `Eating Salmon`, `Doing stuff`]
}
console.log(profile)
// Retrieve the name from the profile, store it in memory
let profileName = profile.name
console.log(`Name is ${profileName}`)
let profileLocation = profile.location
// profileLocation = `Evanston`
console.log(`Location is ${profileLocation.city}, ${profileLocation.state}`)
// Display the name in the console

// Retrieve the location, store it in a memory

// Use the location to write the city and state, in a human-readable
// format, to the JavaScript console

// Write the 3 statuses from the "timeline" to the JavaScript console
let shoppingList = [`ice cream`, `Orange Juice`, `Spinach`]
console.log(shoppingList)
console.log(shoppingList.length)
console.log(`Timeline:`)
profile.timeline.forEach(element => console.log(element))

