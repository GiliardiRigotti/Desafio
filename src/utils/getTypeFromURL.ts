export function getTypeFromURL(url: string) {
    const urlParts = url.split('/')
    return urlParts[urlParts.length - 1]
}