// Initialise. If the database doesn't exist, it is created
var lib = new localStorageDB("library");

// Check if the database was just created. Useful for initial database setup
if( lib.isNew() ) {

    // create the "books" table
    lib.createTable("books", ["id", "title", "author", "year", "copies"]);
    
    // insert some data
    lib.insert("books", {id: "B001", title: "Phantoms in the brain", author: "Ramachandran", year: 1999, copies: 10});
    lib.insert("books", {id: "B002", title: "The tell-tale brain", author: "Ramachandran", year: 2011, copies: 10});
    lib.insert("books", {id: "B003", title: "Freakonomics", author: "Levitt and Dubner", year: 2005, copies: 10});
    lib.insert("books", {id: "B004", title: "Predictably irrational", author: "Ariely", year: 2008, copies: 10});
    lib.insert("books", {id: "B005", title: "Tesla: Man out of time", author: "Cheney", year: 2001, copies: 10});
    lib.insert("books", {id: "B006", title: "Salmon fishing in the Yemen", author: "Torday", year: 2007, copies: 10});
    lib.insert("books", {id: "B007", title: "The user illusion", author: "Norretranders", year: 1999, copies: 10});
    lib.insert("books", {id: "B008", title: "Hubble: Window of the universe", author: "Sparrow", year: 2010, copies: 10});
    
    // commit the database to localStorage
    // all create/drop/insert/update/delete operations should be committed
    lib.commit();
}
