---
sidebar_position: 4
title: "Zoho Free Email/SMTP "
sidebar_label: "Zoho Free Email/SMTP"
description: "Set up Zoho Mail, configure DNS records, and connect WordPress for email delivery."
---

## Introduction

Zoho Mail provides professional business free email hosting for custom domains. By connecting your domain with Zoho Mail, you can create email addresses such as:

```text
admin@yourdomain.com
support@yourdomain.com
contact@yourdomain.com
```

This guide covers:

* Creating a free Zoho Business Email account 
* Verifying your domain
* Configuring Cloudflare DNS records
* Creating email accounts
* Connecting WordPress using Zoho Mail Plugin
* Connecting WordPress using SMTP

## Prerequisites

Before proceeding, ensure you have:

| Requirement        | Description                    |
| ------------------ | ------------------------------ |
| Domain Name        | Example: `yourdomain.com`     |
| Cloudflare Account | DNS managed through Cloudflare |
| WordPress Website  | Installed and accessible       |
| Zoho Account       | Free or paid Zoho Mail account |

---

## Create a free Zoho Business Email Account

### Step 1: Sign Up for Zoho Mail

1. Visit Zoho Mail.
2. Select **Business Email**.
3. Choose a plan.
4. Click **Add Existing Domain**.
5. Enter your domain name.

    Example:

    ```text
    yourdomain.com
    ```

6. Continue to domain verification.

---

### Step 2: Verify Domain Ownership

Zoho will provide a TXT record.

Example:

| Type | Name | Content                      |
| ---- | ---- | ---------------------------- |
| TXT  | @    | zoho-verification=zbxxxxxxxx |

#### Add Record in Cloudflare

1. Open Cloudflare Dashboard.
2. Select your domain.
3. Navigate to:

    ```text
    DNS → Records
    ```

4. Click **Add Record**.
5. Add the TXT record provided by Zoho.
6. Save changes.

Wait for DNS propagation and click **Verify Domain** in Zoho.

---

# Configure Email DNS Records

After domain verification, Zoho will request MX, SPF, and DKIM records.

---

### Step 3: Add MX Records

MX records tell the internet where to deliver your emails.

Add the following records in Cloudflare.

#### Zoho India Data Center

| Type | Name | Mail Server | Priority |
| ---- | ---- | ----------- | -------- |
| MX   | @    | mx.zoho.in  | 10       |
| MX   | @    | mx2.zoho.in | 20       |
| MX   | @    | mx3.zoho.in | 50       |

#### Important

* Remove any old MX records.
* Keep only Zoho MX records.
* Proxy status must remain **DNS Only**.

---

### Step 4: Add SPF Record

SPF authorizes Zoho to send emails on behalf of your domain.

Add:

| Type | Name | Content                     |
| ---- | ---- | --------------------------- |
| TXT  | @    | v=spf1 include:zoho.in ~all |

---

### Step 5: Add DKIM Record

DKIM improves email authentication and deliverability.

Generate DKIM inside Zoho Mail.

Example:

| Type | Name            | Content                           |
| ---- | --------------- | --------------------------------- |
| TXT  | zoho._domainkey | v=DKIM1; k=rsa; p=YOUR_PUBLIC_KEY |

After adding the record:

1. Return to Zoho Mail.
2. Click **Verify DKIM**.

---

### Step 6: Add DMARC Record (Recommended)

DMARC protects your domain against spoofing.

Add:

| Type | Name   | Content                                           |
| ---- | ------ | ------------------------------------------------- |
| TXT  | _dmarc | v=DMARC1; p=none; rua=mailto:admin@yourdomain.com |

---

## Create Email Accounts

After MX verification succeeds:

1. Open Zoho Admin Console.
2. Navigate to:

    ```text
    Users → Add User
    ```

3. Create your mailbox.

    Examples:

    ```text
    admin@yourdomain.com
    support@yourdomain.com
    contact@yourdomain.com
    ```

4. Set a secure password.

---

## Zoho SMTP Settings

Use the following SMTP settings for applications and websites.

### SMTP Server

#### Zoho 

| Setting   | Value        |
| --------- | ------------ |
| SMTP Host | smtp.zoho.in |
| TLS Port  | 587          |
| SSL Port  | 465          |

#### Authentication

| Setting  | Value                                               |
| -------- | --------------------------------------------------- |
| Username | [admin@yourdomain.com](mailto:admin@yourdomain.com) |
| Password | Zoho mailbox password or App Password               |

---

### Method 1: Zoho Mail Plugin

#### Install Plugin

1. Login to WordPress Admin.
2. Navigate to:

    ```text
    Plugins → Add New
    ```

3. Search:

    ```text
    Zoho Mail
    ```

4. Install and activate the plugin.

---

#### Create OAuth Credentials

##### Open Zoho API Console

Navigate to:

```text
https://api-console.zoho.com/
```

##### Create Client

1. Click **Add Client**.
2. Select:

    ```text
    Server-based Application
    ```

3. Enter:

    ```text
    Client Name:
    My WordPress Site

    Homepage URL:
    https://yourdomain.com
    ```

4. Copy Redirect URI from the Zoho Mail plugin settings page.
5. Paste into Authorized Redirect URI.
6. Click Create.

    Zoho will generate:

    ```text
    Client ID
    Client Secret
    ```

---

#### Configure Plugin

Navigate to:

```text
WordPress → Zoho Mail
```

Fill:

| Setting       | Value                                               |
| ------------- | --------------------------------------------------- |
| Client Domain | zoho.in                                             |
| Client ID     | Generated Client ID                                 |
| Client Secret | Generated Client Secret                             |
| From Email    | [admin@yourdomain.com](mailto:admin@yourdomain.com) |
| From Name     | Website Name                                        |

Click:

```text
Authorize
```

Approve access.

---

#### Test Email

Navigate to:

```text
Zoho Mail → Test Email
```

Send a test email.

---

### Method 2: WPOven SMTP Suresend

#### Install Plugin

1. Download WPOven SMTP Suresend,  [Click for Download](https://github.com/baseapp/wpoven_suresend/releases).
2. Navigate to:

    ```text
    Plugins → Add New → Upload Plugin
    ```

3. Upload ZIP file.
4. Click Install.
5. Activate Plugin.

---

#### Configure SMTP

Navigate to:

```text
WPOven → SMTP Suresend
```

Configure:

| Field              | Value                                               |
| ------------------ | --------------------------------------------------- |
| SMTP Logs          | Enabled                                             |
| From Email Address | [admin@yourdomain.com](mailto:admin@yourdomain.com) |
| From Name          | Your Website                                        |
| Sending Option     | SMTP                                                |
| Host               | smtp.zoho.in                                        |
| Use Authentication | Enabled                                             |
| Username           | [admin@yourdomain.com](mailto:admin@yourdomain.com) |
| Password           | Zoho Password or App Password                       |
| Type of Encryption | TLS                                                 |
| SMTP Port          | 587                                                 |

Alternative SSL Settings:

| Field      | Value        |
| ---------- | ------------ |
| Host       | smtp.zoho.in |
| Encryption | SSL          |
| SMTP Port  | 465          |

Click:

```text
Save Changes
```

---

#### SMTP Mail Test

Navigate to:

```text
WPOven → SMTP Mail Test
```

Enter:

```text
Recipient Email:
example@gmail.com
```

Click:

```text
Send Test Email
```

If successful, SMTP configuration is complete.

---

## Troubleshooting

### MX Verification Failure

Check:

* Cloudflare nameservers are active
* MX records exist in Cloudflare
* Old MX records removed
* DNS propagation completed

---

### DKIM Verification Failure

Check:

* Correct DKIM selector
* Correct TXT record value
* Full public key copied
* DNS propagation completed

---

### SMTP Authentication Failed

Verify:

* SMTP username is full email address
* Password is correct
* App Password is used if 2FA is enabled

---

### Emails Going to Spam

Verify:

* SPF record exists
* DKIM verified
* DMARC configured
* Domain reputation is healthy

---

## Frequently Asked Questions

### Is Zoho Mail free?

Zoho occasionally offers a free plan for custom domain email, but availability depends on region and current pricing policies.

### Which SMTP port should I use?

Recommended:

```text
TLS: 587
```

Alternative:

```text
SSL: 465
```

### Can I use Zoho Mail Plugin instead of SMTP?

Yes. Zoho Mail Plugin uses OAuth authentication and is generally more secure.

### Can I use an App Password?

Yes. App Passwords are recommended when Two-Factor Authentication is enabled.

### Do I need Cloudflare?

No. However, if your domain uses Cloudflare nameservers, all DNS records must be added in Cloudflare.

---

## Changelog

### 1.0.0

* Initial release
* Zoho Business Email setup guide
* Cloudflare DNS configuration
* Zoho Mail Plugin integration
* WPOven SMTP Suresend integration
* SMTP testing and troubleshooting
