import Menu from '../../common/Menu';
import Iterator from '../../common/Iterator';
import MenuItem from '../../common/MenuItem';

class PancakeHouseMenu extends Menu {
  constructor() {
    super();
    this.addItem("K&B's Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99);
    this.addItem("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage", false, 2.99);
    this.addItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 3.49);
    this.addItem("Waffles", "Waffles, with your choice of blueberries or strawberries", true, 3.59);
  }

  addItem(name, description, isVegetarian, price) {
    super.addItem(new MenuItem(name, description, isVegetarian, price));
  }

  createIterator() {
    return new Iterator(this.menuItems);
  }
}

export default PancakeHouseMenu;
