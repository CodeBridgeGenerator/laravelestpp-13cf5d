
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
branchId: faker.lorem.sentence(1),
invoiceId: faker.lorem.sentence(1),
date: faker.lorem.sentence(1),
amount: faker.lorem.sentence(1),
accountId: faker.lorem.sentence(1),
paymentMethod: faker.lorem.sentence(1),
reference: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
receiptPath: faker.lorem.sentence(1),
createdAt: faker.lorem.sentence(1),
updatedAt: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
