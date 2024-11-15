import getCollection, {URLS_COLLECTION} from "@/db";

export default async function getAllUrls(alias: string): Promise<string | null> {
    if (!alias) {
        return null;
    }

    const urlsCollection = await getCollection(URLS_COLLECTION);
    const data = await urlsCollection.findOne({alias});

    if (!data) {
        return null;
    }

    return data.url

}