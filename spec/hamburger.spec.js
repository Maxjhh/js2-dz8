describe('Создание обьекта Гамбургер', function(){
  myHamburger = new Hamburger('large', 'cheese');
  it('Создание гамбургера', function() {
    expect(myHamburger.size).toBe('large');
    expect(myHamburger.stuffing).toBe('cheese');
  });
  it('Узнать размер и начинку гамбургера', function() {
    expect(myHamburger.sizeText).toBe('большой');
    expect(myHamburger.stuffingText).toBe('с сыром');
  });
});
describe('Добавление начинки', function(){
  myHamburger = new Hamburger('large', 'cheese');
  myHamburger.addTopping('mayo');
  myHamburger.addTopping('spice');
  myHamburger.addTopping('mayo');
  it('Добавить начинку 1', function() {
    expect(myHamburger.toppings[0]).toBe('mayo');
  });
  it('Добавить начинку 2', function() {
    expect(myHamburger.toppings[1]).toBe('spice');
  });
  it('Узнать начинки', function() {
    expect(myHamburger.toppingsText).toBe(', с майонезом, с приправой');
  });
  it('Попытка снова добавить начинку 1', function() {
    expect(myHamburger.message).toBe('Такая добавка уже добавлена');
  });
});
