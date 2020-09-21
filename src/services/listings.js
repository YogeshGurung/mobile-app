import faker from "faker";

const createFakeListing = () => ({
    id: faker.random.uuid(),
    owner: faker.name.findName(),
    date: `${faker.date.past()}`,
    isFav: faker.random.boolean(),
    title: faker.lorem.words(),
    body: faker.lorem.paragraph(),
    type: faker.random.arrayElement([ "job", "room" ])
});

export const getListings = (length = 20) => Array.from({ length }).fill(null).map(createFakeListing);

