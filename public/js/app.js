$(document).ready(function($) {
	$.getJSON('/all_players.json', function(data) {
			/*optional stuff to do after success */
			var players = [];
			$.each(data, function(index, el) {
				var player = {};
				player['id'] = el['id'];
				player['name'] = el['name'];
				player['system'] = el['system'];
				player['country'] = el['country'];
				player['microphone'] = el['microphone'];
				$("#players-list").append('<li id="' + player['system'] + '""><span class="system">' + player['system'] + '</span>' + 
					'<span>' + player['name'] + '</span><span>' + player['country'] + '</span></li>');
				//players.push(player); 
				//console.log(el['name']);
			});
	});

	$('#filter-players').on("change", function() {
		var value = $(this).val();
		console.log(value);
		if (value != "All") {
			$("#players-list li:not(#" + value + ")").hide();
			$("#players-list li#" + value).show();
			return;
		}
		$("#players-list li").show();
	});
});


// $(document).ready(function($) {
// 	$.getJSON('/test_data.json', function(data) {
// 			/*optional stuff to do after success */
// 			var players = [];
// 			$.each(data, function(index, el) {
// 				var player = {};
// 				player['id'] = el['id'];
// 				player['name'] = el['name'];
// 				player['system'] = el['system'];
// 				player['country'] = el['country'];
// 				player['microphone'] = el['microphone'];
// 				$("#players-list").append('<li id="' + player['system'] + '""><span class="system">' + player['system'] + '</span>' + 
// 					'<span>' + player['name'] + '</span><span>' + player['country'] + '</span></li>');
// 				//players.push(player); 
// 				//console.log(el['name']);
// 			});
// 	});

// 	$('#filter-players').on("change", function() {
// 		var value = $(this).val();
// 		console.log(value);
// 		if (value != "All") {
// 			$("#players-list li:not(#" + value + ")").hide();
// 			$("#players-list li#" + value).show();
// 			return;
// 		}
// 		$("#players-list li").show();
// 	});
// });