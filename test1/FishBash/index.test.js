const fishBash = require('./index')


test('Terst FishBash Function', () => {
    console.log = jest.fn();

    fishBash(30);

    expect(console.log.mock.calls[2][0]).toBe("fish");
    expect(console.log.mock.calls[4][0]).toBe("bash");
    expect(console.log.mock.calls[14][0]).toBe("fish bash");
})