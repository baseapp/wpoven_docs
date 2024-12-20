---
sidebar_position: 4
sidebar_label: "Setup SSL"
title: "Securing your site by setting up SSL"
description: "Learn how to setup SSL with WPOven for your site."
---

Follow these steps to set up SSL for your website in WPOven:

## Accessing the SSL Settings

1. Log in to your WPOven dashboard.
2. Navigate to **Manage Sites** and select the site for which you want to set up SSL.
3. Click on the **SSL** option from the sidebar menu.

## Configuring SSL

### SSL Status
- The current SSL status is displayed, including the expiration date and the issuing authority.

### SSL Domain
- Ensure that the domain(s) requiring SSL are listed.
- Enter multiple domains separated by commas if needed.

### SSL Type
You can choose from the following options:
- **None**: No SSL for the site.
- **Let's Encrypt (Free)**: Automatically issues a free SSL certificate using Let's Encrypt.
- **Custom**: Allows you to upload your custom SSL certificate and private key.

## Applying Changes

1. After selecting the desired SSL type, click the **Fix SSL Links** button to ensure all links on your site are updated to use HTTPS.
2. If you decide not to make changes, click **Cancel** to exit without saving.

### Custom SSL Configuration
If you select the **Custom** option:
1. **Private Key**: Paste the private key for your SSL certificate.
2. **Certificate Bundle**: Paste the certificate bundle, which includes the root certificate followed by intermediate certificates.

## Applying Changes

1. After filling in the required fields, click the **Apply SSL** button to save and activate the SSL configuration.
2. Use the **Fix SSL Links** button to ensure all links on your site are updated to use HTTPS.
3. If you decide not to make changes, click **Cancel** to exit without saving.


