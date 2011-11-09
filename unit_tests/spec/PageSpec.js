describe("Description", function() {

	it("should get a description", function() {

		var page = new Page();
		
		page.description = "My Description";
		
		expect(page.description).toEqual("My Description");

	});
});

describe("Insert", function() {

	it("should insert a page object", function() {

		var page = new Page();
		
		page.save();
		
		var results = lib.query("pages", {ID: page.ID});
				
		expect(results.length).toBeGreaterThan(0);

	});
});

describe("Update", function() {

	it("should update a page object", function() {

		var page = new Page();
		
		page.description = "My description";		
		
		var new_id = page.save();
		
		var results = lib.query("pages", {ID: new_id});
		expect(results[0].description).toEqual("My description");
		
		page.description = "Different description";
		
		var update_id = page.save();
		
		var results = lib.query("pages", {ID: update_id});
		expect(results[0].description).toEqual("Different description");

	});
});
