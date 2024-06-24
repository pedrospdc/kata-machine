function walk(curr: BinaryNode<number> | null, needle: number): boolean {
    // base case
    if (!curr) {
        
    }

    if (curr.value === needle) {
        return true;
    }
    path.push(curr.value);
    // recurse
    walk(curr.left, path);
    walk(curr.right, path);
    // post
    return path;
}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {

}