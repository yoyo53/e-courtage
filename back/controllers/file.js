const {bucket} = require('../firebase.connection');
const JSZip = require('jszip');


async function generateSignedUrl(filepath, response) {
	const options = {
		version: 'v2',
		action: 'read',
		expires: Date.now() + 3600
	};
	const [url] = await bucket.file(filename).getSignedUrl(options);
	response.status(200).send(`URL du fichier: ${url}`);
};

async function uploadFile(request, filepath, response) {
    await bucket.file(filepath).save(request.file.buffer, { contentType: request.file.mimetype }, (error) => {
        if (error) { throw error }
        response.status(200).send(`${request.file.originalname} uploaded to bucket.`);
    })
}

async function getFile(filepath, response) {
    bucket.file(filepath).createReadStream().pipe(response);
}

async function getFiles(filepaths, response) {
	const zip = new JSZip();
	for (let filepath of JSON.parse(filepaths)) {
		zip.file(filepath, bucket.file(filepath).createReadStream(), { binary : true });
	}
	zip.generateNodeStream().pipe(response);
}

module.exports = {
    generateSignedUrl,
    uploadFile,
	getFile,
	getFiles
}