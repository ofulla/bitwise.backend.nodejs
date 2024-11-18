import {RestClientV2} from 'bitget-api';
import * as http from 'http';

const PORT: number = 3000;

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

const client = new RestClientV2({
    apiKey: 'insert_api_key_here',
    apiSecret: 'insert_api_secret_here',
    apiPass: 'insert_api_pass_here',
});

client.getP2PTransactionRecords(params)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});