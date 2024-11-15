import getAllUrls from "@/lib/getAllUrls";
import {redirect, permanentRedirect} from "next/navigation";

export default async function RedirectPage({
    params,}:{
    params: Promise<{alias: string }>;
}) {
    const {alias} = await params;

    console.log("alias: ", alias);

    const url = await getAllUrls(alias);

    if (url) {
        return permanentRedirect(url);
    }
    return redirect("/");
}