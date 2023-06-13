import LinkedList from './lib/linked-list';

export default function updateNext(list, value) {
  if (list.next === null) {
    return undefined;
  }
  const newNode = new LinkedList(value);
  const second = list.next;
  const others = second.next;
  list.next = newNode;
  newNode.next = others;
  return list;
}
