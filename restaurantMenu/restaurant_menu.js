const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Reusable function to render any menu
function renderMenu(menuArray, elementId) {
  const html = menuArray
    .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
    .join('');

  document.getElementById(elementId).innerHTML = html;
}

// Render all menus
renderMenu(breakfastMenu, 'breakfastMenuItems');
renderMenu(mainCourseMenu, 'maincourseMenuItems');
renderMenu(dessertMenu, 'dessertMenuItems');