//Data strcuctures are collenctions of values, the relationship among them, 
//and the functions or operations tha can be applied to the data
//WHY SO MANY DATA STRUCTURES
//Different data structures exel at different things. Some are highely specialied, 
//while others)like arrays) are more generally used.

//WHY CARE ABOUT DATA STRUCTURES

//What is a class?
//a class is a blueprint for creating objects with predefined properties and methods

//SINGLY LINKED LIST
//-stores any data, its ordered, each item is mapped with an index
//a data structure that contains a head, tail and length property
//linked list consists of nodes and each node hacs a value and a pointer to another node or null
//Node stores a peice of data
//WHY USE LINKED LIST
//lists dont have indexes, connect via nodes with a next pointer, random access is not allowed

//PUSHING PSEUDOCODE
//thjis function should accept a value
//create a new node using the value passed to the function
//if there is no head property on the list set the head and the tail to be the newly created node
//otherwise set the next property on the tail to be the new node and  set the tail property on the list to be the 
//newly created node
//increment the length by 1
//return the linked list


//POPPING (removing a node from the end of the linked list)
//if there are no nodes in the list, return undefined
//loop through the list until you reach the tail
//set the tail to be the 2nd to last node
//decrement the length of the list by 1
//return the value of the node removed

//SHIFTING (removing a new node from the beginning of the linked list)
//if there are no nodes return ndefined
//store the current head property to be the current heads next property
//decrement the length b 1
//return the value of the node that was removed

//UNSHIFTING (Adding a new node to the beginning of the list)
//this funciton should accept a value
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and tail to be the newly created node
//Otherwise set the newly created nodes next property to be the current head property on the list
//increment the length of the list by 1 
//return the linked list


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
var first = new Node(hi)
first.next = new Node(how)

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //pushing items into a linked list
    push(val){
        newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    //looping through a linked list
    traverse(){
        var current = this.head
        while(current){
            current = current.next
        }
    }
    pop(){
        if(!this.head) return undefined
        var current = this.head;
        var newTail = current
        while(current.next){
            newTail = current;
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this

    }
}