import * as http from 'http';
import {RestClientV2} from "../lib/bitget-api/src";

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

function getTimestampString(date: Date): string {
    return date.getTime().toString();
}

// Example usage with dates
const params = {
    startTime: getTimestampString(new Date('2024-01-01')),
    endTime: getTimestampString(new Date()),  // Current time
    limit: 100
};

client.getSpotTransactionRecords(params)
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