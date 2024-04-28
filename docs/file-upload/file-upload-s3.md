# Setting Up File Upload

In AI-Flow, non-textual data such as images and videos are transmitted via a URL. While it's possible to save this data locally, integrating them into flows with other APIs may lead to limitations due to local storage constraints. To handle large or numerous files effectively, setting up a file upload service is essential. Currently, the only supported method for file uploads in AI-Flow is via Amazon S3.

### Configuring Amazon S3 Uploads

To enable file uploads to S3, you need to configure several environment variables within your project. Update the `packages/backend/.env` file with the following settings:

```env
DEPLOYMENT_ENV=CLOUD
S3_BUCKET_NAME=your-bucket-name
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION_NAME=your-aws-region-name
```

These settings will allow nodes like FileUpload, Stable Diffusion, or Speech to Text to store files directly in S3.

### Link Expiration and File Size Settings

By default, any link generated to access these files will expire after 12 hours, and the maximum upload size is set to 300 MB. You can modify these defaults by updating the `.env` file with new values:

```env
HOURS_BEFORE_EXPIRATION=48
MAX_UPLOAD_SIZE_MB=1000
```

Adjusting these settings allows for longer access to files and larger uploads, enhancing the flexibility and usability of your application within AI-Flow.
