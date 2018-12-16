function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    update_item(items[i])
  }
}

function update_item(item) {
  if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
    if (item.quality > 0) {
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.quality = item.quality - 1
      }
    }
  } else {
    item.quality = item.quality + 1
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sell_in < 11) {
        item.quality = item.quality + 1
      }
      if (item.sell_in < 6) {
        item.quality = item.quality + 1
      }
    }
  }
  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.sell_in = item.sell_in - 1;
  }
  if (item.sell_in < 0) {
    if (item.name != 'Aged Brie') {
      if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1
          }
        }
      } else {
        item.quality = item.quality - item.quality
      }
    } else {
      item.quality = item.quality + 1
    }
  }
  if (item.quality > 50) {
    item.quality = 50
  }
}
