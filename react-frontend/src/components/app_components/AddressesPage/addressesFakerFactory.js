
import { faker } from "@faker-js/faker";
export default (user,count,customerIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
customerId: customerIdIds[i % customerIdIds.length],
branchId: faker.lorem.sentence(""),
shippingAddress1: faker.lorem.sentence(""),
shippingAddress2: faker.lorem.sentence(""),
shippingAddress3: faker.lorem.sentence(""),
shippingCity: faker.lorem.sentence(""),
shippingState: faker.lorem.sentence(""),
postalCode: faker.lorem.sentence(""),
billingAddress1: faker.lorem.sentence(""),
billingAddress2: faker.lorem.sentence(""),
billingAddress3: faker.lorem.sentence(""),
billingCity: faker.lorem.sentence(""),
billingState: faker.lorem.sentence(""),
postalCode1: faker.lorem.sentence(""),
createdAt: faker.lorem.sentence(""),
updatedAt: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
