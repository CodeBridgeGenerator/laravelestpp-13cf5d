
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
branchId: faker.lorem.sentence(1),
sku: faker.lorem.sentence(1),
name: faker.lorem.sentence(1),
type: faker.lorem.sentence(1),
categoryId: faker.lorem.sentence(1),
unitId: faker.lorem.sentence(1),
stockQuantity: faker.lorem.sentence(1),
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
