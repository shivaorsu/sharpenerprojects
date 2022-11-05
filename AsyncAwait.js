console.log("person1: shows ticket")
console.log("person2: shows ticket")

const preMovie = async() => {
    const wifeBringsTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('shows ticket')
        }, 3000);
    })

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'))

    const addButter = new Promise((resolve, reject) => resolve('butter'))

    const getColdDrinks  = new Promise((resolve, reject) => resolve('cold Drinks'))

    let ticket = await wifeBringsTicket

    console.log("wife: i have the tickets")
    console.log("husband: we should go in..")
    console.log("wife: wait i am hungry")

    let popcorn  = await getPopcorn
    console.log(`husband: i will get some ${popcorn}`)
    console.log("husband: we should go in..")
    console.log("wife: i need butter on my popcorn")

    let butter = await addButter
    console.log(`husband: i added ${butter} on to the popcorn`)


    let coldDrink = await getColdDrinks
    console.log(`husband: yay i got some ${coldDrink}`)
    return ticket
}

preMovie().then((t) => console.log(t))


console.log("person3: shows ticket")
console.log("person4: shows ticket")
