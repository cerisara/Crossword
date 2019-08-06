// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Réseau local",
					answer: "ethernet",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Société célèbre",
					answer: "ea",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Taux de transmission",
					answer: "tx",
					position: 2,
					orientation: "down",
					startx: 2,
					starty: 1
				},
			 	{
					clue: "clients de FAI",
					answer: "heberges",
					position: 3,
					orientation: "down",
					startx: 3,
					starty: 1
				},
			 	{
					clue: "pas applicable",
					answer: "na",
					position: 4,
					orientation: "down",
					startx: 6,
					starty: 1
				},
			 	{
					clue: "standard base sur XML",
					answer: "tei",
					position: 5,
					orientation: "down",
					startx: 8,
					starty: 1
				},
			 	{
					clue: "Au centre",
					answer: "axe",
					position: 6,
					orientation: "across",
					startx: 1,
					starty: 2
				},
			 	{
					clue: "Unité de base",
					answer: "bit",
					position: 7,
					orientation: "across",
					startx: 3,
					starty: 3
				},
			 	{
					clue: "algorithme de base",
					answer: "tri",
					position: 8,
					orientation: "down",
					startx: 5,
					starty: 3
				},
			 	{
					clue: "Nombre",
					answer: "pi",
					position: 9,
					orientation: "across",
					startx: 7,
					starty: 3
				},
			 	{
					clue: "langage",
					answer: "python",
					position: 9,
					orientation: "down",
					startx: 7,
					starty: 3
				},
			 	{
					clue: "documents HTML",
					answer: "pages",
					position: 10,
					orientation: "down",
					startx: 1,
					starty: 4
				},
			 	{
					clue: "Tracing",
					answer: "ray",
					position: 11,
					orientation: "across",
					startx: 5,
					starty: 4
				},
			 	{
					clue: "Unité de mesure",
					answer: "giga",
					position: 12,
					orientation: "across",
					startx: 1,
					starty: 6
				},
			 	{
					clue: "Interjection",
					answer: "ah",
					position: 13,
					orientation: "across",
					startx: 6,
					starty: 6
				},
			 	{
					clue: "langage",
					answer: "ada",
					position: 13,
					orientation: "down",
					startx: 6,
					starty: 6
				},
			 	{
					clue: "Système d'exploitation",
					answer: "dos",
					position: 14,
					orientation: "across",
					startx: 6,
					starty: 7
				},
			 	{
					clue: "Appel au service après-vente",
					answer: "sos",
					position: 15,
					orientation: "across",
					startx: 1,
					starty: 8
				},
			 	{
					clue: "Ce n'est pas un nombre",
					answer: "nan",
					position: 16,
					orientation: "across",
					startx: 5,
					starty: 8
				},
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
