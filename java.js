/*********************************
 GET FOOD FROM URL
**********************************/
const params = new URLSearchParams(window.location.search);
let foodName = params.get("food") || "Jollof Rice";

/*********************************
 FOOD NAME FIX
**********************************/
const foodKeyMap = {
  jollof: "Jollof Rice",
  waakye: "Waakye",
  banku: "Banku",
  fufu: "Fufu with Light Soup",
  pizza: "Pizza",
  burger: "Burger",
  wings: "Chicken Wings",
  shawarma: "Shawarma",
  cake: "Cake",
  donut: "Donuts",
  donuts: "Donuts",
  "icecream": "Ice Cream",
  "ice cream": "Ice Cream",
  juice: "juice",
  milkshake: "Milkshake"
};

foodName = foodKeyMap[foodName.toLowerCase()] || foodName;

document.getElementById("food-name").textContent = foodName;

/*********************************
 NORMALIZER
**********************************/
function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, "_");
}

/*********************************
 FOOD MAIN IMAGE
**********************************/
const foodImages = {
  "Jollof Rice": "images/jollof.jpg",
  "Waakye": "images/wakye.jpg",
  "Banku": "images/banku.jpg",
  "Fufu with Light Soup": "images/fufu (2).jpg",
  "Pizza": "images/pizza.jpg",
  "Burger": "images/burger.jpg",
  "Chicken Wings": "images/wings.jpg",
  "Shawarma": "images/shawarma.jpg",
  "Cake": "images/cake.jpg",
  "Donuts": "images/Donuts.jpg",
  "Ice Cream": "images/ice_cream.jpg",
  "juice": "images/juice.jpg",
  "Milkshake": "images/milkshake.jpg"
};

document.getElementById("food-image").src =
  foodImages[foodName] || "images/placeholder.png";

/*********************************
 FOOD DESCRIPTIONS
**********************************/
const foodDescriptions = {
  "Jollof Rice": "Spicy West African rice served with delicious protein options.",
  "Waakye": "Rice and beans served with traditional Ghanaian accompaniments.",
  "Banku": "Fermented corn and cassava dough served with soup or stew.",
  "Fufu with Light Soup": "Soft pounded fufu served with tasty light soup.",
  "Pizza": "Cheesy pizza with customizable toppings.",
  "Burger": "Juicy burger prepared with fresh ingredients.",
  "Chicken Wings": "Crispy spicy wings grilled to perfection.",
  "Shawarma": "Middle Eastern wrap filled with seasoned meat.",
  "Cake": "Soft and moist cake perfect for celebrations.",
  "Donuts": "Sweet fluffy donuts with delicious flavours.",
  "Ice Cream": "Creamy ice cream available in scoops.",
  "juice": "Refreshing fruit juice made from fresh fruits.",
  "Milkshake": "Thick and creamy milkshake."
};

document.getElementById("food-description").textContent =
  foodDescriptions[foodName] || "";

/*********************************
 FOOD OPTIONS
**********************************/
const foodOptions = {
  "Jollof Rice": {
    sizes: ["Small", "Medium", "Large"],
    sides: ["None", "Fries", "Plantain", "Salad", "Chicken", "Fishie"],
    drinks: ["None", "Coke", "Fanta", "Water", "Sobolo"]
  },
  "Waakye": {
    sizes: ["Min", "Mid", "Jumbo"],
    sides: ["None", "Salad", "Spaghetti", "Plantain", "Chicken", "Cassava Fish"],
    drinks: ["None", "Coke", "Fanta", "Water"]
  },
  "Banku": {
    sizes: ["1 Ball", "2 Balls", "3 Balls"],
    sides: ["None", "Plantain", "Salad", "Fish"],
    drinks: ["None", "Water", "Sobolo"]
  },
  "Fufu with Light Soup": {
    sizes: ["1 Wrap", "2 Wraps"],
    sides: ["None", "Extra Meat", "Extra Chicken"],
    drinks: ["None", "Water"]
  },
  "Pizza": {
    sizes: ["Small sz", "Medium sz", "Large sz"],
    sides: ["None", "Extra Cheese", "Chicken on Pizza", "Extra Sausage"],
    drinks: ["None", "Coke", "Fanta"]
  },
  "Burger": {
    sizes: ["Single", "Double"],
    sides: ["None", "Fries", "Extra Patty", "Cheese"],
    drinks: ["None", "Coke", "Fanta"]
  },
  "Chicken Wings": {
    sizes: ["6 pcs", "12 pcs"],
    sides: ["None", "Fries", "Extra Sauce"],
    drinks: ["None", "Coke", "Fanta"]
  },
  "Shawarma": {
    sizes: ["Normal", "Meat"],
    sides: ["None", "Fries", "Extra Sauce"],
    drinks: ["None", "Coke", "Fanta"]
  },
  "Cake": {
    sizes: ["Slice", "Half Cake", "Full Cake"],
    sides: ["None", "Ice Cream", "Whipped Cream", "Extra Toppings"],
    drinks: ["None", "Milkshake"]
  },
  "Donuts": {
    sizes: ["Chocolate", "Vanilla", "Strawberry"],
    sides: ["None", "Ice Cream", "Whipped Cream"],
    drinks: ["None", "Milkshake"]
  },
  "Ice Cream": {
    sizes: ["1 Scoop", "2 Scoops", "3 Scoops"],
    sides: ["None", "Chocolate Syrup", "Sprinkles"],
    drinks: ["None"]
  },
  "juice": {
    sizes: ["Lemon", "Watermelon", "Strawberries", "Mango"],
    sides: ["None"],
    drinks: ["None"]
  },
  "Milkshake": {
    sizes: ["Small one", "Medium one", "Large one"],
    sides: ["None", "Extra Cream"],
    drinks: ["None"]
  }
};

/*********************************
 POPULATE SELECT ELEMENTS
**********************************/
function populateSelect(id, items) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = normalize(item);
    option.textContent = item;
    select.appendChild(option);
  });
}

const currentFood = foodOptions[foodName];

if (!currentFood) {
  console.error("No options found for:", foodName);
} else {
  populateSelect("size", currentFood.sizes);
  populateSelect("sides", currentFood.sides);
  populateSelect("drinks", currentFood.drinks);
}

/*********************************
 IMAGE MAPS
**********************************/
const sizeImages = {
  small: "images/jollof_small.png",
  medium: "images/jollof.jpg",
  large: "images/jollof_large.png",
  min: "images/jollof_small.png",
  mid: "images/jollof.jpg",
  jumbo: "images/jollof_large.png",
  "1_ball": "images/placeholder.png",
  "2_balls": "images/placeholder.png",
  "3_balls": "images/placeholder.png",
  "1_wrap": "images/placeholder.png",
  "2_wraps": "images/placeholder.png",
  small_sz: "images/smallpizza.png",
  medium_sz: "images/pizza.jpg",
  large_sz: "images/jollof_large.png",
  single: "images/single.png",
  double: "images/double.png",
  normal: "images/shawarma.jpg",
  meat: "images/extrameat.png",
  "6_pcs": "images/6_pcs.png",
  "12_pcs": "images/12_pcs.png",
  slice: "images/slice.png",
  half_cake: "images/half.png",
  full_cake: "images/cake.jpg",
  chocolate: "images/dchoc.png",
  vanilla: "images/dvan.png",
  strawberry: "images/dstraw.png",
  "1_scoop": "images/scoop1.png",
  "2_scoops": "images/scoop2.png",
  "3_scoops": "images/scoop3.png",
  lemon: "images/lemon.png",
  watermelon: "images/watermelon.png",
  strawberries: "images/strawberry.png",
  mango: "images/mango.png",
  small_one: "images/smallmilk.png",
  medium_one: "images/milkshake.jpg",
  large_one: "images/bigmilk.png"
};

const sideImages = {
  none: "images/placeholder.png",
  fries: "images/fries.png",
  plantain: "images/plantain.png",
  salad: "images/salad.png",
  spaghetti: "images/spaghetti.png",
  fishie: "images/jolloffish.png",
  fish: "images/bankufish.png",
  chicken: "images/chicken.png",
  extra_chicken: "images/fufuchicken.png",
  extra_meat: "images/fufugoat.png",
  meat: "images/extrameat.png",
  extra_cheese: "images/cheesepizza.png",
  extra_sausage: "images/peppizza.png",
  extra_patty: "images/patty.png",
  extra_sauce: "images/sauce.png",
  chicken_on_pizza: "images/meatpizza.png",
  ice_cream: "images/ice_cream.png",
  whipped_cream: "images/whipped.png",
  extra_toppings: "images/toppings.png",
  chocolate_syrup: "images/syrup.png",
  sprinkles: "images/springle.png",
  extra_cream: "images/whipped.png"
};

const drinkImages = {
  none: "images/placeholder.png",
  coke: "images/coke.png",
  fanta: "images/fanta.png",
  water: "images/water.png",
  sobolo: "images/sobolo.jpg",
  milkshake: "images/milkshake.png"
};

/*********************************
 PREVIEW CHANGE EVENTS
**********************************/
document.getElementById("size").addEventListener("change", e => {
  document.getElementById("size-preview").src =
    sizeImages[e.target.value] || "images/placeholder.png";
});

document.getElementById("sides").addEventListener("change", e => {
  document.getElementById("side-preview").src =
    sideImages[e.target.value] || "images/placeholder.png";
});

document.getElementById("drinks").addEventListener("change", e => {
  document.getElementById("drink-preview").src =
    drinkImages[e.target.value] || "images/placeholder.png";
});

function goToWhatsApp() {
  window.location.href = "https://wa.me/233248854776";
}


