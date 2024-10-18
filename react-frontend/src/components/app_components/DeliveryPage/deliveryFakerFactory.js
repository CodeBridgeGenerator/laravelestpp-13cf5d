
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
branchId: faker.lorem.sentence(1),
modelType: faker.lorem.sentence(1),
modelId: faker.lorem.sentence(1),
deliveryAddress: faker.lorem.sentence(1),
receiverName: faker.lorem.sentence(1),
receiverPhone: faker.lorem.sentence(1),
attachmentPath: faker.lorem.sentence(1),
deliveryMethod: faker.lorem.sentence(1),
deliveryNote: faker.lorem.sentence(1),
deliveryStatus: faker.lorem.sentence(1),
consignmentNo: faker.lorem.sentence(1),
consignmentBy: faker.lorem.sentence(1),
deliveryDate: faker.lorem.sentence(1),
createdAt: faker.lorem.sentence(1),
updatedAt: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
