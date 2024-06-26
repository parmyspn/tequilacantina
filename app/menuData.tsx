import { Menu } from "./Types";

const menuData: Menu = {
  menuTabs: [
    {
      id: 1,
      name: "Appetizers",
      sections: [
        {
          title: "Appetizers",
          menuItems: [
            {
              name: "Guacamole",
              description:
                "freshly mashed avocado topped with pico de gallo, feta cheese and a side of our house-made chips.",
              price: 16.99,
            },
            {
              name: "Frijoles Puercos",
              description:
                "mix of refried beans with chorizo, jalapeño, feta cheese and a side of our house-made chips.",
              price: 10.99,
            },
            {
              name: "Chimichanga",
              description:
                "fried flour tortilla, tinga de pollo, mozzarella, salad and chipotle mayo.",
              price: 18.99,
            },
            {
              name: "Nachos",
              description:
                "corn chips topped with refried beans, melted mozzarella cheese, pico de gallo, sour cream, jalapeños and guacamole.",
              price: 17.99,
              addOn: [
                {
                  description: "asada, pastor, chorizo, tinga de pollo",
                  price: 6.99,
                },
              ],
            },
            {
              name: "Ceviche",
              description:
                "prawns marinated in lime, tossed with red onions, tomato, cilantro, cucumbers and chef’s sauce.",
              price: 20.99,
            },
            {
              name: "Aguachile De Camaron",
              description:
                "8oz raw prawns, spicy salsa aguachile, cucumbers and red onions.",
              price: 21.99,
            },
            {
              name: "Queso Fundido",
              description:
                "melted mozzarella cheese dip topped with onions, cilantro, salsa verde and a side of our house-made chips.",
              price: 15.99,
              addOn: [
                {
                  description: "asada, pastor, chorizo, tinga de pollo",
                  price: 6.99,
                },
              ],
            },
          ],
        },
        {
          title: "Soups",
          menuItems: [
            {
              name: "Tarasca",
              description:
                "creamy soup made of jitomate and beans topped with feta cheese, tortilla strips, avocado, sour cream and fried ancho chiles.",
              price: 12.99,
            },
            {
              name: "Birria",
              description:
                "consommé with shredded beef served with onions and cilantro. Comes with a side of 5 corn tortillas and salsa picante.",
              price: 14.99,
              addOn: [
                {
                  description: "Sub 5 flour tortillas",
                  price: 1.99,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Mains",
      sections: [
        {
          title: "Mains",
          menuItems: [
            {
              name: "Chile Relleno",
              description:
                "battered poblano peppers filled with melted cheese. Topped with red salsa, feta cheese, sour cream and cilantro. Served with rice, beans and 5 corn tortillas",
              price: 20.99,
              addOn: [
                {
                  description: "Sub 5 flour tortillas",
                  price: 1.99,
                },
              ],
            },
            {
              name: "Camarones A La Diabla",
              description:
                "prawns sautéed in butter, garlic and a spicy sweet and sour salsa. Served with rice and house salad.",
              price: 24.99,
            },
            {
              name: "Camarones Mojo De Ajo",
              description:
                "prawns sautéed in butter and garlic with a touch of freshly squeezed lime served with rice and house salad.",
              price: 24.99,
            },
            {
              name: "Mole Con Pollo",
              description:
                "grilled chicken breast on a bed of rice topped with mole sauce, pickled onions, sour cream and cilantro. Served with 5 corn tortillas.",
              price: 0,
              addOn: [
                {
                  description: "Sub 5 flour tortillas",
                  price: 1.99,
                },
              ],
            },
            {
              name: "Quesadilla",
              description:
                "13in flour tortillas filled with cheese and your choice of meat. Side of house salad and sour cream.",
              price: 21.99,
            },
            {
              name: "Burrito",
              description:
                "flour tortilla with mozzarella cheese, rice, beans, pico de gallo, salsa guacamole and sour cream.",
              price: 21.99,
              addOn: [
                {
                  description: "Make it WET",
                  price: 1.99,
                },
              ],
            },
            {
              name: "Enchiladas",
              description:
                "three corn tortillas stuffed with your choice of meat. Served with rice, beans and your choice of salsa.",
              price: 0,
              addOn: [
                {
                  description: "Sub Mole Sauce",
                  price: 1.99,
                },
              ],
            },
            {
              name: "Molcajete Mar y Tierra",
              description:
                "top sirloin, chicken breast, prawns, chorizo, tender cactus, melted cheese topped with chiles torreados. Served with rice, beans and 10 corn tortillas. (Serves 2-3 people)",
              price: 0,
              addOn: [
                {
                  description: "Sub 10 flour tortillas",
                  price: 2.99,
                },
              ],
            },
            {
              name: "Alambre",
              description:
                "your choice of beef, chicken or pastor sautéed with bacon, onions, green peppers, mushrooms and house made salsa. Served with rice, beans and 5 corn tortillas.",
              price: 24.99,
              addOn: [
                {
                  description: "melted mozzarella cheese",
                  price: 2.99,
                },
                {
                  description: "Sub 5 flour tortillas",
                  price: 1.99,
                },
                {
                  description: "Sub prawns",
                  price: 3.99,
                },
                {
                  description: "Add meat/prawns",
                  price: 6.99,
                },
              ],
            },
            {
              name: "Taco Salad",
              description:
                "lettuce tossed in your choice of salsa guacamole or chipotle-garlic mayo on a Mexican bed of rice. Served with seasoned chicken breast, pico de Gallo, feta cheese, pineapple, avocado, bacon and corn tortilla strips.",
              price: 21.99,
              addOn: [
                {
                  description: "Sub prawns",
                  price: 3.99,
                },
                {
                  description: "Add prawns",
                  price: 6.99,
                },
              ],
            },
          ],
        },
        {
          title: "Grill",
          menuItems: [
            {
              name: "Tampiqueña",
              description:
                "8oz Top Sirloin steak on a bed of rajas con crema, one chicken enchilada with salsa verde topped with sour cream and feta cheese, one chorizo quesadilla, guacamole, rice and beans.",
              price: 27.99,
            },
            {
              name: "Carne Sarandeada:",
              description: "smoked beef with rice, beans and 5 corn tortillas.",
              price: 22.99,
              addOn: [
                {
                  description: "Sub 5 flour tortillas",
                  price: 1.99,
                },
              ],
            },
            {
              name: "Aguachile De Rib Eye",
              description:
                "8oz ribeye served medium, chef’s special salsa, freshly squeezed lime, red onions, cucumbers, avocado with a side of our house-made chips.",
              price: 24.99,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Tacos",
      sections: [
        {
          title: "Special Tacos",
          menuItems: [
            {
              name: "Campechanos",
              description:
                "three 4 inch tacos with bacon, pork, carne asana, mozzarella cheese served with salsa guacamole and pico de gallo.",
              price: 18.99,
            },
            {
              name: "Vampiros",
              description:
                "two 6 inch crispy corn tortillas with melted mozzarella cheese, carne asana, onion and cilantro.",
              price: 18.99,
            },
            {
              name: "Estilo Baja",
              description:
                "prawns or fish, battered or grilled on a 6 inch flour tortilla with cabbage, pico de gallo, chipotle mayo and avocado.",
              price: 7.99,
            },
          ],
        },
        {
          title: "Regular Tacos",
          menuItems: [
            {
              name: "Asada",
              description: "top sirloin topped with onion and cilantro.",
              price: 5.99,
            },
            {
              name: "Pastor",
              description:
                "marinated pork and pineapple topped with onion and cilantro.",
              price: 5.99,
            },
            {
              name: "Carnitas",
              description:
                "pulled pork topped with pickled onions, cilantro and jalapeno.",
              price: 5.99,
            },
            {
              name: "Tinga De Pollo",
              description:
                "pulled chicken cooked in tomato and chipotle sauce, topped with sour cream and feta cheese.",
              price: 5.99,
            },
            {
              name: "Conchinita Pibil",
              description:
                "marinated pork in achiote and orange topped with pickled onion and cilantro.",
              price: 5.99,
            },
            {
              name: "Chorizo",
              description:
                "marinated ground pork topped with onion and cilantro.",
              price: 5.99,
            },
            {
              name: "Birria",
              description:
                "juicy shredded beef topped with onion and cilantro.",
              price: 5.99,
            },
            {
              name: "Pollo Con Mole",
              description:
                "shredded chicken cooked in a spiced peanut and chocolate sauce. Topped with sour cream and pickled onions. Contains nuts",
              price: 5.99,
            },
            {
              name: "Pastor Vegano",
              description: "marinated soybeans topped with onion and cilantro.",
              price: 4.99,
            },
            {
              name: "Rajas Con Crema",
              description:
                "a mix of poblano peppers, corn, onion, sour cream and topped with feta cheese.",
              price: 4.99,
            },
            {
              name: "Cauliflower",
              description:
                "battered cauliflower topped with cabbage, pineapple and chipotle mayo.",
              price: 4.99,
            },
            {
              name: "No Palitos",
              description:
                "tender cactus topped with melted cheese and pico de Gallo.",
              price: 4.99,
            },
            {
              name: "Frijoles",
              description:
                "refried beans topped with feta cheese and pico de gallo.",
              price: 4.99,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Dessert",
      sections: [
        {
          title: "",
          menuItems: [
            {
              name: "Churros with ice cream",
              description:
                "deep fried dough covered with cinnamon and sugar. Served with vanilla ice cream.",
              price: 10.99,
            },
            {
              name: "Tres Leches Cake",
              description: "",
              price: 11.99,
            },
            {
              name: "Flan",
              description: "",
              price: 11.99,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Sides",
      sections: [
        {
          title: "",
          menuItems: [
            {
              name: "Chips and Salsa",
              price: 3.99,
            },
            {
              name: "Guacamole 2oz",
              price: 2.99,
            },
            {
              name: "Sour Cream Side",
              price: 1.5,
            },
            {
              name: "Pico de Gallo",
              price: 1.5,
            },
            {
              name: "Beans side",
              price: 3.99,
            },
            {
              name: "Rice Side",
              price: 3.99,
            },
            {
              name: "Pico de Gallo",
              price: 1.5,
            },
            {
              name: "Beans side",
              price: 3.99,
            },
            {
              name: "Rice Side",
              price: 3.99,
            },
            {
              name: "Jalapeno Side",
              price: 1.99,
            },
            {
              name: "Chipotle Mayo",
              price: 1.5,
            },
            {
              name: "Lime Side",
              price: 1.5,
            },
            {
              name: "5x Corn Tortilla Side",
              price: 1.99,
            },
            {
              name: "5x Flour Tortilla Side",
              price: 2.99,
            },
            {
              name: "Chile Toreados",
              price: 1.99,
            },
            {
              name: "Extra Ice Cream Scoop",
              price: 1.5,
            },
            {
              name: "Extra Dulce De Leche",
              price: 0.99,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Drinks",
      sections: [
        {
          title: "",
          menuItems: [
            {
              name: "Margarita Flight",
              description:
                "Your choice of 4 different frozen margarita flavours: lime, mango, strawberry, hibiscus, tamarind- chamoy or guava",
              price: 26,
            },
            {
              name: "Classic Margarita (1.5oz)",
              description:
                "Jose Cuervo Tequila, Orange Liqueur, Lime Juice, Simple Syrup, Salt Rim Flavours: Lime, Mango, Strawberry, Tamarind-Chamoy, Hibiscus or Guava",
              price: 12,
            },
            {
              name: "Cadillac Margarita (1.5oz)",
              description:
                "Patron Silver, Grand Marnier, Lime Juice, Simple Syrup, Salt Rim",
              price: 18,
            },
            {
              name: "Mezcalita",
              description:
                "Fandango Mezcal, Orange Liqueur, Lime Juice, Orange Juice, Simple Syrup, Orange Bitters, Tajin Rim",
              price: 14,
            },
            {
              name: "La Picante (1.5oz)",
              description:
                "Infused Jalapeno Jose Cuervo Tequila, Jalapeno Syrup, Orange Liqueur, Lime Juice, Tajin Rim",
              price: 15,
            },
            {
              name: "Coconut Guava Margarita (1.5oz)",
              description:
                "1800 coconut tequila, Orange Liqueur, Coconut syrup, Guava Puree, Lime Juice",
              price: 16,
            },
            {
              name: "Hibiscus-tini (1.5oz)",
              description: "Bombay Gin, Cointreau, Lime Juice, Hibiscus Syrup",
              price: 15,
            },
            {
              name: "Dirty Horchata (1oz)",
              description: "Kahlua, Horchata, Cinnamon",
              price: 13,
            },
            {
              name: "Michelada (1oz)",
              description:
                "Your choice of imported beer, Maggi sauce, Tabasco, Worcestershire, Clamato, Lime Juice, Tamarind Stick, Tajin Rim",
              price: 15,
              addOn: [
                {
                  description: "Add four Grilled Shrimp",
                  price: 4,
                },
              ],
            },
            {
              name: "The Bulldog (1.5oz + 207ml)",
              description: "Frozen Lime Margarita, Coronita",
              price: 15,
            },
            {
              name: "Paloma (1oz)",
              description: "Jose Cuervo Tequila, Squirt, Lime Juice, Salt Rim",
              price: 13,
            },
            {
              name: "Cosmorita (1.5oz)",
              description:
                "Jose Cuervo Tequila, Cointreau, Lime Juice, Cranberry Juice",
              price: 14,
            },
            {
              name: "Pina Colada (1.5oz)",
              description:
                "Bacardi White, Malibu, Coconut Syrup, Pineapple Juice",
              price: 14,
            },
            {
              name: "Mango Mojito (1oz)",
              description:
                "Bacardi White, Fresh Mint, Mango Puree, Lime Juice, Sprite",
              price: 15,
            },
            {
              name: "La Diablita (2oz)",
              description:
                "Hornitos Silver, House Red Wine, Lime Juice, Simple Syrup",
              price: 15,
            },
            {
              name: "Fishbowl (4oz)",
              description:
                "(Must be shared between 2 people or more) \n Your choice of Frozen Margarita flavour: lime, mango, strawberry or hibiscus",
              price: 28,
              addOn: [
                {
                  description: "Make it a BULLDOG FISHBOWL",
                  price: 6,
                },
              ],
            },
          ],
        },
        {
          title: "Non alcoholic",
          menuItems: [
            {
              name: "Jarritos/Mexican coke",
              price: 5,
            },
            {
              name: "Horchata",
              price: 6,
            },
            {
              name: "Jamaica",
              price: 6,
            },
            {
              name: "Pop",
              price: 6,
            },
            {
              name: "Corona Sunbrew",
              price: 7,
            },
            {
              name: "Coffee",
              price: 4,
            },
            {
              name: "Sangria senorial",
              price: 6,
            },
            {
              name: "Lemonade",
              price: 4,
            },
            {
              name: "Juice",
              price: 4,
            },
            {
              name: "Virgin cocktails",
              price: 6,
            },
          ],
        },
      ],
    },
  ],
};

export default menuData;
