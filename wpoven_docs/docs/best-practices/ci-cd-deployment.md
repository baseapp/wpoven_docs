---
sidebar_position: 8
title: Deploy Plugin or Theme via SFTP using GitHub Actions
description: Automate deployment of WordPress plugin and theme using GitHub Actions and SFTP.
---

# Deploy Plugin or Theme via SFTP using GitHub Actions

This guide explains how to automatically deploy your WordPress plugin or theme to your WPOven server using **GitHub Actions** and **SFTP**.

Instead of manually uploading your plugin or theme after every update, GitHub Actions can automatically:

- Check out the latest files from your GitHub repository.
- Connect to your WPOven server via SFTP.
- Upload the plugin or theme files to the specified directory.
- Deploy the latest changes whenever you push to the configured branch.

---

## Prerequisites

Before configuring automated deployment, ensure you have:

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
| Remote Directory | Destination directory for plugins/themes |

Example:

```
Host: sftp.example.com
Username: wpoven_user
Password: ********
Remote Path:
Plugin:
/srv/www/example.com/public_html/wp-content/plugins/my-plugin

Theme:
/srv/www/example.com/public_html/wp-content/themes/my-theme
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
name: Deploy WordPress Plugin to WPOven

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v5

      - name: Deploy via SFTP
        uses: wlixcc/SFTP-Deploy-Action@v1.2.5
        with:
          server: ${{ secrets.SFTP_HOST }}
          username: ${{ secrets.SFTP_USER }}
          password: ${{ secrets.SFTP_PASS }}
          sftp_only: true
          local_path: "./plugin-files/*"
          remote_path: "/srv/www/example.com/public_html/wp-content/plugins/my-plugin"
```

---

# Workflow Explanation

## Checkout Repository

```yaml
uses: actions/checkout@v5
```

Downloads your repository into the GitHub Actions runner.

---

## Deploy via SFTP

```yaml
uses: wlixcc/SFTP-Deploy-Action@v1.2.5
```

Uploads the plugin and theme files to your WPOven server using SFTP.

Files are uploaded from:
```yaml
./plugin-files/
```
to:
```yaml
/srv/www/example.com/public_html/wp-content/plugins/my-plugin
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
└── plugin-files/
```

---

# Deployment Process

Every time you push changes to the **main** branch:

1. GitHub Actions starts automatically.
2. The repository is cloned.
3. The plugin or theme files are uploaded to your WPOven server.
4. Your plugin or theme is updated on the WPOven server.

```
Push Code
     │
     ▼
GitHub Actions
     │
     ▼
Upload via SFTP
     │
     ▼
WPOven Server
```

---

# Customizing the Deployment Path

If you want to publish plugin or theme to a different directory, update the `remote_path` value.

Example:

```yaml
remote_path: "/your_remote_plugin_path/"
```

---

# Deploy on Another Branch

To deploy only when pushing to another branch, update:

```yaml
on:
  push:
    branches:
      - branch_name
```

---

# Troubleshooting

## Authentication Failed

Verify that:

- `SFTP_HOST` is correct.
- `SFTP_USER` is correct.
- `SFTP_PASS` is correct.

---

## Files Not Uploaded

Check:

- The SFTP user has write permissions.
- The `local_path` points to the correct plugin or theme directory.

---

# Best Practices

- Never hardcode SFTP credentials in your workflow.
- Always store credentials using GitHub Secrets.
- Test the workflow with a staging server before deploying to production.
- Review workflow logs in the **Actions** tab if a deployment fails.

---

# Conclusion

By integrating GitHub Actions with WPOven Server using SFTP, you can automate the deployment of your WordPress plugin or theme. Every push to the configured branch triggers a deployment that securely uploads the latest plugin or theme files to your WPOven server via SFTP. This eliminates manual uploads and helps keep your WordPress installation up to date.