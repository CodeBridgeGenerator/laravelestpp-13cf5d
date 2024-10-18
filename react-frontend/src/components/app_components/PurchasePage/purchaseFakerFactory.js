
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
branchId: faker.lorem.sentence(1),
vendorId: faker.lorem.sentence(1),
warehouseId: faker.lorem.sentence(1),
purchaseType: faker.lorem.sentence(1),
date: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
categoryId: faker.lorem.sentence(1),
createdBy: faker.lorem.sentence(1),
createdAt: faker.lorem.sentence(1),
updatedAt: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
