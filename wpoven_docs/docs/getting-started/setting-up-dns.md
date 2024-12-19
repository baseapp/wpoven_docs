---
sidebar_position: 3
sidebar_label: "Setup DNS"
title: "Setting Up DNS for Your Site"
description: "Learn how to configure DNS settings to point your domain to the WPOven server."
---

# Setting Up DNS for Your Site

After creating a site on WPOven, the next step is to configure your domain's DNS settings to point to the server. Follow this guide to set up your DNS records based on the provided details.

## Step-by-Step Guide to Configure DNS

### Step 1: Access Your Domain Registrar
Log in to the account where your domain is registered (e.g., GoDaddy, Namecheap, Google Domains).

### Step 2: Navigate to DNS Management
Locate the DNS management section, which may be labeled as **DNS Settings**, **Manage DNS**, or **Zone File Settings**.

### Step 3: Set DNS settings
For the Site which was created , visit the manage site section and click the DNS tab on the left . 

### Step 4: Set DNS settings
On the DNS page you will see the settings for your domain which you will need to set up in your DNS registrar.

### Step 5: Save Changes
After adding or updating the DNS records, save the changes. Note that DNS propagation may take up to 24-48 hours to reflect globally.

### Step 5: Verify DNS Configuration
To ensure your DNS settings are correctly configured:
- Use tools like [DNS Checker](https://www.whatsmydns.net/) to verify the records.
- Check the site status in your WPOven dashboard.

## Common Issues and Troubleshooting

- **My DNS Provider Does Not Allow A Names:**
  If your DNS provider does not allow A records, you may need to use a different provider or contact their support for assistance.
  You may also host the DNS using the Free Cloudflare plan. 

- **Propagation Delays:**
  DNS changes may take time to propagate. Wait for at least 24 hours before checking.

- **Incorrect Entries:**
  Double-check the records for typos or incorrect values.

For further assistance, contact [WPOven Support](https://app.wpoven.com/support).