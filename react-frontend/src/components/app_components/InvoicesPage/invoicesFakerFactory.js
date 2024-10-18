
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
branchId: faker.lorem.sentence(1),
customerId: faker.lorem.sentence(1),
invoiceDate: faker.lorem.sentence(1),
categoryId: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
createdBy: faker.lorem.sentence(1),
source: faker.lorem.sentence(1),
deliveryStatus: faker.lorem.sentence(1),
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
