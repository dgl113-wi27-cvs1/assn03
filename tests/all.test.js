import path from 'path';

describe('all tests', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL, {
      waitUntil: 'networkidle2',
    });
  });

  beforeEach(async () => {
    await page.reload({
      waitUntil: 'networkidle2',
    });
  });

  it('case1', async () => {
    const totalCost = await page.evaluate('totalCost');
    expect(totalCost).toEqual(0);
    const quantities = await page.evaluate('quantities');
    expect(quantities).toEqual([]);
    const unitPrices = await page.evaluate('unitPrices');
    expect(unitPrices).toEqual([]);
    const descriptions = await page.evaluate('descriptions');
    expect(descriptions).toEqual([]);
  });

  it('case2', async () => {
    await page.evaluate('addItem("2","3","apples")');
    const totalCost = await page.evaluate('totalCost');
    expect(totalCost).toBeCloseTo(6);
    const quantities = await page.evaluate('quantities');
    expect(quantities).toEqual([2]);
    const unitPrices = await page.evaluate('unitPrices');
    expect(unitPrices).toEqual([3]);
    const descriptions = await page.evaluate('descriptions');
    expect(descriptions).toEqual(['apples']);
  });

  it('case3', async () => {
    await page.evaluate('addItem("2","3","apples")');
    await page.evaluate('addItem("4","5","bananas")');
    await page.evaluate('addItem("6","7","tomatoes")');
    const totalCost = await page.evaluate('totalCost');
    expect(totalCost).toBeCloseTo(68);
    const quantities = await page.evaluate('quantities');
    expect(quantities).toEqual([2, 4, 6]);
    const unitPrices = await page.evaluate('unitPrices');
    expect(unitPrices).toEqual([3, 5, 7]);
    const descriptions = await page.evaluate('descriptions');
    expect(descriptions).toEqual(['apples', 'bananas', 'tomatoes']);
  });

  it('case4', async () => {
    await page.evaluate('addItem("2","3","apples")');
    await page.evaluate('addItem("4","5","bananas")');
    await page.evaluate('addItem("6","7","tomatoes")');
    await page.evaluate('deleteItem(0)');
    const totalCost = await page.evaluate('totalCost');
    expect(totalCost).toBeCloseTo(62);
    const quantities = await page.evaluate('quantities');
    expect(quantities).toEqual([4, 6]);
    const unitPrices = await page.evaluate('unitPrices');
    expect(unitPrices).toEqual([5, 7]);
    const descriptions = await page.evaluate('descriptions');
    expect(descriptions).toEqual(['bananas', 'tomatoes']);
  });

  it('case5', async () => {
    await page.evaluate('addItem("2","3","apples")');
    await page.evaluate('addItem("4","5","bananas")');
    await page.evaluate('addItem("6","7","tomatoes")');
    await page.evaluate('deleteItem(0)');
    await page.evaluate('addItem("8","9","grapes")');
    await page.evaluate('addItem("10","11","lemons")');
    await page.evaluate('deleteItem(1)');
    await page.evaluate('deleteItem(2)');
    const totalCost = await page.evaluate('totalCost');
    expect(totalCost).toBeCloseTo(92);
    const quantities = await page.evaluate('quantities');
    expect(quantities).toEqual([4, 8]);
    const unitPrices = await page.evaluate('unitPrices');
    expect(unitPrices).toEqual([5, 9]);
    const descriptions = await page.evaluate('descriptions');
    expect(descriptions).toEqual(['bananas', 'grapes']);
  });
});
