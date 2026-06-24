---
title: Troubleshooting
description: Resolve common issues related to WPOven Free Email, Email Forwarding, SMTP delivery, Zoho Mail, DKIM, SPF, DMARC, and Cloudflare Email Routing.
sidebar_position: 6
---

# Troubleshooting

This guide covers the most common issues encountered while setting up and managing email services, email forwarding, SMTP delivery, and email authentication.

It applies to:

- WPOven Free Email
- Email Forwarding
- Email Delivery (SMTP)
- WPOven SMTP Suresend
- Zoho Mail
- Cloudflare Email Routing
- SPF
- DKIM
- DMARC

---

## Before You Begin

Before troubleshooting any email-related issue, verify the following:

- Your domain is active and correctly configured.
- DNS records have been added correctly.
- DNS changes have propagated.
- Your mailbox exists and is active.
- SMTP credentials are correct.
- SPF, DKIM, and DMARC records are configured.

Many email issues are caused by incomplete DNS configuration or propagation delays.

---

# DNS & Domain Issues

## DNS Changes Are Not Taking Effect

### Symptoms

- Domain verification fails
- DKIM verification fails
- SPF checks fail
- Email forwarding does not work
- Emails are not delivered

### Cause

DNS changes require time to propagate across the internet.

### Solution

Typical propagation times:

| Provider | Estimated Time |
|----------|----------------|
| Cloudflare | 1–15 Minutes |
| Namecheap | 15–60 Minutes |
| GoDaddy | Up to 1 Hour |
| Other Providers | Up to 24 Hours |

Wait for propagation and test again.

---

## Domain Verification Failed

### Possible Causes

- Incorrect DNS record
- DNS record added to wrong provider
- DNS propagation incomplete

### Solution

Verify that:

- The record type is correct.
- The hostname matches exactly.
- The value matches exactly.
- DNS propagation has completed.

---

# WPOven Free Email Issues

## Mailbox Not Receiving Emails

### Possible Causes

- MX records missing
- Incorrect MX records
- Email authorization incomplete
- DNS propagation incomplete

### Solution

Verify:

- MX records are configured correctly.
- Old MX records have been removed.
- Domain authorization is complete.
- DNS propagation has finished.

---

## Mailbox Cannot Send Emails

### Possible Causes

- Incorrect password
- Incorrect SMTP settings
- Mail client misconfiguration

### Solution

Verify:

- Username is the full email address.
- Password is correct.
- SMTP settings are configured correctly.

---

## Cannot Access Webmail

### Possible Causes

- Incorrect login credentials
- Mailbox not created successfully
- DNS configuration incomplete

### Solution

1. Reset the mailbox password.
2. Confirm the mailbox exists.
3. Access:

    ```text
    webmail.yourdomain.com