
export default function NewUrl({url}: {url: string}) {
    return (
        url && (
            <div
                className="m-1 p-4 bg-sky-300"
                onClick={() => {
                    navigator.clipboard.writeText(url);
                }}
            >
                <p className="text-xs">Click to copy URL</p>
                <p>{url}</p>
            </div>
        )
    );
}
