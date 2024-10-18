
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
branchId: faker.lorem.sentence(1),
productId: faker.lorem.sentence(1),
name: faker.lorem.sentence(1),
subSku: faker.lorem.sentence(1),
purchasePrice: faker.lorem.sentence(1),
sellPrice: faker.lorem.sentence(1),
imagePath: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
