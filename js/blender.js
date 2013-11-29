$('#liquid').hide();

//Checkboxes checked puts an ingredient div in the blender
//Unchecking the box removes the div
	$(function() {

		$("input").click(function() {

			// Figure which ingredient was clicked on *outside* of the if statement...
			// That way it's available in both the If and the Else...
			var checked = $(this);
			var value   = checked.val();

			if ($(this).is(":checked")) {

				$('<div/>').addClass(value)
				.addClass("ingredient")
				.prependTo($("#canvas"))
				.hide()
				.fadeIn(175);
			}

			else {

				// Fade out the ingredient 
				$("." + value).fadeOut(175)(function(){
				// Then remove it from the dom
				$(this).remove();
				})
			}

		});
	});


//Nutrition Data

	//Prepare to store item nutrition data
	function nutrition(cal, fat, sod, carb, fiber, sugar, pro, vita, vitc, calc){
		return {
			cal:cal,
			fat:fat,
			sod:sod,
			carb:carb,
			fiber:fiber,
			sugar:sugar,
			pro:pro,
			vita:vita,
			vitc:vitc,
			calc:calc,
			//iron:iron
		}
	};

	//Store the actual data per item in an array object
	var ndata = {};

	ndata["kale"] = nutrition(17, 0, 214, 4, 1, 0, 104, 67, 4, 3);
	ndata["oj"] = nutrition(56,0,1,13,0,11,1,5,104,1,1);
	ndata["banana"] = nutrition(66,0,1,17,2,9,1,1,11,0,1);
	ndata["yogurt"] = nutrition(77,2,85,0,8,6,1,1,22,0);
	ndata["choc"] = nutrition(100,0,70,24,0,20,0,0,0,0);
	ndata["berry"] = nutrition(40,0,1,9,2,6,1,3,0,1);
	ndata["ruta"] = nutrition(25,0,14,5,2,4,0,29,3,2);
	ndata["pizza"] = nutrition(272,9,507,37,1,2,6,0,14,14);
	ndata["mango"] = nutrition(54,0,1,14,1,12,12,38,1,0);
	ndata["catfd"] = nutrition(217,20,25,6,1,0,40,10,10,20,4);
	ndata["sponge"] = nutrition(10,0,0,0,2,0,0,0,2,0,0);
	ndata["dirt"] = nutrition(10,0,0,0,0,0,0,0,0,2,4);
	ndata["pb"] = nutrition(376,32,312,14,6,6,0,0,2,6);
	ndata["tj"] = nutrition(21,0,12,5,0,4,1,11,37,1,3);


	//Variables to hold totals for each data value as the loop proceeds. Ready to calculate, sir!
	var totalcal = 0;
	var totalfat = 0;
	var totalsod = 0;
	var totalcarb = 0;
	var totalfib = 0;
	var totalsug = 0;
	var totalpro = 0;
	var totalvita = 0;
	var totalvitc = 0;
	var totalcalc = 0;
	//var totaliron = 0;


//Description Data

	//Prepare to store item description data
	function blend_array(adj1, adj2, clause, end){
		return {
			adj1:adj1,
			adj2:adj2,
			clause:clause,
			end:end,
		}
	};

	//Store the actual words and phrases per item in an array object

	var blend_array = {};

	//Description source words for each ingredient are stored in arrays: 
	//adj1 for the first adjective, adj2 for a second adjective, clause for a descriptive clause, end for a final summary
	var kale_adj1 = ["Earthy","Fresh","Surprising"];
	var kale_adj2 = ["greener than you'd like","healthy-looking","planty"];
	var kale_clause = ["with a vegetal aroma","with lots of fiber","would make your mom happy"];
	var kale_end = ["Not as bad as it looks.","Unfortunately, it's as bad as it looks."];

	//Then put those four arrays in one array object
	blend_array["kale"] = [kale_adj1,kale_adj2,kale_clause,kale_end];

	//oj
	var oj_adj1 = ["Bright","Citrusy","Acidic"];
	var oj_adj2 = ["sweet","drinkable","orangey"];
	var oj_clause = ["reminds you of breakfast","with lots of vitamin C"];
	var oj_end = ["This drink makes you happy but you don't know why.","You might consider making this again."];

	blend_array["oj"] = [oj_adj1,oj_adj2,oj_clause,oj_end];

	//banana
	var banana_adj1 = ["Tropical","Filling","Mellow"];
	var banana_adj2 = ["thick","mouth-coating","chalky"];
	var banana_clause = ["reminds you of breakfast","with lots of potassium","with lots of fiber"];
	var banana_end = ["This makes a decent meal replacement.","Looks a little lumpy."];

	blend_array["banana"] = [banana_adj1,banana_adj2,banana_clause,banana_end];

	//yogurt
	var yogurt_adj1 = ["Smooth","Creamy","Filling"];
	var yogurt_adj2 = ["delicious","drinkable","desserty"];
	var yogurt_clause = ["has lots of probiotics","not for the lactose intolerant"];
	var yogurt_end = ["It almost looks like a milkshake.","You'll still be full three hours later."];

	blend_array["yogurt"] = [yogurt_adj1,yogurt_adj2,yogurt_clause,yogurt_end];

	//choc
	var choc_adj1 = ["Brownish","Yummy"];
	var choc_adj2 = ["sweet","chocolatey"];
	var choc_clause = ["it's very rich","with a medicinal undertone"];
	var choc_end = ["There's something about this that reminds you of grade school cafeteria lunch."];

	blend_array["choc"] = [choc_adj1,choc_adj2,choc_clause,choc_end];

	//berry
	var berry_adj1 = ["Blue","Tart"];
	var berry_adj2 = ["berry","fruity"];
	var berry_clause = ["packed with antioxidants","has a bright, pleasant flavor"];
	var berry_end = ["You want your fresh blueberries back.","You might consider making this again."];

	blend_array["berry"] = [berry_adj1,berry_adj2,berry_clause,berry_end];

	//ruta
	var ruta_adj1 = ["Oddly starchy","Dense"];
	var ruta_adj2 = ["fibrous","chunky","starchy"];
	var ruta_clause = ["has a touch of horseradish","the liquid has flecks of red-brown"];
	var ruta_end = ["This is better than eating toothpaste.","This is the type of healthy drink that gives healthy drinks a bad name."];

	blend_array["ruta"] = [ruta_adj1,ruta_adj2,ruta_clause,ruta_end];

	//pizza
	var pizza_adj1 = ["Garlicky","Savory"];
	var pizza_adj2 = ["chunky","starchy","desperate"];
	var pizza_clause = ["there are bits of cheese in it","with an aroma of oregano"];
	var pizza_end = ["This was clearly a desperate attempt to get rid of some leftovers."];

	blend_array["pizza"] = [pizza_adj1,pizza_adj2,pizza_clause,pizza_end];

	//mango
	var mango_adj1 = ["Tropical","Tart"];
	var mango_adj2 = ["delicious","sweet","fruity"];
	var mango_clause = ["has a distinctive aroma","looks colorful"];
	var mango_end = ["This has an unplaceable aftertaste."];

	blend_array["mango"] = [mango_adj1,mango_adj2,mango_clause,mango_end];

	//catfd
	var catfd_adj1 = ["Stale-tasting","Meaty"];
	var catfd_adj2 = ["crunchy","pebbly","fishy"];
	var catfd_clause = ["it smells like cat food","you suddenly feel sick"];
	var catfd_end = ["This was a mistake."];

	blend_array["catfd"] = [catfd_adj1,catfd_adj2,catfd_clause,catfd_end];

	//sponge
	var sponge_adj1 = ["Dense","Chewy","Spongy"];
	var sponge_adj2 = ["soapy","fibrous"];
	var sponge_clause = ["smells strangely lemony","it's inedible"];
	var sponge_end = ["This was a mistake."];

	blend_array["sponge"] = [sponge_adj1,sponge_adj2,sponge_clause,sponge_end];

	//dirt
	var dirt_adj1 = ["Gritty","Earthy","Dense"];
	var dirt_adj2 = ["chunky","sandy", "sludgy"];
	var dirt_clause = ["it's extremely filling","with a muddy color"];
	var dirt_end = ["This was a mistake."];

	blend_array["dirt"] = [dirt_adj1,dirt_adj2,dirt_clause,dirt_end];

	//pb
	var pb_adj1 = ["Thick","Peanutty"];
	var pb_adj2 = ["rich","drinkable","filling"];
	var pb_clause = ["this is one thick drink","this has a lot of protein"];
	var pb_end = ["Your stomach might hurt if you drink it all.","Causes you to crave grape jelly.","You'll still be full three hours later."];

	blend_array["pb"] = [pb_adj1,pb_adj2,pb_clause,pb_end];

	//tj
	var tj_adj1 = ["Savory","Acidic"];
	var tj_adj2 = ["bright","fresh","vegetal"];
	var tj_clause = ["smells like a Bloody Mary","seems healthy"];
	var tj_end = ["Not what you expected, but not bad."];

	blend_array["tj"] = [tj_adj1,tj_adj2,tj_clause,tj_end];


//color
	function colors(red, green, blue){
		return {
			red:red,
			green:green,
			blue:blue,
		}
	};

	var rgb = {};

	rgb["kale"] = colors(52,90,59);
	rgb['oj'] = colors(255,157,10);
	rgb['berry'] = colors(63,71,126);
	rgb['banana'] = colors(255,255,178);
	rgb['yogurt'] = colors(255,249,229);
	rgb['choc'] = colors(74,48,0);
	rgb['ruta'] = colors(255,239,207);
	rgb['pizza'] = colors(229,177,127);
	rgb['mango'] = colors(255,182,40);
	rgb['catfd'] = colors(105,84,46);
	rgb['sponge'] = colors(114,173,22);
	rgb['dirt'] = colors(97,65,29);
	rgb['pb'] = colors(170,116,60);
	rgb['tj'] = colors(152,22,0);

	var totalred = 0;
	var totalgreen = 0;
	var totalblue = 0;

	

	//Array to hold each ingredient array as the loop proceeds.
	var ingredients_to_describe = [];
	var ingredients_to_list = [];

	//var color_values = [];
	
//Loop through checked items in the form. 
	function checked_loop() {
		$( "input:checked" ).each(function(i) {
			//What is checked?
			var value = $(this).val();
			var name = $('label[for="'+value+'"]').text();
			//Retrieve nutrition data for each ingredient and add it all up as we go. 
			totalcal += Number(ndata[value].cal);
			totalfat += Number(ndata[value].fat);
			totalsod += Number(ndata[value].sod);
			totalcarb += Number(ndata[value].carb);
			totalfib += Number(ndata[value].fiber);
			totalsug += Number(ndata[value].sugar);
			totalpro += Number(ndata[value].pro);
			totalvita += Number(ndata[value].vita);
			totalvitc += Number(ndata[value].vitc);
			totalcalc += Number(ndata[value].calc);
			//totaliron += Number(ndata[value].iron);

			totalred += Number(rgb[value].red);
			totalgreen += Number(rgb[value].green);
			totalblue += Number(rgb[value].blue);

			//Retrieve ingredient description arrays and add each to ingredients_to_describe
			ingredients_to_describe[i] = blend_array[value];
			ingredients_to_list[i] = name;
			//color_values[i] = value;
			//ingredients_to_describe.length = ingredient_number;
			//console.log(totalblue);
		});

	};


function color_liquid () {
		checked_loop();
		var average = ingredients_to_describe.length;

		var halfred = totalred / 2;
		var halfgreen = totalgreen / 2;
		var halfblue = totalblue / 2;

		var liquidred = Math.round(halfred / average);
		var liquidgreen = Math.round(halfgreen / average);
		var liquidblue = Math.round(halfblue / average);

		$( "#liquid" ).animate({
			backgroundColor: "rgb(" + liquidred + "," + liquidgreen + ","  + liquidblue + ")",
			}, 1000 );
	};


//Using our loop data, randomly choose the description elements to assemble.

	//Adjective 1
	function choose_adj1 () {
		//Loop data
		checked_loop();
		// How many ingredients are there?	
		var ingredient_count = ingredients_to_describe.length;
		// Pick a random ingredient array to pluck a description element from.
		var random_ingredient_array = Math.floor((Math.random()*ingredient_count));
		// Pick the [0] place in our random ingredient array (the one that holds the first adjective)
		var choose_ingredient_array = ingredients_to_describe[random_ingredient_array][0];
		// Figure out how many items are in that [0] array
		var length_adj1 = choose_ingredient_array.length;
		// Pick a random number that is not longer than the amount of elements in the [0] array
		var random_adj1 = Math.floor((Math.random()*length_adj1));
		// Finally, choose the random adjective 1 word
		var adj1 = choose_ingredient_array[random_adj1];
		return adj1;
	};

	//Adjective 2
	function choose_adj2 () {
		checked_loop();

		//I realize that I repeat this line in each funtion: var ingredient_count = ingredients_to_describe.length;
		// I tried accessing the ingredients_to_describe variable outside these description functions 
		//(inside checked_loop() but outside the .each portion, and also directly after the entire function)
		//but it came up undefined each time. Is there another way to access ingredients_to_describe without repeating it? 	
		var ingredient_count = ingredients_to_describe.length;

		var random_ingredient_array = Math.floor((Math.random()*ingredient_count));
		var choose_ingredient_array = ingredients_to_describe[random_ingredient_array][1];
		var length_adj2 = choose_ingredient_array.length;
		var random_adj2 = Math.floor((Math.random()*length_adj2));
		var adj2 = choose_ingredient_array[random_adj2];
		return adj2;
	};

	//Clause
	function choose_clause () {
		checked_loop();
		var ingredient_count = ingredients_to_describe.length;
		var random_ingredient_array = Math.floor((Math.random()*ingredient_count));
		var choose_ingredient_array = ingredients_to_describe[random_ingredient_array][2];
		var length_clause= choose_ingredient_array.length;
		var random_clause = Math.floor((Math.random()*length_clause));
		var clause = choose_ingredient_array[random_clause];
		return clause;
	};

	//End summary
	function choose_end () {
		checked_loop();
		var ingredient_count = ingredients_to_describe.length;
		var random_ingredient_array = Math.floor((Math.random()*ingredient_count));
		var choose_ingredient_array = ingredients_to_describe[random_ingredient_array][3];
		var length_end = choose_ingredient_array.length;
		var random_end = Math.floor((Math.random()*length_end));
		var end = choose_ingredient_array[random_end];
		return end;
	};

//Size the animation container
	function size () {
		var multiplier = ingredients_to_describe.length;
		var height = (multiplier * 30)+5;
		$("#liquid").css('height', height + 'px');
		//console.log(multiplier);
		//console.log(height);
	};





//Click Blend 
	$("#blendbutton").click(function() {
		checked_loop();
			if (ingredients_to_describe.length === 0) {
				alert("There is nothing to blend.")
			} else {
			size();
			color_liquid ();
			//color();
			initialiseAnimatedImages();
			$("#list").addClass("display-none");
			var names = ingredients_to_list.join();

			//Output nutrition data totals
			$("#data").removeClass("display-none");
			$("#names").append(names);
			$("#calories").append(totalcal);
			$("#fat").append(totalfat + "g");
			$("#sod").append(totalsod + "g");
			$("#carb").append(totalcarb + "g");
			$("#fiber").append(totalfib + "g");
			$("#sugar").append(totalsug + "g");
			$("#protein").append(totalpro + "g");
			$("#vita").append(totalvita + "%DV");
			$("#vitc").append(totalvitc + "%DV");
			$("#calc").append(totalcalc + "%DV");
			//$("#iron").append(totaliron);

			//Output random description
			$("#desc").append(choose_adj1() + " and " + choose_adj2() + ", " + choose_clause() + ". " + choose_end());

			$("#maskblendbutton").removeClass("display-none");
		};
	});


//Clear checkboxes and ingredient divs	        
	function clear() {
		$( "input:checked" ).each(function() {
			var value   = $(this).val();
			$("input").prop('checked', false);
			$("." + value).remove();
		});
		$("#data").addClass("display-none");
		$("#list").removeClass("display-none");
		$("#maskblendbutton").addClass("display-none");
		$("#names").text("Ingredients: ");
		$("#calories").text("");
		$("#fat").text("");
		$("#sod").text("");
		$("#carb").text("");
		$("#fiber").text("");
		$("#sugar").text("");
		$("#protein").text("");
		$("#vita").text("");
		$("#vitc").text("");
		$("#calc").text("");
		//$("#iron").text("");
		$("#desc").text("");
		totalcal = 0;
		totalfat = 0;
		totalsod = 0;
		totalcarb = 0;
		totalfib = 0;
		totalsug = 0;
		totalpro = 0;
		totalvita = 0;
		totalvitc = 0;
		totalcalc = 0;
		totalcalc = 0;
		totalcalc = 0;
		//totaliron = 0;
		totalred = 0;
		totalgreen = 0;
		totalblue = 0;
		ingredients_to_describe = [];
		ingredients_to_list = [];
		names = "";
		$('#liquid').hide();
		$('#liquid').css('background-color','#FFF');
	};

$("#clear").click(function (){
	clear();
});
	
$(document).ready(function(){
	clear();
});