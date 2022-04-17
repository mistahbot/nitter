const axios = require('axios');



const main = async () => {
    await axios.post('http://localhost:8080/message', {
        text: 'hello #1',
        writtenBy: 'andrew',
        writtenFrom: 'terminal',
    });

    console.log('message sent');
}


main();
