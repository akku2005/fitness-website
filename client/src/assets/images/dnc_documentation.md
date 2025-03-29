
# Do Not Call (DNC) List Downloader - Detailed Documentation

## Introduction

This documentation provides a comprehensive guide to setting up and running an automated system for downloading the National Do Not Call Registry files. The system is designed to download the latest delta files from the registry, process them, and store them both locally and on Amazon S3 cloud storage.

## Prerequisites

Before you begin, ensure you have the following:

### National Do Not Call Registry Credentials
- **Organization ID**: A valid ID for accessing the DNC registry.
- **Password**: The password associated with your Organization ID.

### AWS Resources and Credentials
- **AWS Resources**:
  - EC2 instance
  - S3 bucket
  - Databricks (if using from AWS Marketplace)
  - IAM roles and policies
- **AWS Access Key ID and Secret Access Key**: Credentials for accessing AWS services.

### Technical Requirements
- **SSH Client**: For connecting to your EC2 instance.
- **Git**: Installed on your AWS EC2 Linux instance.

## Setup Guide

### Step 1: Install Node.js

Node.js is required to run the application. Follow these steps to install it:

1. **Connect to your AWS EC2 Linux instance via SSH**:
   ```bash
   ssh -i /path/to/your-key.pem ec2-user@your-ec2-instance-ip
   ```

2. **Update your package manager**:
   ```bash
   sudo yum update -y
   ```

3. **Install Node.js using the Node Version Manager (nvm)**:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install --lts
   ```

4. **Verify the installation**:
   ```bash
   node --version
   ```
   You should see a version number like `v18.x.x`.

### Step 2: Clone the Application Repository

1. **Clone the repository from GitHub**:
   ```bash
   git clone https://github.com/Attributics/Casetify.git
   ```

2. **Navigate to the DNC downloader directory**:
   ```bash
   cd Casetify/dnc-downloader
   ```

### Step 3: Install Required Software Packages

1. **Install the required packages**:
   ```bash
   npm install
   ```
   This may take a few minutes to complete.

### Step 4: Configure Environment Variables

1. **Create a configuration file**:
   ```bash
   touch .env
   ```

2. **Open this file with a text editor**:
   ```bash
   nano .env
   ```

3. **Copy and paste the following template into the file**:
   ```plaintext
   # Do Not Call Registry Credentials
   ORGANIZATION_ID=your_organization_id
   PASSWORD=your_password
   WSDL_URL=https://telemarketing.donotcall.gov/DownloadSvc/DownloadSvc.asmx?WSDL

   # File Settings
   FILE_FORMAT=Flat
   DOWNLOAD_PATH=./downloads
   BACKUP_PATH=./backup
   MAX_STATUS_CHECKS=24

   # AWS S3 Settings
   AWS_REGION=your_region
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   S3_BUCKET=dnc-export-data
   S3_PREFIX=daily-export-data/
   ```

4. **Replace the placeholder values with your actual information**:
   - `your_organization_id`: Your DNC Registry Organization ID.
   - `your_password`: Your DNC Registry Password.
   - `your_aws_access_key`: Your AWS Access Key ID.
   - `your_aws_secret_key`: Your AWS Secret Access Key.

5. **Save and exit the editor** (in nano: press `Ctrl+O`, then `Enter` to save, and `Ctrl+X` to exit).

### Step 5: Create Required Directories

1. **Ensure the necessary directories exist**:
   ```bash
   mkdir -p downloads backup logs
   ```

### Step 6: Test the Application

1. **Run the application**:
   ```bash
   node index.js
   ```

2. **Verify the process**:
   - Check the `downloads` folder for the downloaded file.
   - Verify that the file has been uploaded to your S3 bucket `dnc-export-data` in the `daily-export-data/` folder.
   - Check the AWS S3 Console at [S3 Console](https://s3.console.aws.amazon.com/s3/buckets/dnc-export-data) to confirm.

### Step 7: Set Up Automatic Execution

1. **Open the crontab editor**:
   ```bash
   crontab -e
   ```

2. **Add a line to schedule the download** (this example runs at 2:00 AM daily):
   ```bash
   0 2 * * * cd /home/ec2-user/Casetify/dnc-downloader && /home/ec2-user/.nvm/versions/node/v18.x.x/bin/node index.js >> /home/ec2-user/Casetify/dnc-downloader/logs/cron-log.txt 2>&1
   ```

3. **Save and exit the editor**.

## Bucket Structure

Your S3 bucket `dnc-export-data` contains the following folders:
- `archive/`: Used for archiving older DNC registry files.
- `daily-export-data/`: Daily exports from the DNC registry will be stored here.
- `global-dnc-data/`: Contains global DNC data.
- `logs/`: System logs related to the download process.

## Troubleshooting

If you encounter issues, follow these steps:

1. **Check the log files** in the `logs` folder for error messages.
2. **Verify your credentials** in the `.env` file.
3. **Ensure your EC2 instance has internet access**.
4. **Check AWS credentials** and S3 bucket permissions.
5. **Verify the WSDL URL** is accessible from your EC2 instance.
6. **Check your Do Not Call Registry credentials** are still valid.

### Common Error Messages

- **"Authentication failed"**: Check your Organization ID and Password.
- **"Access Denied"**: Verify your AWS credentials and S3 bucket permissions.
- **"Connection timeout"**: Check your EC2 network connectivity to the DNC Registry server.

## Code Overview

The provided code performs the following tasks:

1. **SOAP Client Creation**: Connects to the DNC registry using SOAP.
2. **Login**: Authenticates with the DNC registry.
3. **Delta File Request**: Submits a request for the delta file.
4. **File Status Check**: Polls the status of the file request.
5. **File Download**: Downloads the file once it's ready.
6. **File Extraction**: Extracts the downloaded zip file.
7. **S3 Upload**: Uploads the extracted file to the specified S3 bucket.

### Key Functions

- **`createSoapClient`**: Creates a SOAP client for communication.
- **`login`**: Logs into the DNC registry.
- **`submitDeltaFileRequest`**: Submits a request for the delta file.
- **`getDeltaFileRequestStatus`**: Checks the status of the file request.
- **`getDeltaFileUrl`**: Retrieves the URL of the delta file.
- **`downloadDNCFileToFile`**: Downloads the file to a local path.
- **`extractZipFile`**: Extracts the contents of the zip file.
- **`uploadFileToS3`**: Uploads the file to the S3 bucket.

This documentation should help you set up and run the DNC file downloader system efficiently. If you encounter any issues, refer to the troubleshooting section or consult the log files for more details.
