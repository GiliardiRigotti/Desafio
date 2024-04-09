export function getTypeFromURL(url: string) {
    console.log(url)
    const urlParts = url.split('/')
    return urlParts[urlParts.length - 1]
}