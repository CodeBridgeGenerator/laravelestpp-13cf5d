
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
branchId: faker.lorem.sentence(1),
warehouseId: faker.lorem.sentence(1),
name: faker.lorem.sentence(1),
userIds: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
createdAt: faker.lorem.sentence(1),
updatedAt: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
