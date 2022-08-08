var req = {
    url: 'https://null.com',
    method: 'GET'
};
req.method = 'TRY';
console.log(req.method);
function handleRequest(url, method) {
    console.log(url, method);
}
handleRequest(req.url, req.method);
