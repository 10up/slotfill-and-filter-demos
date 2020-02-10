# Gutenberg SlotFill and Filter demos

> This repo can be used as reference or can be installed as a plugin in any WordPress install to make code changes as needed.
Each slotfill or filter is explained and has an example. This is meant to be a working document and will change as Gutenberg does and as I learn.

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![GPLv2 License](https://img.shields.io/github/license/10up/slotfill-and-filter-demos.svg)](https://github.com/10up/slotfill-and-filter-demos/blob/develop/LICENSE.md)

## Sections

* [SlotFill Sysytem](./src/slots)
	* [Basic SlotFill System](./src/slots)
	* [How Does Gutenberg do it?](./src/slots/how-does-gutenberg-do-it.md)
	* [wp.plugins API](./src/slots/wp-plugins-api.md)
	* [Available SlotFills](./src/slots/available-slot-fills.md)
		* [PluginPostStatusInfo](./src/slots/plugin-post-status-info.md)
		* [PluginPrePublishPanel](./src/slots/plugin-pre-publish-panel.md)
		* [PluginPostPublishPanel](./src/slots/plugin-post-publish-panel.md)
		* [PluginMoreMenuItem](./src/slots/plugin-more-menu-item.md)
		* [PluginBlockSettingsMenuItem](./src/slots/plugin-block-settings-menu-item.md)
		* [PluginSidebar](./src/slots/plugin-sidebar.md)
		* [PluginSidebarMoreMenuItem](./src/slots/plugin-sidebar-more-menu-item.md)
		* [PluginDocumentSettingPanel](./src/slots/plugin-document-setting-panel.md)
	* [Combine Them](./src/slots/hcombine-them.md)
* [Filters](./src/filters)
* [FAQ](./src/faq)

## Local setup

1. Clone this repository into the plugin directory of a WordPress installation.
2. Run `npm install` from the root of the plugin.
3. Run `npm run dev` to compile the files and tell webpack to watch for changes.

## Support Level

**Active:** 10up is actively working on this, and we expect to continue work for the foreseeable future including keeping tested up to the most recent version of WordPress.  Bug reports, feature requests, questions, and pull requests are welcome.

## Contributing

If you have an example you want to share, please [submit a PR](https://github.com/10up/slotfill-and-filter-demos/compare). If you have a question for the FAQ, please [open an issue](https://github.com/10up/slotfill-and-filter-demos/issues/new/choose).
Any feedback is welcome!

## Like what you see?

<a href="http://10up.com/contact/"><img src="https://10updotcom-wpengine.s3.amazonaws.com/uploads/2016/10/10up-Github-Banner.png" width="850" alt="Work with us at 10up"></a>
