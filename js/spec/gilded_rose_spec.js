describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    expect(items[0].name).toEqual("foo");
    update_quality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it("should degrade regular quality", function() {
    items = [ new Item("foo", 5, 10) ];
    expect(items[0].sell_in).toEqual(5);
    expect(items[0].quality).toEqual(10);
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(9);
    update_quality();
    update_quality();
    update_quality();
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(5);
    update_quality();
    // decrease twice as fast
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(3);
    update_quality();
    update_quality();
    expect(items[0].sell_in).toEqual(-3);
    // not below 0
    expect(items[0].quality).toEqual(0);
  });

  it("should keep Sulfuras unchanged", function () {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 3, 4) ];
    update_quality();
    update_quality();
    expect(items[0].sell_in).toEqual(3);
    expect(items[0].quality).toEqual(80);
  });

  it("should increase Aged Brie", function () {
    items = [ new Item("Aged Brie", 2, 49) ];
    update_quality();
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    // not above 50
    expect(items[0].quality).toEqual(50);
    update_quality();
    update_quality();
    expect(items[0].sell_in).toEqual(-2);
    // not above 50
    expect(items[0].quality).toEqual(50);
  });

  it("should increase Backstage passes", function () {
    items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 40),
      new Item("Backstage passes to a King Crimson concert", 7, 40),
      new Item("Backstage passes to a Wilson Simonal concert", 2, 40),
    ];
    update_quality();
    update_quality();
    // +1 for >10 days
    expect(items[0].quality).toEqual(42);
    // +2 for <=10 days
    expect(items[1].quality).toEqual(44);
    // +3 for <=5 days
    expect(items[2].quality).toEqual(46);
    update_quality();
    // +2 for <=10 days
    expect(items[0].quality).toEqual(44);
    // +3 for <=5 days
    expect(items[1].quality).toEqual(47);
    // 0 for <0 days
    expect(items[2].quality).toEqual(0);
    update_quality();
    // +2 for <=10 days
    expect(items[0].quality).toEqual(46);
    // +3 for <=5 days
    expect(items[1].quality).toEqual(50);
    // 0 for <0 days
    expect(items[2].quality).toEqual(0);
    update_quality();
    // not above 50
    expect(items[1].quality).toEqual(50);
  });

  it("should degrade Conjured quality", function() {
    items = [ new Item("Conjured bread", 5, 15) ];
    expect(items[0].sell_in).toEqual(5);
    expect(items[0].quality).toEqual(15);
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(13);
    update_quality();
    update_quality();
    update_quality();
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(5);
    update_quality();
    // decrease twice as fast
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(1);
    update_quality();
    update_quality();
    expect(items[0].sell_in).toEqual(-3);
    // not below 0
    expect(items[0].quality).toEqual(0);
  });

});
