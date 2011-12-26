describe("Keyword", function() {

	it("should get a keyword", function() {
		var picture = new Picture();
		picture.keyword = "My Keyword";
		expect(picture.keyword).toEqual("My Keyword");
	});

});

describe("Insert", function() {

	it("should insert a picture object", function() {

		var picture = new Picture();
		
		picture.save();
		
		var results = lib.query("pictures", {ID: picture.ID});
				
		expect(results.length).toBeGreaterThan(0);

	});
});

describe("Update", function() {

	it("should update a picture object", function() {

		var picture = new Picture();
		
		picture.keyword = "My keyword";		
		
		var new_id = picture.save();
		
		var results = lib.query("pictures", {ID: new_id});
		expect(results[0].keyword).toEqual("My keyword");
		
		picture.keyword = "Different keyword";
		
		var update_id = picture.save();
		
		var results = lib.query("pictures", {ID: update_id});
		expect(results[0].keyword).toEqual("Different keyword");

	});
});
