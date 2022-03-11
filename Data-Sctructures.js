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

//GET 
//this function should accept an "index"
//If the index is less than zero or greater than or equal to the length of the list, return null
//loop through the list until you reach the index and return the node at that specific "index"

//SET (changing the value of a node based on its position in the linked list)
//function should accept a value and an index
//usingyou get function to find the specific node
//if the node is not found return false
//if the node is found set the value of that node to be the value passed to the function and return true

//Insert (adding a node to a linked list at a specific position)
//if the index is less than zero or grater than the length return false
//if the index is the same as the length push a new node to the end of the list
//if the index is 0, unshift a new node to the sart of the list
//otherwise using the get method, acces the node at the index -1
//set the next property on that node to be the new node
//set the next property on the new node to be the previous next
//incrememnt the length
//return true

//Remove (removes a node from the linked list at a specific position)
//if the index is less that zero or greater than the length retrn undefined
//if the index is the same as the length-1 pop
//if the index is 0, shift
//otherwise using the get method, access the node at the index -1 
//set that next propertyon that node to be the index of the next node
//decrement the length
//return the value of the node removed

//REVERSE (Reversing the linked list in place)
//swap the head and the tail
//create a variable called next
//create a variable called prev
//create  a variable called node and initialize it to the head property
//loop through the list
//set next to be the next property on whatever node is
//set the next property on the node to be whatever prev is 
//set prev to be the value of the node variable
//set the node variable to be the value of the next variable


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
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.nextcounter++
        }
        return current
    }
    set(index, val){
        let foundNode= this.get(index)
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)
        var newNode = new Node(val)
        var prev = this.get(index - 1)
        var temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined
        if(index === this.length-1) return this.push(val)
        if(index === 0) return this.shift(val)
        var previousNode = this.get(index -1)
        var removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }
    reverse(){
        var node = this.head
        this.head = this.tail
        this.tail = node
        var next 
        var prev = null
        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}