
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: faker.datatype.number(""),
name: faker.datatype.number(""),
status: faker.datatype.number(""),
cost: faker.datatype.number(""),
progress: faker.datatype.number(""),
startDate: faker.datatype.number(""),
endDate: faker.datatype.number(""),
createdAt: faker.datatype.number(""),
updatedAt: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
