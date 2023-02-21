type LinkNode<T> = {
    value: T;
    next?: LinkNode<T>;
}

const TextNode: LinkNode<string> = {
    value: 'twenty-three',
    next: {
        value: 'twenty-four',
    }
}

/** The "," is needed if we are writing tsx because the compiler have problems to recognize if we are writing a type or a component */

const createLink = <T,>(value: T): LinkNode<T> => {
    return {
        value,
    }
}