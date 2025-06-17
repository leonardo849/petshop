export function isThereDuplicate<T>(array: T[], matcher: (element: T) => any): boolean {
    const allElements = new Set()
    for (let item of array) {
        const key = matcher(item)
        if (allElements.has(key)) {
            return true
        } else {
            allElements.add(key)
        }
    } 
    
    
    return false
}