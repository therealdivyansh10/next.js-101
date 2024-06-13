import zod from "zod";

const schema = zod.object({
    id: zod.number(),
    name: zod.string(),
    price: zod.number()
})

export default schema;