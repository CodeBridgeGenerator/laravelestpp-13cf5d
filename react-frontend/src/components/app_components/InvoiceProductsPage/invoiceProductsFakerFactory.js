
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
invoiceId: faker.lorem.sentence(1),
productId: faker.lorem.sentence(1),
variationId: faker.lorem.sentence(1),
quantity: faker.lorem.sentence(1),
price: faker.lorem.sentence(1),
tax: faker.lorem.sentence(1),
discount: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
createdAt: faker.lorem.sentence(1),
updatedAt: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
