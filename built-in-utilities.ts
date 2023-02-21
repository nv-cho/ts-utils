type Item = {
    id: string,
    name: string,
    price: number,
}

/** Partial utility method makes optional all of the fields of the type passed as arg, without modifying the original type */

type PartialItem = Partial<Item>

/** Omit utility method removes the fields passed as args from the type passed as arg, without modifying the original type */

type OmitPartialItem = Omit<PartialItem, 'id'>