const Firebase = require('./firebase.connection');
const bucket = Firebase.bucket;


async function uploadFile(filepath, filename) {
	await bucket.upload(filepath, {
		gzip: true,
		destination: filename,
		metadata: {
			cacheControl: 'public, max-age=3600'
		}
	});
	console.log(`${filename} uploaded to bucket.`);
}

async function generateSignedUrl(filename) {
	const options = {
		version: 'v2',
		action: 'read',
		expires: Date.now() + 3600
	};

	const [url] = await bucket.file(filename).getSignedUrl(options);
	console.log(url);
};

async function downloadFile(srcFilename, destFilename) {
    await bucket.file(srcFilename).download({
        destination: destFilename,
      });
    console.log(`gs://${bucket.name}/${srcFilename} downloaded to ${destFilename}.`);
}

module.exports = {
    uploadFile: uploadFile,
    generateSignedUrl: generateSignedUrl,
    downloadFile: downloadFile
}