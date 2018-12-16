/*
 * Do not touch; beware angry goblin.
 */
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

Item.prototype.update = function() {
  if (this.name == 'Sulfuras, Hand of Ragnaros') {
    this.quality = 80
    return;
  }
  this.sell_in = this.sell_in - 1;
  if (this.name == 'Aged Brie') {
    this.quality += 1
  } else if (this.name.startsWith('Backstage passes')) {
    if (this.sell_in >= 10) {
      this.quality += 1
    } else if (this.sell_in >= 5) {
      this.quality += 2
    } else if (this.sell_in >= 0) {
      this.quality += 3
    } else {
      this.quality = 0
    }
  } else if (this.name.startsWith('Conjured')) {
    if (this.sell_in >= 0) {
      this.quality -= 2
    } else {
      this.quality -= 4
    }
  } else {
    // regular this
    if (this.sell_in >= 0) {
      this.quality -= 1
    } else {
      this.quality -= 2
    }
  }
  // boundary checks
  if (this.quality > 50) {
    this.quality = 50
  } else if (this.quality < 0) {
    this.quality = 0
  }
}

function update_quality(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].update()
  }
}

if (typeof window === 'undefined') {
  global.Item = Item
  global.update_quality = update_quality
}

