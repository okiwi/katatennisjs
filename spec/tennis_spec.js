

describe("Une partie de tennis", function() {
	var partie;

	beforeEach(function(){
		partie = new (require("../tennis")).Partie();
	});


	it("le score au début est de 0-0", function() {
		expect(partie.donneScore()).toBe("0-0");
	});

	it("peut prendre en compte le coup d'un joueur", function() {
		partie.camp1Marque();

		expect(partie.donneScore()).toBe("15-0");		
	});

	it("peut prendre en compte le coup d'un autre joueur", function() {
		partie.camp2Marque();

		expect(partie.donneScore()).toBe("0-15");		
	});

	it("peut faire gagner un camp", function() {
		partie.camp2Marque();
		partie.camp2Marque();
		partie.camp2Marque();
		partie.camp2Marque();

 		expect(partie.gagnant()).toBe("camp2");		
	});

	it("peut dire qu'il n'y a pas encore de gagnant", function () {
		expect(partie.gagnant()).toBeUndefined();
	});

});