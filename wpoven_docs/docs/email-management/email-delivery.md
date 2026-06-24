---
sidebar_position: 1
title: Email Delivery
description: Learn the different email delivery methods available on WPOven, including SMTP providers, WPOven SureSend, PHP Mail, and domain-authenticated email sending for improved deliverability.
---

## Email Delivery (WordPress SMTP)

WordPress’s default mail configuration is prone to delivery failures because standard servers aren’t optimized to handle transactional emails (like password resets, order confirmations, and user notifications). To ensure your emails consistently hit the inbox rather than the spam folder, WPOven supports multiple delivery methods ranging from basic defaults to hardened, secure configurations.

### Introduction
When your WordPress site triggers an email, the infrastructure handling that message dictates whether it reaches your user. WPOven provides four distinct implementation paths depending on your volume, security requirements, and technical expertise.

### 1. WPOven SureSend with DKIM & Free SMTP Providers (Highly Recommended)
* **How it works:** This method pairs WPOven's **SureSend Plugin** infrastructure (which forces secure domain authentication via DKIM/SPF) with a dedicated third-party SMTP provider (such as Mailgun, SendGrid, or Brevo). 
* **Pros:** Maximum deliverability rates, bulletproof security, detailed delivery logs, and bypassed server limits.
* **Cons:** Requires a quick, initial DNS and plugin configuration.

### 2. Standard PHP Mail (Enabled by Default)
* **How it works:** Your site uses the built-in native PHP `mail()` function to route messages directly through the local server hosting your files.
* **Pros:** Zero setup required; works immediately out of the box.
* **Cons:** Extremely high risk of emails landing in spam. Major email providers (like Gmail and Yahoo) heavily filter or outright block PHP mail due to the lack of domain-level authentication signatures.

### 3. WPOven SureSend with Native PHP Mail (Plugin Method)
* **How it works:** If you want to use the local server's mail system but still require strong domain authentication to prevent spam filtering, you can route PHP mail through our specialized **WPOven SureSend** framework using our open-source plugin.
* **Pros:** Uses local server routing but injects valid DKIM signatures to authenticate your domain name.
* **Cons:** Requires manual plugin installation from GitHub.

### 4. WPOven SureSend paired with WPOven Email Mailboxes
* **How it works:** This routes your WordPress site's outgoing transactional messages directly through the custom WPOven email inbox you created in your dashboard.
* **Pros:** Keeps your entire ecosystem centralized within your WPOven billing plan without relying on external third-party services.
* **Cons:** Subject to standard mailbox sending quotas; not recommended for high-volume e-commerce or massive membership sites.

---

## How to Set Up WPOven SureSend with Free SMTP (Recommended)

### Introduction
To ensure maximum deliverability, we recommend offloading your WordPress site's transactional mail onto a professional, free-tier SMTP provider while using WPOven's SureSend infrastructure to verify your domain authenticity.

### Step 1: Configure Your DNS Records (SPF & DKIM)
Before configuring your WordPress site, you must authenticate your domain within your DNS provider (WPOven or Cloudflare) to grant your chosen SMTP service permission to send mail on your behalf.
1. Log in to your DNS management dashboard.
2. Add the **SPF (TXT)** record provided by your SMTP vendor to authorize their sending servers.
3. Add the **DKIM (TXT)** keys to cryptographically sign your outgoing messages.

### Step 2: Install an SMTP Plugin in WordPress
1. Log in to your WordPress dashboard, navigate to **Plugins** > **Add New**.
2. Search for and install a reliable configuration plugin such as **WP Mail SMTP** or **Post SMTP**.
3. Activate the plugin.

### Step 3: Input SMTP Provider Credentials
1. Open the plugin settings and select your chosen mailer (e.g., SendGrid, Mailgun, SMTP.com, or Other SMTP).
2. Input the following standard parameters provided by your vendor:
   * **SMTP Host:** (e.g., `smtp.sendgrid.net`)
   * **Encryption:** TLS (Recommended) or SSL
   * **SMTP Port:** `587` (for TLS) or `465` (for SSL)
   * **Authentication:** Set to **Yes**.
   * **Username/Password:** Input your SMTP vendor's API key or credential string.
3. Save changes and run an inbox test message using the plugin's built-in testing tool.

---

## Configuring WPOven SureSend via the PHP Mail Plugin

### Introduction
If you prefer not to manage external third-party SMTP accounts but still want to bypass aggressive spam filters, you can use the **WPOven SureSend** framework. By deploying our dedicated plugin, your local PHP mail instances are injected with valid DKIM signatures, verifying your domain's sending authority.

### Step-by-Step Installation
1. Navigate to the official repository: [WPOven SureSend GitHub Plugin](https://github.com/baseapp/wpoven_suresend).
2. Click the green **Code** button and select **Download ZIP** to save the plugin file to your computer.
3. Go to your WordPress Dashboard, navigate to **Plugins** > **Add New** > **Upload Plugin**.
4. Choose the downloaded `wpoven_suresend-main.zip` file, click **Install Now**, and then click **Activate**.
5. Once activated, navigate to the plugin settings page to verify that the SureSend handshake is active and tracking your authenticated domain records.

--

## Zoho for trasaction Emails

We also have have had good experience of Clients using Zoho plugin / Zoho Free SMTP to send emails. Read more there : [Zoho Email](zoho-free-email.md)