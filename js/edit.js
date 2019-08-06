// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			];
                for (i=0;i<9;i++) {
                        puzzleData.push(
			 	{
					clue: "",
					answer: "         ",
					position: i+1,
					orientation: "across",
					startx: 1,
					starty: i+1
				});
                }
                for (i=0;i<9;i++) {
                        puzzleData.push(
			 	{
					clue: "",
					answer: "         ",
					position: i+10,
					orientation: "down",
					startx: i+1,
					starty: 1
				});
                }
 
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

function save() {
    const ws = new WebSocket('ws://cerisara.duckdns.org/socket/ws')
    ws.onopen = () => {
        console.log('ws opened on browser')
        ws.send(window.detlet);
    }
    alert("all sent");
}

