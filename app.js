alert("Welcome to ARS Resturant.")

// main logic

var menu = prompt("Enter the item. Available item is Biryani, Pulao, Karahi, Barbque, Handi , Pizza and Dessert. ")
document.getElementById("menu").innerHTML = menu;

// biryani logic

if (menu.toLowerCase() === "biryani") {
    var biryani = prompt("Available types of Biryani: Beef Biryani, Chicken Biryani, Chinese Biryani and Mutton Biryani.")
    document.getElementById("Types").innerHTML = biryani;
    // beef biryani logic
    if (biryani.toLowerCase() == "beef biryani") {
        var size = prompt("Beef Briyani 560 rupee per kg. Enter your kg")
        document.getElementById("size").innerHTML = size;
        if (size == "250gram") {
            var total = 186
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "500gram") {
            var total = 280
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "750gram") {
            var total = 374
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = size * 560
            document.getElementById("amount").innerHTML = total;
        }
    }
    // chicken biryani logic
    else if (biryani.toLowerCase() == "chicken biryani") {
        var size = prompt("Chicken Briyani 480 rupee per kg. Enter your quantity")
        document.getElementById("size").innerHTML = size;
        if (size == "250gram") {
            var total = 160
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "500gram") {
            var total = 240
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "750gram") {
            var total = 320
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = size * 480
            document.getElementById("amount").innerHTML = total + "kg";
        }
    }
    // chinese biryani logic
    else if (biryani.toLowerCase() == "chinese biryani") {
        var size = prompt("Chinese Briyani 600 rupee per kg. Enter your quantity")
        document.getElementById("size").innerHTML = size;
        if (size == "250gram") {
            var total = 150
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "500gram") {
            var total = 300
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "750gram") {
            var total = 450
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = size * 600
            document.getElementById("amount").innerHTML = total + "kg";
        }
    }
    //  mutton biryani logic
    else if (biryani.toLowerCase() == "mutton biryani") {
        var size = prompt("Mutton Briyani 700 rupee per kg. Enter your quantity")
        document.getElementById("size").innerHTML = size + "kg";
        if (size == "250gram") {
            var total = 233
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "500gram") {
            var total = 350
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "750gram") {
            var total = 367
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = size * 700
            document.getElementById("amount").innerHTML = total + "kg";
        }
    }
    else {
        alert("This Biryani Flavour is not Available")
    }
    // biryani logic is end
    // pulao logic is start
}
else if (menu.toLowerCase() == "pulao") {
    var pulao = prompt("Available types of Pulao: Beef Pulao, Chicken Pulao, Chinese Pulao and Mutton Pulao.")
    document.getElementById("Types").innerHTML = pulao;
    // beef pulao logic
    if (pulao.toLowerCase() == "beef pulao") {
        var size = prompt("Beef pulao 520 rupee per kg. Enter your kg")
        document.getElementById("size").innerHTML = size + "kg";
        if (size == "250gram") {
            var total = 173
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "500gram") {
            var total = 260
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "750gram") {
            var total = 347
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = size * 520
            document.getElementById("amount").innerHTML = total + "kg";
        }
    }
    // chicken pulao logic
    else if (pulao.toLowerCase() == "chicken pulao") {
        var size = prompt("Chicken pulao 450 rupee per kg. Enter your kg")
        document.getElementById("size").innerHTML = size + "kg";
        if (size == "250gram") {
            var total = 112
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "500gram") {
            var total = 225
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "750gram") {
            var total = 338
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = size * 450
            document.getElementById("amount").innerHTML = total + "kg";
        }
    }
    // chinese pulao logic
    else if (pulao.toLowerCase() == "chinese pulao") {
        var size = prompt("Chinese pulao 640 rupee per kg. Enter your kg")
        document.getElementById("size").innerHTML = size + "kg";
        if (size == "250gram") {
            var total = 480
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "500gram") {
            var total = 320
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "570gram") {
            var total = 160
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = size * 450
            document.getElementById("amount").innerHTML = total + "kg";
        }
    }
    // mutton pulao logic
    else if (pulao.toLowerCase() == "mutton pulao") {
        var size = prompt("Mutton pulao 660 rupee per kg. Enter your kg")
        document.getElementById("size").innerHTML = size + "kg";
        if (size == "250gram") {
            var total = 165
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "500gram") {
            var total = 330
            document.getElementById("amount").innerHTML = total;
        }
        else if (size == "750gram") {
            var total = 495
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = size * 450
            document.getElementById("amount").innerHTML = total + "kg";
        }
    }
    else {
        alert("This Pulao Flavour is not Available")
    }
}
// karahi logic start 
else if (menu.toLowerCase() == "karahi") {
    var karahi = prompt("Available types of Karahi: Chicken Karahi, Chicken White Karahi, Chicken Koila Karahi, Mutton karahi, Hara Masala Mutton Karahi and Mutton Sulemani Karahi.")
    document.getElementById("Types").innerHTML = karahi;
    // chicken karahi logic
    if (karahi.toLowerCase() == "chicken karahi") {
        var item = prompt("Chicken Karahi 1800 rupee per kg. Chicken Karahi 900 rupee Half kg.")
        if (item.toLowerCase() == "1") {
            var total = 1800
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total
        }
        else if (item.toLowerCase() == "half kg") {
            var total = 900
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = 1800 * item
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
    }
    // chicken white karahi logic 
    else if (karahi.toLowerCase() == "chicken white karahi") {
        var item = prompt("Chicken White Karahi 2200 rupee per kg. Chicken Karahi 1100 rupee Half kg.")
        if (item.toLowerCase() == "1") {
            var total = 2200
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total
        }
        else if (item.toLowerCase() == "half kg") {
            var total = 1100
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = 2200 * item
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
    }
    else if (karahi.toLowerCase() == "chicken koila karahi") {
        var item = prompt("Chicken Koila Karahi 1600 rupee per kg. Chicken Karahi 800 rupee Half kg.")
        if (item.toLowerCase() == "1") {
            var total = 1600
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total
        }
        else if (item.toLowerCase() == "half kg") {
            var total = 800
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = 1600 * item
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
    }
    else if (karahi.toLowerCase() == "mutton karahi") {
        var item = prompt("Mutton Karahi 2600 rupee per kg. Chicken Karahi 1300 rupee Half kg.")
        if (item.toLowerCase() == "1") {
            var total = 2600
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total
        }
        else if (item.toLowerCase() == "half kg") {
            var total = 1300
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = 2600 * item
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
    }
    else if (karahi.toLowerCase() == "hara masala mutton karahi") {
        var item = prompt("Chicken Koila Karahi 2400 rupee per kg. Chicken Karahi 1200 rupee Half kg.")
        if (item.toLowerCase() == "1") {
            var total = 2400
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total
        }
        else if (item.toLowerCase() == "half kg") {
            var total = 1200
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = 2200 * item
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
    }
    else if (karahi.toLowerCase() == "muton sulemani karahi") {
        var item = prompt("Mutton Sulemani Karahi 2800 rupee per kg. Chicken Karahi 1400 rupee Half kg.")
        if (item.toLowerCase() == "1") {
            var total = 2800
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total
        }
        else if (item.toLowerCase() == "half kg") {
            var total = 1400
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
        else {
            var total = 2800 * item
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = total;
        }
    }
    // karahi logic is end
}
// Barbque logic is start
else if (menu.toLowerCase() == "barbque") {
    var barbque = prompt("Available types of Barbque: Chicken Tikka, Chicken Boti, Chicken Kastoori Boti, Beef Boti, Beef Bihari Kabab and Beef Kabab.")
    document.getElementById("Types").innerHTML = barbque;
    if (barbque.toLowerCase() == "chicken tikka") {
        var item = prompt("Chicken Tikka Price is Rs.400")
        document.getElementById("size").innerHTML = item;
        document.getElementById("amount").innerHTML = item * 400;
    }
    else if (barbque.toLowerCase() == "chicken boti") {
            var item = prompt("Chicken Boti Price is Rs.850")
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = item * 850;
    }
    else if (barbque.toLowerCase() == "chicken kastoori boti") {
            var item = prompt("Chicken Boti Price is Rs.900")
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = item * 900;
    }
    else if (barbque.toLowerCase() == "beef boti") {
            var item = prompt("Beef Boti Price is Rs.850")
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = item * 850;
    }
    else if (barbque.toLowerCase() == "beef bihari kabab") {
            var item = prompt("Beef Bihari Kabab Price is Rs.850")
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = item * 850;
    }
    else if (barbque.toLowerCase() == "beef kabab") {
            var item = prompt("Beef Kabab Price is Rs.850")
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = item * 850;
    }
    else {
        alert("This Item Is Not Available Rigth Now.")
    }
    // barbque logic is end
}
// handi logic is start
else if (menu.toLowerCase() == "handi") {
    var handi = prompt("Available types of Handi: Chicken Paneer handi, Mutton handi, Chicken Shahi Handi, Chicken Makhni Handi and Chicken Boneless Handi.")
    document.getElementById("Types").innerHTML = handi;
    if (handi.toLowerCase() == "chicken paneer handi") {
        var item = prompt("Chicken Paneer Handi 2500 rupee per kg. Chicken Paneer Handi 1250 per kg.")
        if (item.toLowerCase() == "half kg") {
            var size = 1250;
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = size;
        }
        else {
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = 2500 * item;
        }
    }
    if (handi.toLowerCase() == "mutton handi") {
        var item = prompt("Mutton Handi 3150 rupee per kg. Chicken Paneer Handi 1575 per kg.")
        if (item.toLowerCase() == "half kg") {
            var size = 1575;
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = size;
        }
        else {
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = 3150 * item;
        }
    }
    if (handi.toLowerCase() == "chicken shahi handi") {
        var item = prompt("Chicken Shahi 2500 rupee per kg. Chicken Shahi Handi 1250 per kg.")
        if (item.toLowerCase() == "half kg") {
            var size = 1250;
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = size;
        }
        else {
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = 2500 * item;
        }
    }
    if (handi.toLowerCase() == "chicken makhni handi") {
        var item = prompt("Chicken Makhni Handi 2500 rupee per kg. Chicken Makhni Handi 1250 per kg.")
        if (item.toLowerCase() == "half kg") {
            var size = 1250;
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = size;
        }
        else {
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = 2500 * item;
        }
    }
    if (handi.toLowerCase() == "chicken boneless handi") {
        var item = prompt("Chicken Boneless Handi 2500 rupee per kg. Chicken Boneless Handi 1250 per kg.")
        if (item.toLowerCase() == "half kg") {
            var size = 1250;
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = size;
        }
        else {
            document.getElementById("size").innerHTML = item;
            document.getElementById("amount").innerHTML = 2500 * item;
        }
    }
    // handi logic is end
}
// pizza logic is start
else if (menu.toLowerCase() == "pizza") {
    var pizza = prompt("Available types of pizza: Arabic, Fajita, Chicken Tikka, Creamy and Barbque.")
    document.getElementById("Types").innerHTML = pizza;
    if (pizza.toLowerCase() == "arabic" || pizza.toLowerCase() == "fajita" || pizza.toLowerCase() == "chicken tikka" || pizza.toLowerCase() == "creamy" || pizza.toLowerCase() == "barbque") {
        var item = prompt("Enter the size: Large price Rs.900, Medium price Rs.600 and Small price Rs.300.")
        if (item.toLowerCase() == "large") {
            var size = 900;
            var quantity = prompt("Enter the quantity")
            document.getElementById("size").innerHTML = quantity;
            document.getElementById("amount").innerHTML = 900 * quantity;
        }
        else if (item.toLowerCase() == "medium") {
            var size = 600;
            var quantity = prompt("Enter the quantity")
            document.getElementById("size").innerHTML = quantity;
            document.getElementById("amount").innerHTML = 600 * quantity;
        }
        else if (item.toLowerCase() == "small") {
            var size = 300;
            var quantity = prompt("Enter the quantity")
            document.getElementById("size").innerHTML = quantity;
            document.getElementById("amount").innerHTML = 300 * quantity;
        }
    }
    // pizza logic is end
}
else if (menu.toLowerCase() == "dessert") {
    var pizza = prompt("Available But In Process.")
    document.getElementById("Types").innerHTML = pizza;
}
else {
    alert("This Item Is Not Available Rigth Now.")
}
