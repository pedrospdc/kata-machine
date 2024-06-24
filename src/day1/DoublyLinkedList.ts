type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const node = {value: item, next: this.head} as Node<T>;
        this.head = node;
        if (this.tail === undefined) {
            this.tail = this.head;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        let curr: Node<T> | undefined = this.head ? this.head : undefined;
        for (let i = 0; i <= idx; i++) {
            if (i == idx) {
                const prev = curr?.prev;
                const node = {value: item, prev: prev, next: curr} as Node<T>;
                if (curr !== undefined) {
                    curr.prev = node;
                }
                if (prev !== undefined) {
                    prev.next = node;
                }

                if (idx === 0) {
                    this.head = node
                }
                if (idx == this.length) {
                    this.tail = node
                }
                this.length++;
             }
            curr = curr?.next
        }
    }

    append(item: T): void {
        const node = {value: item, prev: this.tail} as Node<T>;

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; i < this.length; i++) {
            if (curr?.value === item) {
                if (curr.prev) {
                    curr.prev.next = curr.next;
                } else {
                    this.head = curr.next;
                }
                if (curr.next) {
                    curr.next.prev = curr.prev;
                } else {
                    this.tail = curr.prev;
                }
                this.length--;
                return curr.value;
            }
            curr = curr?.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let curr: Node<T> | undefined = this.head;
        for (let i = 0; i <= idx; i++) {
            if (i == idx) {
                return curr?.value;
            }
            if (curr?.next) {
                curr = curr?.next;
            } else {
                break;
            }
            
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        let curr: Node<T> | undefined = this.head;
        for (let i = 0; i <= idx; i++) {
            if (i == idx) {
                if (curr?.prev) {
                    curr.prev.next = curr.next;
                }
                if (curr?.next) {
                    curr.next.prev = curr.prev;
                }
                if (idx === 0) {
                    this.head = curr?.next;
                }
                if (idx === this.length - 1) {
                    this.tail = curr?.prev;
                }
                this.length--;
                return curr?.value;
            }
            if (curr?.next) {
                curr = curr?.next;
            } else {
                break;
            }
        }
        return undefined;
    }
}