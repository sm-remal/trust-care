import { collections, dbConnect } from "@/lib/dbConnect" 
import { ObjectId } from "mongodb";

// Get from database
export const getServices = async () => {
    const services = await dbConnect(collections.SERVICES).find().toArray()
    return JSON.parse(JSON.stringify(services))
}

// Get Details from database
// export const getServiceBySlug = async (id) => {
//     const service = await dbConnect(collections.SERVICES).findOne({ id: id });
//     return JSON.parse(JSON.stringify(service));
// };

// Get Details from database
export const getSingleService = async (id) => {
    if (id.length != 24) {
        return {};
    }
    const query = { _id: new ObjectId(id) };
    const service = await dbConnect(collections.SERVICES).findOne(query);
     return JSON.parse(JSON.stringify(service)) || {};
}