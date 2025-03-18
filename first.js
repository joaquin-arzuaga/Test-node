console.log("Hello, World!");

async function main() {

    console.log("hello world from main");
    const req = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    if (req.ok) {
        const data = await req.json();
        //console.log(data.docs[0].autor_name);
        console.log(data);
    }
}

main();