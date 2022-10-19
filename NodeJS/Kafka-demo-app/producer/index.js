console.log("producer");
import kafka from "node-rdkafka";

const stream = kafka.createWriteStream(
    {
    'metadata.broker.list':'localhost:9092',
},
    {},
    {topic: "test" }
);

function queueMessage() {
    const result = stream.write(Buffer.from("Hey my name is dallan"));
    console.log(result);
}

setInterval(()=>{
    queueMessage();
}, 3000)