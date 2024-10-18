
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
userId: faker.lorem.sentence(1),
branchId: faker.lorem.sentence(1),
name: faker.lorem.sentence(1),
email: faker.internet.email(),
phoneNumber: faker.lorem.sentence(1),
regNo: faker.lorem.sentence(1),
balance: faker.lorem.sentence(1),
taxNo: faker.lorem.sentence(1),
otherInfo: faker.lorem.sentence(1),
rememberToken: faker.lorem.sentence(1),
createdAt: faker.lorem.sentence(1),
updatedAt: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
