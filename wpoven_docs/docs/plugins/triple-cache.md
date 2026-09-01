---
sidebar_position: 2
title: "OvenPress Triple Cache"
sidebar_label: "Triple Cache"
description: "Boosts speed with advanced caching and Cloudflare integration."
---

**Contributors:** [WPOven](https://www.wpoven.com/)  
**Requires at least:** 6.6  
**Tested up to:** 7.1  
**Stable tag:** 1.0.3   
**License:** GPLv2 or later   
**License URI:** [http://www.gnu.org/licenses/gpl-2.0.html](http://www.gnu.org/licenses/gpl-2.0.html)

## Introduction

OvenPress Triple Cache is a powerful WordPress plugin that enhances website speed and performance through advanced caching and seamless Cloudflare integration. It optimizes page load times, server performance, and security, ensuring a fast and efficient browsing experience. 

The plugin provides automatic cache purging, customizable caching rules, and easy configuration options, making it a must-have for WordPress users looking to improve their site's performance effortlessly.

## Installation

### Download the Plugin

- To get the latest version of OvenPress Triple Cache :
  - Download directly from the GitHub repository: [Download](https://github.com/baseapp/ovenpress_triplecache/releases).

### Install the Plugin

- Log in to your WordPress admin dashboard.
- Go to Plugins **Plugins > Add New**.
- Click **Upload Plugin** button.
- Select the downloaded ZIP file and click **Install Now**.

### Activate the Plugin

- Once installed, click **Activate Plugin** to start using it.

## Configure Triple Cache Settings
### Cloudflare Settings
Once activated, go to **OvenPress > Triple Cache** in the WordPress admin menu.

![Cloudflare Settings](./img/triple-cache/settings.png)

    The **Cloudflare Settings** section allows you to integrate Cloudflare caching with **OvenPress Triple Cache**. Follow the steps below to set up your Cloudflare API key and enable caching.

- #### How to Get Your Cloudflare API Key?

  1. **[Sign in to your Cloudflare account](https://dash.cloudflare.com/)** and go to **My Profile**.
  2. Navigate to **API Tokens**, scroll to **API Keys**, and click **View** next to **Global API Key**.
  3. Enter your Cloudflare password to view and copy the API key.
  4. Fill in the **Cloudflare e-mail** and **Cloudflare API Key** fields.
  5. Choose your **Cloudflare Domain Name** from the dropdown and click **Save Changes**.

- #### Cloudflare General Settings

| **Field**                 | **Description** |
|-----------------------------|--------------------------------------------------------------------------------------------|
| **Authentication Mode**     | Select the authentication method used to connect to Cloudflare.|
| **Cloudflare Email**        | The email address used to `log in` to Cloudflare.|
| **Cloudflare API Key**      | The **Global API Key** extracted from your Cloudflare account.|
| **Cloudflare Domain Name**  | Choose the domain for which you want to enable Cloudflare cache.|

### Cache Settings

![Cache Settings](./img/triple-cache/cache-settings.png)

| **Setting**                                         | **Description** |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Cloudflare Cache-Control max-age**               | Defines the maximum cache duration for Cloudflare. **Must be greater than zero.** <br /> **Recommended:** 31536000 (1 year). |
| **Browser Cache-Control max-age**                  | Sets the cache duration for browsers.<br /> **Must be greater than zero.** <br />**Recommended:** A value between 60 and 600 seconds. |
| **Cache Behavior Settings**                        | Allows selecting a specific caching behavior from available options. |
| **Prevent the following URIs to be cached**        | Lists URIs that should not be cached (supports wildcards `*` ). <br />**Examples:** `/*ao_noptirocket*`, `/*jetpack=comms*`, `/checkout/*` |
| **Posts per page**                                 | Specifies the number of posts per page for pagination cleanup.<br /> **Example:** `10` |
| **Strip response cookies on cached pages**         | Removes unnecessary response cookies to improve caching (Cloudflare does not cache pages with response cookies). |
| **Purge single posts cache on comment changes**    | Clears the cache when a comment is added, approved, or deleted. |
| **Purge cache after WordPress upgrade**            | Automatically clears the cache when the WordPress upgrader process completes. |
| **Overwrite cache-control header via server rules**| Overrides WordPress’s default cache-control headers using web server rules. |
| **Purge HTML pages only**                          | Deletes cached HTML pages only, leaving other cached assets intact. |
| **Disable cache purging using queue**              | Introduces a **10-second delay** before purging cache to prevent overwhelming the server with too many requests. |

After configuring the settings, click `Save Changes` to apply them.

## Features

- **Cloudflare Integration**

  Seamlessly integrates with Cloudflare to optimize website performance by reducing load times and enhancing security.

- **Advanced Cache Managemen**

  Provides multiple caching options, including Cloudflare Cache-Control, Browser Cache, and Page Caching, ensuring efficient data retrieval.

- **Automatic Cache Purging**

  Automatically purges cache when updates occur, such as comment changes, plugin updates, and theme modifications, ensuring fresh content delivery.

- **Customizable Caching Rules**

  Allows users to define cache behavior, prevent caching of specific URIs, and strip response cookies for optimal caching performance.

- **Easy Configuration & Management**

  User-friendly settings panel within WordPress admin, making it easy to configure Cloudflare credentials and manage caching settings.

## Frequently Asked Questions

- #### What Is OvenPress Triple Cache plugin?

  The OvenPress Triple Cache plugin for WordPress integrates Cloudflare to provide advanced caching, resulting in lightning-fast page loads, optimized server performance, and enhanced security.

- #### What happens if I delete the plugin?

  I recommend disabling the plugin before deleting it, which will allow you to restore all information on Cloudflare. After that, you can proceed with the removal. This plugin will erase all stored data from the database, keeping your WordPress installation tidy.

- #### Is the OvenPress Triple Cache plugin free?

  Yes, the OvenPress Triple Cache plugin is free.

- #### Can I restore all Cloudflare settings as before the plugin activation?

  Yes, there is a ` Reset All ` button after enable caching.

- #### Do you automatically clean up the cache on website changes?

  Yes, you can enable this option from the cache settings page.

- #### Do you allow to bypass the cache for logged in users even on free plan?

  Yes. This is the main purpose of this plugin.

## Changelog
- **1.0.3** 
  - Renamed the plugin branding from WPOven to OvenPress.

- **1.0.2** 
  - Fixing a bug where the admin cannot delete WordPress users after activating the plugin.

- **1.0.1** 
  - Added Redis Object Cache integration to improve database query performance.
  - Introduced File-based Caching for faster page load times.
  - Added Varnish Cache support with automatic cache purge on content updates.
  - Added JavaScript Optimization (minification and deferred loading).
  - Implemented Lazy Load for images to reduce initial page load time.

- **1.0.0** 

  - Initial release with integrated Cloudflare for advanced caching and security.

## Upgrade Notice

- Regularly update the plugin to ensure compatibility with future WordPress versions.
