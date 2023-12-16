class Node{
    constructor(value){
        this.value = value;
        this.next =null;
    }
}

class Queue{
    constructor(){
        this.head =null;
        this.tail = null;
        this.size = 0;;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail  = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.head) return null;
        else{
            let temp = this.head;
            if(this.head===this.tail){
                this.tail = null;
            }else{
                this.head = this.head.next;
            }
            this.size--;
            return temp.value;
        }
    }
    print(){
        let temp = this.head;
        while(temp){
            
            console.log(temp.value+'->')
            temp = temp.next;

        }
    }
}


let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(87);
q.print();
q.dequeue();
q.print()
q.dequeue();
q.print();