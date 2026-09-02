---
sidebar_position: 8
title: CI/CD Deployment for WPOven
description: Automate deployment of WordPress plugin and theme using GitHub Actions and SFTP.
---

# CI/CD Deployment for WPOven

This guide explains how to automatically build and deploy your WordPress plugin or theme to your WPOven server using **GitHub Actions** and **SFTP**.

Instead of manually uploading plugin/theme after every update, GitHub Actions can automatically:

- Check your plugin/theme files.
- Connect to your WPOven server via SFTP.
- Upload the generated files to your server.
- upload the latest files/folders whenever you push changes to your GitHub repository.

---

## Prerequisites

Before configuring CI/CD, ensure you have:

- A GitHub repository containing your plugin or theme.
- A WPOven server.
- SFTP credentials for your WPOven server.
- GitHub repository access to configure Secrets.

---

# Step 1: Obtain Your SFTP Credentials

Log in to your WPOven dashboard and note the following details:

| Value | Description |
|--------|-------------|
| Host | Your server hostname or IP |
| Username | SFTP username |
| Password | SFTP password |
| Remote Directory | Destination directory for documentation |

Example:

```
Host: sftp.example.com
Username: wpoven_user
Password: ********
Remote Path:
/srv/www/example.com/public_html/wp-content/plugins
            or
/srv/www/example.com/public_html/wp-content/themes
```

---

# Step 2: Add GitHub Secrets

Open your GitHub repository.

Navigate to:

```
Settings
→ Secrets and variables
→ Actions
→ New Repository Secret
```

Create the following secrets.

| Secret | Value |
|---------|-------|
| SFTP_HOST | Your SFTP Host |
| SFTP_USER | SFTP Username |
| SFTP_PASS | SFTP Password |

Your workflow will securely use these values during deployment.

---

# Step 3: Create the GitHub Actions Workflow

Create the following file:

```
.github/workflows/deploy.yml
```

Paste the following workflow.

```yaml
name: Deploy WPOven Plugin Docs via SFTP

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      

      - name: Deploy via SFTP
        uses: wlixcc/SFTP-Deploy-Action@v1.2.5
        with:
          server: ${{ secrets.SFTP_HOST }}
          username: ${{ secrets.SFTP_USER }}
          password: ${{ secrets.SFTP_PASS }}
          sftp_only: true
          local_path: "your_github_plugin_path/*"
          remote_path: "/srv/www/example.com/public_html/wp-content/plugins or themes"
```

---

# Workflow Explanation

## Checkout Repository

```yaml
uses: actions/checkout@v3
```

Downloads your repository into the GitHub Actions runner.

---

## Setup Node.js

```yaml
uses: actions/setup-node@v3
```

Installs Node.js so Docusaurus can build your documentation.

---

## Install Dependencies

```bash
npm install
```

Installs all required Node.js packages.

---

## Build Documentation

```bash
npm run build
```

Generates the static website inside:

```
wpoven_docs/build
```

---

## Deploy via SFTP

```yaml
uses: wlixcc/SFTP-Deploy-Action@v1.2.5
```

Uploads the generated static files to your WPOven server using SFTP.

Files are uploaded from:

```
wpoven_docs/build/
```

to

```
/public_html/docs_html
```

---

# Directory Structure

Example project layout:

```
my-plugin/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── wpoven_docs/
│   ├── build/
│   ├── docs/
│   ├── src/
│   ├── package.json
│   └── docusaurus.config.js
│
└── plugin-files/
```

---

# Deployment Process

Every time you push changes to the **main** branch:

1. GitHub Actions starts automatically.
2. The repository is cloned.
3. Node.js is installed.
4. Documentation dependencies are installed.
5. Docusaurus builds the static website.
6. The generated files are uploaded to your WPOven server.
7. Your documentation is immediately updated.

```
Push Code
     │
     ▼
GitHub Actions
     │
     ▼
Build Docusaurus
     │
     ▼
Upload via SFTP
     │
     ▼
WPOven Server
```

---

# Customizing the Deployment Path

If you want to publish documentation to a different directory, update the `remote_path` value.

Example:

```yaml
remote_path: "/public_html/plugin-docs"
```

or

```yaml
remote_path: "/public_html/theme-docs"
```

---

# Deploy on Another Branch

To deploy only when pushing to another branch, update:

```yaml
on:
  push:
    branches:
      - develop
```

or

```yaml
branches:
  - production
```

---

# Troubleshooting

## Authentication Failed

Verify that:

- `SFTP_HOST` is correct.
- `SFTP_USER` is correct.
- `SFTP_PASS` is correct.

---

## Build Failed

Ensure:

```bash
npm install
npm run build
```

work successfully on your local machine before pushing.

---

## Files Not Uploaded

Check:

- The `remote_path` exists.
- The SFTP user has write permissions.
- The `local_path` points to the correct Docusaurus build directory.

---

# Best Practices

- Never hardcode SFTP credentials in your workflow.
- Always store credentials using GitHub Secrets.
- Test the workflow with a staging server before deploying to production.
- Keep your Node.js version updated.
- Review workflow logs in the **Actions** tab if a deployment fails.

---

# Conclusion

By integrating GitHub Actions with WPOven, you can fully automate the deployment of your WordPress plugin or theme documentation. Every push to your repository triggers a fresh Docusaurus build and securely uploads the latest documentation to your server via SFTP, eliminating manual uploads and ensuring your documentation stays up to date.