module.exports = {
	Partie: Partie
};

var scores = {
	0 :"0",
	1 : "15",
	2 : "30",
	3 : "40"
}

function Partie() {
	this.camps = [0, 0];
}

Partie.prototype = {
	donneScore : function() {
		var self = this;
		return scoreCamp(0) + "-" + scoreCamp(1);

		function scoreCamp (camp) {
			return scores[self.camps[camp]];	
		}
	},

	camp1Marque: function() {
		this.camps[0]++;	
	},

	camp2Marque: function() {
		this.camps[1]++;	
	},

	gagnant : function(){
		if(this.camps[0] == this.camps[1]) {
			return undefined;
		}
		return "camp2";
	}
}