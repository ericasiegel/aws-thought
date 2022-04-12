//  Load the AWS SDK for Node.js
// this package is responsible for the API that allows the app to communicate with the web service
const AWS = require('aws-sdk');

// import the uuid package to create a unique S3 bucket name
const { v4: uuidv4 } = require('uuid');

// set the region
AWS.config.update({ region: 'us-east-2' });

// create s3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// create the parameters for calling createBucket
var bucketParams = {
    Bucket: 'user-images-' + uuidv4(),
};

// Call S3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Success');
    }
});