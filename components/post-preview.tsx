import {EntryProps} from "@/types";

export default function PostPreview({post}: {post: EntryProps}) {
    return (
        <div className="bg-sky-400 rouded-x1 p-4 m-2 w-96">
            <h4 className="font-bold text-3x1">{post.alias}</h4>
        </div>
    );
}