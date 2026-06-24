## Email Forwarding

### Introduction
To provide our users with the most cost-effective hosting infrastructure, WPOven native email accounts operate on a premium routing network costing $1 USD/month per mailbox after your first free account. 

If you only need to **forward** emails from your custom domain to a personal inbox (like Gmail or Outlook) without paying for extra mailboxes, we highly recommend utilizing **Cloudflare’s Free Email Routing**. It is completely free, secure, and preserves your hosting budget.

Below, we cover how to set up forwarding using both Cloudflare (Recommended/Free) and WPOven (Paid).

---

### Option 1: Cloudflare Email Routing (Recommended & Free)

If your domain's DNS is managed through Cloudflare, you can route incoming emails to any personal destination address for free.

#### Step 1: Enable Email Routing in Cloudflare
1. Log in to your **Cloudflare Dashboard** and select your domain.
2. Click on **Email** in the left-hand sidebar menu.
3. Click the **Get Started** button.

#### Step 2: Configure Destination and Custom Addresses
1. **Destination Addresses:** Enter the personal email address (e.g., `yourname@gmail.com`) where you want to receive the forwarded emails. Cloudflare will send a verification email to this address; click the link inside it to verify ownership.
2. **Custom Addresses:** Click **Create address**. Enter the custom alias you want to create (e.g., `info` or `contact`) and select your verified destination email from the dropdown.

#### Step 3: Automatically Update DNS Records
1. Cloudflare will detect if you have existing MX records. Click **Add records automatically** to allow Cloudflare to configure the correct email routing records for your domain.
2. *Note: If you have existing mail records from another provider, Cloudflare will prompt you to replace them.*

---

### Option 2: WPOven Native Email Forwarding (Paid)

If you prefer to keep your infrastructure entirely centralized within WPOven, or do not use Cloudflare for DNS management, you can configure standard email forwarding directly inside your dashboard. 

* **Cost Notice:** If you have already used your server's single free email allocation, adding a new routing rule functions as an additional active account billed at $1 USD/month.

#### Step-by-Step Dashboard Setup
1. Log in to your **WPOven Dashboard** and navigate to the **Emails** tab from the top menu.
2. Click the **Add Email** button.
3. On the configuration page:
   * **Email Type:** Click the dropdown and change it from *Normal* to **Forwarding**.
   * **Email Account:** Enter your custom prefix (e.g., `sales`) and select your domain name from the dropdown.
   * **Forward To:** In the target destination text field, enter the exact destination email address where incoming messages should be sent.
4. Click the green **Add Email** button to activate the forwarding rule.