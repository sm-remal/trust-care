import { collections, dbConnect } from "@/lib/dbConnect"

export const getServices = async () => {
    const services = await dbConnect(collections.SERVICES).find().toArray()
    return JSON.parse(JSON.stringify(services))
}