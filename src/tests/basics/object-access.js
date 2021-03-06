
const { Random } = require('mockjs');

const description = `
访问object中的属性

input       output

{a:1},'a'   1
{a:1},'b'   null    // not undefined
`;

const template = `
module.exports = (obj, propName) => {
    return null;
};
`;

module.exports = {
    title: 'object-access',
    description,
    template,
    runner: async (f) => {

        for (let i = 0; i < 15; i++) {
            const n = Random.word();
            const v = Random.integer(1, 100);
            expect(f({ [n]: v }, n)).toEqual(v);
        }

        for (let i = 0; i < 15; i++) {
            const n = Random.word();
            const n2 = Random.word();

            const v = Random.integer(1, 100);
            expect(f({ [n]: v }, n2)).toEqual(null);
        }

    }
};