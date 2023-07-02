const { bucket } = require('../firebase.connection');
const JSZip = require('jszip');


async function generateSignedUrl(filepath, response) {
	const options = {
		version: 'v2',
		action: 'read',
		expires: Date.now() + 3600
	};
	const [url] = await bucket.file(filepath).getSignedUrl(options);
	response.status(200).send(`URL du fichier: ${url}`);
};

function uploadFile(request, filepath) {
    bucket.file(filepath).save(request.file.buffer, { contentType: request.file.mimetype }, (error) => {
        if (error) { throw error }
    })
}

function deleteFile(filepath) {
    bucket.file(filepath).delete((error) => {
        if (error) { throw error }
    })
}

function getFile(filepath, response) {
    bucket.file(filepath).createReadStream().pipe(response);
}

function getFiles(files, response) {
	const zip = new JSZip();
	for (let file of files) {
		zip.file(file.name, bucket.file(file.path).createReadStream(), { binary : true });
	}
	zip.generateNodeStream().pipe(response);
}

module.exports = {
    generateSignedUrl,
    uploadFile,
	deleteFile,
	getFile,
	getFiles
}