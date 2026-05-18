export type RecipeCategory = 'Pastries' | 'Cakes' | 'Desserts' | 'Cookies' | 'Basics' | 'Savory';

export interface Recipe {
  id: string;
  title: string;
  category: RecipeCategory;
  description: string;
  date: string;
  hue: number; // for placeholder color variation
}

export const recipes: Recipe[] = [
  // 2026
  { id: 'r1', title: 'Pistachio Blackcurrant Swirl Ice Cream', category: 'Desserts', description: 'my favorite ice cream flavor of all time?', date: 'May 2026', hue: 95 },
  { id: 'r2', title: 'Easy 5-Ingredient Spanish Churros', category: 'Pastries', description: 'traditional, and eggless!', date: 'Apr 2026', hue: 28 },
  { id: 'r3', title: 'Chocolate Hojicha Mousse', category: 'Desserts', description: 'no oven needed', date: 'Apr 2026', hue: 18 },
  { id: 'r4', title: 'How to Cover a Cake in Gelatin', category: 'Basics', description: 'a glossy, mirror-smooth finish for show-stopping cakes.', date: 'Apr 2026', hue: 40 },
  { id: 'r5', title: 'My Easier Butter Ganache Recipe', category: 'Basics', description: 'silky, stable, and shockingly simple.', date: 'Apr 2026', hue: 35 },
  { id: 'r6', title: 'Cherry Pistachio Cake with Vanilla Sea Salt Whip', category: 'Cakes', description: 'a love letter to spring fruit and salted vanilla.', date: 'Mar 2026', hue: 350 },
  { id: 'r7', title: 'Fluffy Strawberry Shortcake with Chiffon Cake', category: 'Cakes', description: 'Happy Valentine\u2019s Day!', date: 'Feb 2026', hue: 345 },
  // 2025
  { id: 'r8', title: 'Honeycomb Recipe', category: 'Basics', description: 'crisp, golden, and gorgeously crackly.', date: 'Dec 2025', hue: 42 },
  { id: 'r9', title: '2025 Holiday Cookie Box (Nutcracker Themed)', category: 'Cookies', description: 'a curated holiday box, nutcracker edition.', date: 'Dec 2025', hue: 12 },
  { id: 'r10', title: 'Lacey Oatmeal Ginger Cookies', category: 'Cookies', description: 'thin, lacey, and warmly spiced.', date: 'Dec 2025', hue: 30 },
  { id: 'r11', title: 'Honeycomb Shortbread Cookie', category: 'Cookies', description: 'buttery shortbread with a crunch of honeycomb.', date: 'Dec 2025', hue: 38 },
  { id: 'r12', title: 'Swedish Princess Cake', category: 'Cakes', description: 'a green marzipan dream.', date: 'Nov 2025', hue: 110 },
  { id: 'r13', title: 'Vintage Sugar Fruit Cake / Caramel Apple Cake', category: 'Cakes', description: 'caramel apples reimagined as a cake.', date: 'Nov 2025', hue: 22 },
  { id: 'r14', title: 'The Ultimate Thanksgiving Stuffing (Ciabatta Pancetta)', category: 'Savory', description: 'crispy edges, custardy middle, pancetta everywhere.', date: 'Nov 2025', hue: 28 },
  { id: 'r15', title: 'Caramelized Onion Parker House Rolls', category: 'Basics', description: 'soft, pillowy, and deeply savory.', date: 'Oct 2025', hue: 32 },
  { id: 'r16', title: 'The Croquembouche', category: 'Pastries', description: 'choux towers and spun sugar.', date: 'Oct 2025', hue: 36 },
  { id: 'r17', title: 'Chewy Pumpkin Spice Choc Chip Cookies', category: 'Cookies', description: 'the cookie that started my fall.', date: 'Sep 2025', hue: 25 },
  { id: 'r18', title: 'Viral Mango Mousse Cake', category: 'Cakes', description: 'the one you\u2019ve seen on TikTok.', date: 'Sep 2025', hue: 40 },
  { id: 'r19', title: 'French Meringue Macarons', category: 'Pastries', description: 'the classic.', date: 'Aug 2025', hue: 320 },
  { id: 'r20', title: 'The Best Carrot Cake', category: 'Cakes', description: 'spiced, moist, and cream-cheese frosted.', date: 'Jul 2025', hue: 24 },
  { id: 'r21', title: 'Garlic Bread Roses', category: 'Savory', description: 'as pretty as they are buttery.', date: 'Jun 2025', hue: 34 },
  { id: 'r22', title: 'Dirty Chai Tiramisu', category: 'Desserts', description: 'college era \u2014 espresso, chai, and chaos.', date: 'May 2025', hue: 26 },
  { id: 'r23', title: 'Vegan Banana Pudding', category: 'Desserts', description: 'college era \u2014 the dorm classic, reimagined.', date: 'Apr 2025', hue: 44 },
  { id: 'r24', title: 'Alchenny x Very Cool Ice Cream — Mulberry Cornmeal Ice Cream Sandwich', category: 'Desserts', description: 'a collab made for summer.', date: 'Mar 2025', hue: 330 },
  { id: 'r25', title: 'Smoked Salmon Everything Bagel Eclairs', category: 'Savory', description: 'savory choux, dressed up brunch-style.', date: 'Feb 2025', hue: 200 },
  { id: 'r26', title: 'Brûlée Bars (collab with Jake Goldberg)', category: 'Desserts', description: 'a torched-sugar cookie bar dream.', date: 'Jan 2025', hue: 36 },
  { id: 'r27', title: 'How to Make Macarons (French Meringue Method)', category: 'Pastries', description: 'the foundational technique guide.', date: 'Jan 2025', hue: 318 },
  { id: 'r28', title: 'The Ultimate Easy Almond Croissant', category: 'Pastries', description: 'store-bought hack, pastry-school finish.', date: 'Jan 2025', hue: 30 },
];

export const featuredRecipes = recipes.slice(0, 6);
