export const updateObjectInArray = (item, itemId, objPropName, NewObjProps) => {
    return item.map(u => {
            if (u[objPropName] === itemId) {
                return {...u, ...NewObjProps}
            }
            return u;
        })
}