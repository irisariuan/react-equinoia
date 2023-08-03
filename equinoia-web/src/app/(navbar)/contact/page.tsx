export default async function() {
    await new Promise(r => setInterval(r, 10000))
    return (
        <div>
            <span>Contact Us!</span>
        </div>
    )
}