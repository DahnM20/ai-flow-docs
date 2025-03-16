# Setting Up File Upload

In AI-Flow, non-textual data such as images and videos are transmitted via URLs. While saving this data locally is possible, integrating it into workflows with other APIs may introduce limitations due to local storage constraints. To efficiently handle large volumes or sizes of files, configuring a file upload service is recommended. Currently, AI-Flow exclusively supports file uploads using S3-compatible storage solutions.

This method is compatible with Amazon S3 and other providers such as Cloudflare R2 or any service offering S3-compatible storage. These solutions can be obtained at minimal cost, or even free through Amazon's Free Tier. Additionally, configuring automatic file deletion after a specified number of hours ensures that storage usage remains manageable.

### Configuring S3 Uploads

> **Important**: Ensure your S3 bucket has Cross-Origin Resource Sharing (CORS) enabled for `127.0.0.1:5000` if you're using the local executable. Otherwise, include the appropriate origin used by your application.

#### Method 1: Using the UI

You can configure storage settings directly through the AI-Flow UI.

![Bucket Configuration](/img/page-images/file-upload/bucket-config.png)

After entering your settings, click **Save** and test file uploads using the "Upload File" node to confirm successful configuration.

#### Method 2: Environment Variables

Alternatively, enable S3 file uploads by configuring environment variables. Update the `packages/backend/.env` file in your project directory with the following parameters:

```env
S3_BUCKET_NAME=your-bucket-name
S3_AWS_ACCESS_KEY_ID=your-access-key-id
S3_AWS_SECRET_ACCESS_KEY=your-secret-access-key
S3_AWS_REGION_NAME=your-aws-region-name
S3_ENDPOINT_URL=your-s3-endpoint #Only if the provider is not Amazon
```

These settings enable nodes like FileUpload, Stable Diffusion, and Speech-to-Text to directly store files in your configured S3 bucket.

### Link Expiration and File Size Configuration

> Note: Only the link to the file expires; the file itself is not removed. AI-Flow does not automatically delete files from your storage.

By default, links generated for accessing uploaded files expire after 12 hours, and the maximum file upload size is limited to 300 MB. You can customize these values by updating your `.env` file as follows:

```env
HOURS_BEFORE_EXPIRATION=48
MAX_UPLOAD_SIZE_MB=1000
```

Adjusting these settings allows for longer file availability and larger upload capacities, improving the flexibility and overall usability of your AI-Flow application.
