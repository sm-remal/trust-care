import { collections, dbConnect } from "@/lib/dbConnect"

// Get from database
export const getCoverage = async () => {
    const coverage = await dbConnect(collections.COVERAGE).find().toArray()
    return JSON.parse(JSON.stringify(coverage))
} 