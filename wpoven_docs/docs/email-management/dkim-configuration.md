---
title: Enable DKIM for Domain
description: Configure DKIM authentication to verify domain emails, improve deliverability, and prevent email spoofing.
sidebar_position: 2
---

# DKIM Configuration

DKIM (DomainKeys Identified Mail) is an email authentication method that digitally signs outgoing emails, allowing receiving mail servers to verify that the message was sent by an authorized sender and has not been modified during transmission.

WPOven SMTP Suresend includes built-in DKIM support, making it easy to generate and configure DKIM records for your domain.

## Why Configure DKIM?

Without DKIM, email providers may have difficulty verifying the authenticity of your emails, which can lead to messages being delivered to spam folders.

## Benefits of DKIM

- Improves email deliverability
- Reduces spam classification
- Protects against email spoofing
- Builds sender reputation
- Supports DMARC authentication
- Increases trust with Gmail, Outlook, Yahoo, and other email providers

:::tip
For the best email deliverability, configure SPF, DKIM, and DMARC records together.
:::

---

## Prerequisites

Before proceeding with DKIM configuration:

* Install and activate **WPOven SMTP Suresend**.
* Configure and test your SMTP connection.
* Ensure you have access to your domain DNS settings.
* Set up a valid custom domain email address (e.g., `admin@example.com`).
* Verify that the email domain matches the domain where DKIM records will be configured.

### Download Plugin

https://github.com/baseapp/wpoven_suresend/releases


---
## DKIM Settings

### Step 1: Configure SMTP Settings

Before enabling DKIM, verify that SMTP is configured correctly.

Navigate to:

```text
WordPress Dashboard
→ WPOven Plugins  → SMTP Suresend → SMTP Settings
```

Configure the following:

| Setting | Description |
|----------|-------------|
| From Email | Email address used for sending emails |
| From Name | Sender name |
| Sending Option | SMTP |
| SMTP Host | SMTP server hostname |
| Authentication | Enabled |
| Username | SMTP username |
| Password | SMTP password |
| Encryption | TLS or SSL |
| SMTP Port | SMTP server port |

Example (Zoho Mail):

```text
SMTP Host: smtp.zoho.in
Encryption: TLS
Port: 587
```

Click **Save Changes** after completing the configuration.

---

### Step 2: Open DKIM Settings

Navigate to:

```text
WordPress Dashboard
→ WPOven Plugins  → SMTP Suresend → DKIM Settings
```

You will see:

- Enable DKIM option
- DNS Content field
- Copy DNS Content button
- DNS Record Instructions

---

### Step 3: Enable DKIM

Turn the **Enable DKIM** option to **ON**.

```text
Enable DKIM
[ ON ]
```

Once enabled, WPOven SMTP Suresend automatically generates a DKIM public key for your domain.

---

### Step 4: Copy the DKIM DNS Record

The plugin generates a DKIM record similar to:

```text
v=DKIM1; k=rsa; p=MIGfMA0GCS...
```

Click:

```text
Click To Copy
```

to copy the generated DNS content.

:::warning
Do not modify the generated DKIM value. Copy it exactly as provided by the plugin.
:::

---

### Step 5: Add the DKIM Record to DNS

Log in to your DNS provider.

Examples:

- Cloudflare
- Namecheap
- GoDaddy
- Hostinger
- DigitalOcean DNS
- Route 53

Create a new DNS record using the values shown in the plugin.

#### DNS Record Configuration

| Field | Value |
|---------|---------|
| Type | TXT |
| Name | mail._domainkey |
| Content | Generated DNS Content |
| Proxy Status | DNS Only |
| TTL | Auto |

Example:

```text
Type: TXT

Name:
mail._domainkey

Content:
v=DKIM1; k=rsa; p=MIGfMA0GCS...

TTL:
Auto
```

---

#### Cloudflare Example

If you use Cloudflare:

Navigate to:

```text
Cloudflare Dashboard
→ Select Domain
→ DNS
→ Add Record
```

Configure:

```text
Type: TXT
Name: mail._domainkey
Content: [Paste DNS Content]
TTL: Auto
Proxy: DNS Only
```

Save the record.

:::note
TXT records used for DKIM should always be configured as DNS Only and not proxied.
:::

---

# Step 6: Wait for DNS Propagation

After creating the DNS record, DNS propagation may take some time.

Typical propagation times:

| Provider | Estimated Time |
|-----------|----------------|
| Cloudflare | 1–15 minutes |
| Namecheap | 15–60 minutes |
| GoDaddy | Up to 1 hour |
| Other Providers | Up to 24 hours |

---

# Step 7: Verify DKIM

After DNS propagation:

1. Return to **SMTP Suresend → DKIM Settings**
2. Ensure DKIM remains enabled
3. Send a test email

    Navigate to:

    ```text
    SMTP Suresend → SMTP Mail Test
    ```

    Send a test email to:

    ```text
    Gmail
    Outlook
    Yahoo
    ```

---

## Verify DKIM in Gmail

Open the received email.

Click:

```text
Show Original
```

Look for:

```text
DKIM: PASS
```

A successful result may look like:

```text
SPF: PASS
DKIM: PASS
DMARC: PASS
```

This indicates that your email authentication is correctly configured.

---

## Troubleshooting

### DKIM Verification Failed

Possible causes:

#### Incorrect DNS Record

Verify:

```text
Type = TXT
Name = mail._domainkey
```

and ensure the content matches exactly.

---

#### DNS Not Propagated Yet

Wait for DNS changes to propagate and test again.

---

#### Wrong Domain

The domain used in:

```text
From Email
```

must match the domain where the DKIM record was added.

Example:

```text
From Email:
admin@example.com

DKIM Record:
example.com
```

Both domains must match.

---

#### DNS Record Modified

Do not:

- Add extra spaces
- Remove characters
- Split the key incorrectly

Copy the DNS content exactly as generated.

---

## Testing Email Delivery

After DKIM is configured, use the built-in testing tool.

Navigate to:

```text
SMTP Suresend
→ SMTP Mail Test
```

Send a test email and verify delivery.

The test confirms:

- SMTP connection
- Authentication
- Email delivery
- DKIM signing

---

## Recommended Email Authentication Setup

For production websites, configure all three authentication methods:

| Authentication | Purpose |
|---------------|----------|
| SPF | Verifies authorized mail servers |
| DKIM | Verifies email integrity and authenticity |
| DMARC | Defines actions when SPF or DKIM fail |

A complete setup should pass:

```text
SPF: PASS
DKIM: PASS
DMARC: PASS
```

---

## Frequently Asked Questions

### Do I need DKIM if SMTP is already working?

Yes.

SMTP ensures emails can be sent, while DKIM verifies that the emails are authentic and trustworthy.

---

### Can I use DKIM with Zoho Mail?

Yes.

WPOven SMTP Suresend works with Zoho Mail, Google Workspace, Microsoft 365, and most SMTP providers.

---

### Will DKIM improve inbox placement?

In most cases, yes. Email providers are more likely to trust DKIM-signed emails.

---

### What happens if DKIM is disabled?

Emails can still be sent, but deliverability may be reduced and messages are more likely to be flagged as spam.

---