import events from "events";

// let myEmitter=new events.EventEmitter();

// myEmitter.on('someEvent',(data)=>{
//     console.log(data)
// });

// myEmitter.emit('someEvent',"The event was emitted");

class Person extends events.EventEmitter {
  public name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
}

let james = new Person("james");
let mary = new Person("mary");
let ryu = new Person("ryu");

let people: Person[] = [james, mary, ryu];
people.forEach((person: Person) => {
  person.on("speak", (msg) => {
    console.log(person.name + " said: " + msg);
  });
});

james.emit("speak", "sup buddy");
