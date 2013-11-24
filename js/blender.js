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
	function nutrition(cal, fat, carb, pro, vit){
		return {
			cal:cal,
			fat:fat,
			carb:carb,
			pro:pro,
			vit:vit,
		}
	};

	//Store the actual data per item in an array object
	var ndata = {};

	ndata["kale"] = nutrition(33, 0, 7, 2, 137);
	ndata["oj"] = nutrition(112, 0, 26, 2, 10);
	ndata["banana"] = nutrition(133, 0, 34, 2, 2);
	ndata["yogurt"] = nutrition(154, 4, 17, 13, 2);
	ndata["choc"] = nutrition(33, 0, 7, 2, 137);
	ndata["ruta"] = nutrition(33, 0, 7, 2, 137);
	ndata["pizza"] = nutrition(33, 0, 7, 2, 137);
	ndata["mango"] = nutrition(33, 0, 7, 2, 137);
	ndata["catfd"] = nutrition(33, 0, 7, 2, 137);
	ndata["sponge"] = nutrition(33, 0, 7, 2, 137);
	ndata["dirt"] = nutrition(33, 0, 7, 2, 137);
	ndata["pb"] = nutrition(33, 0, 7, 2, 137);
	ndata["tj"] = nutrition(33, 0, 7, 2, 137);


	//Variables to hold totals for each data value as the loop proceeds. Ready to calculate, sir!
	var totalcal = 0;
	var totalfat = 0;
	var totalcarb = 0;
	var totalpro = 0;
	var totalvit = 0;


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
	var kale_end = ["Not as bad as it looks.","As bad as it looks."];

	//Then put those four arrays in one array object
	blend_array["kale"] = [kale_adj1,kale_adj2,kale_clause,kale_end];

	//oj
	var oj_adj1 = ["Bright","Citrusy","Acidic"];
	var oj_adj2 = ["sweet","drinkable","orangey"];
	var oj_clause = ["reminds you of breakfast","with lots of vitamin C","makes you happy"];
	var oj_end = ["Pretty good.","You might consider making this again."];

	blend_array["oj"] = [oj_adj1,oj_adj2,oj_clause,oj_end];

	//banana
	var banana_adj1 = ["Tropical","Filling","Mellow"];
	var banana_adj2 = ["thick","mouth-coating","goofy"];
	var banana_clause = ["reminds you of breakfast","with lots of potassium","with lots of fiber"];
	var banana_end = ["This makes a decent meal replacement.","Looks a little lumpy."];

	blend_array["banana"] = [banana_adj1,banana_adj2,banana_clause,banana_end];

	//yogurt
	var yogurt_adj1 = ["Smooth","Creamy","Filling"];
	var yogurt_adj2 = ["delicious","drinkable","desserty"];
	var yogurt_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var yogurt_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["yogurt"] = [yogurt_adj1,yogurt_adj2,yogurt_clause,yogurt_end];

	//choc
	var choc_adj1 = ["Smooth","Creamy","Filling"];
	var choc_adj2 = ["delicious","drinkable","desserty"];
	var choc_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var choc_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["choc"] = [choc_adj1,choc_adj2,choc_clause,choc_end];

	//ruta
	var ruta_adj1 = ["Smooth","Creamy","Filling"];
	var ruta_adj2 = ["delicious","drinkable","desserty"];
	var ruta_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var ruta_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["ruta"] = [ruta_adj1,ruta_adj2,ruta_clause,ruta_end];

	//pizza
	var pizza_adj1 = ["Smooth","Creamy","Filling"];
	var pizza_adj2 = ["delicious","drinkable","desserty"];
	var pizza_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var pizza_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["pizza"] = [pizza_adj1,pizza_adj2,pizza_clause,pizza_end];

	//mango
	var mango_adj1 = ["Smooth","Creamy","Filling"];
	var mango_adj2 = ["delicious","drinkable","desserty"];
	var mango_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var mango_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["mango"] = [mango_adj1,mango_adj2,mango_clause,mango_end];

	//catfd
	var catfd_adj1 = ["Smooth","Creamy","Filling"];
	var catfd_adj2 = ["delicious","drinkable","desserty"];
	var catfd_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var catfd_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["catfd"] = [catfd_adj1,catfd_adj2,catfd_clause,catfd_end];

	//sponge
	var sponge_adj1 = ["Smooth","Creamy","Filling"];
	var sponge_adj2 = ["delicious","drinkable","desserty"];
	var sponge_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var sponge_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["sponge"] = [sponge_adj1,sponge_adj2,sponge_clause,sponge_end];

	//dirt
	var dirt_adj1 = ["Smooth","Creamy","Filling"];
	var dirt_adj2 = ["delicious","drinkable","desserty"];
	var dirt_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var dirt_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["dirt"] = [dirt_adj1,dirt_adj2,dirt_clause,dirt_end];

	//pb
	var pb_adj1 = ["Smooth","Creamy","Filling"];
	var pb_adj2 = ["delicious","drinkable","desserty"];
	var pb_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var pb_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["pb"] = [pb_adj1,pb_adj2,pb_clause,pb_end];

	//tj
	var tj_adj1 = ["Smooth","Creamy","Filling"];
	var tj_adj2 = ["delicious","drinkable","desserty"];
	var tj_clause = ["has lots of probiotics","not for the lactose intolerant","it's a nifty drink"];
	var tj_end = ["This is better than eating toothpaste.","You'll still be full three hours later."];

	blend_array["tj"] = [tj_adj1,tj_adj2,tj_clause,tj_end];


	//Array to hold each ingredient array as the loop proceeds.
	var ingredients_to_describe = [];
	var ingredients_to_list = [];
	

//Loop through checked items in the form. 
	function checked_loop() {
		$( "input:checked" ).each(function(i) {
			//What is checked?
			var value = $(this).val();
			var name = $('label[for="'+value+'"]').text();
			//Retrieve nutrition data for each ingredient and add it all up as we go. 
			totalcal += Number(ndata[value].cal);
			totalfat += Number(ndata[value].fat);
			totalcarb += Number(ndata[value].carb);
			totalpro += Number(ndata[value].pro);
			totalvit += Number(ndata[value].vit);
			//Retrieve ingredient description arrays and add each to ingredients_to_describe
			ingredients_to_describe[i] = blend_array[value];
			ingredients_to_list[i] = name;
			//ingredients_to_describe.length = ingredient_number;
			//console.log(name);
		});

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

//color
	function color() {
			$( "#liquid" ).animate({
			backgroundColor: "#aa0000",
			}, 1000 );
		
		};

//Click Blend 
	$("#blendbutton").click(function() {
		checked_loop();
			if (ingredients_to_describe.length === 0) {
				alert("There is nothing to blend.")
			} else {
			size();
			color();
			initialiseAnimatedImages();
			$("#list").addClass("display-none");
			var names = ingredients_to_list.join();

			//Output nutrition data totals
			$("#data").removeClass("display-none");
			$("#names").append(names);
			$("#calories").append(totalcal);
			$("#fat").append(totalfat);
			$("#carb").append(totalcarb);
			$("#protein").append(totalpro);
			$("#vit_a").append(totalvit);

			//Output random description
			$("#desc").append(choose_adj1() + " and " + choose_adj2() + ", " + choose_clause() + ". " + choose_end());
		};
	});


//Clear button, clears checkboxes and ingredient divs	        
	$("#clear").click (function() {
		$( "input:checked" ).each(function() {
			var value   = $(this).val();
			$("input").prop('checked', false);
			$("." + value).remove();
		});
		$("#data").addClass("display-none");
		$("#list").removeClass("display-none");
		$("#names").text("Ingredients: ");
		$("#calories").text("Calories: ");
		$("#fat").text("Fat: ");
		$("#carb").text("Carbohydrate: ");
		$("#protein").text("Protein: ");
		$("#vit_a").text("Vitamin A: ");
		$("#desc").text("");
		totalcal = 0;
		totalfat = 0;
		totalcarb = 0;
		totalpro = 0;
		totalvit = 0;
		ingredients_to_describe = [];
		ingredients_to_list = [];
		names = "";
		$('#liquid').hide();
		$('#liquid').css('background-color','#FFF');
	});
