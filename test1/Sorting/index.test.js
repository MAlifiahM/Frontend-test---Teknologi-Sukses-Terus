const sorting = require('./index')

test('Sort array ascending', () => {
    expect(sorting([3, 1, 4, 1, 5, 9], 'asc')).toEqual([1, 1, 3, 4, 5, 9]);
})

test('Sort array descending', () => {
    expect(sorting([3, 1, 4, 1, 5, 9], 'desc')).toEqual([9, 5, 4, 3, 1, 1]);
});