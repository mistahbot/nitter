const express = require('express');
const cors = require('cors');



const messages = [];

// const messageModel = {
//     id: 'string',
//     writtenAt: 'number',
//     text: 'string',
//     writtenBy: 'string',
//     writtenFrom: 'string', // 'iphone' | 'android' | 'desktop'
// };


const PORT = process.env.PORT || 8080;


const main = () => {
    const app = express();


    app.use(express.json());
    app.use(cors());


    /**
     * GET / POST / PUT / PATCH / DELETE
     */
    app.get('/', (
        request, response,
    ) => {
        response.send(`
            <h1>
                hello from nitter server
            </h1>
        `);
    });


    // app.get('/messages', (
    //     request, response,
    // ) => {
    //     response.send(`
    //         <h1>
    //             these are all the messages
    //         </h1>

    //         <pre>
    //             ${JSON.stringify(messages, null, 4)}
    //         </pre>
    //     `);
    // });

    app.post('/messages_json', (
        request, response,
    ) => {
        try {
            const {
                writtenBy,
            } = request.body;

            if (!writtenBy) {
                response.status(400).end();
                return;
            }

            const filteredMessages = messages.filter(
                message => message.writtenBy === writtenBy
            );

            response.json(filteredMessages);
        } catch (error) {
            response.status(400).end();
        }
    });

    app.post('/message', (
        request, response,
    ) => {
        try {
            const {
                text,
                writtenBy,
                writtenFrom,
            } = request.body;

            if (
                !text
                || !writtenBy
                || !writtenFrom
            ) {
                response.status(400).end();
                return;
            }

            const message = {
                id: Math.random() + '',
                writtenAt: Date.now(),
                text,
                writtenBy,
                writtenFrom,
            };

            messages.push(message);

            response.end();
        } catch (error) {
            response.status(400).end();
        }
    });

    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    });
}


main();
