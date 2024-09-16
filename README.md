## taro-plugin-remove

[属性精简](https://docs.taro.zone/docs/platform-plugin/#%E5%B1%9E%E6%80%A7%E7%B2%BE%E7%AE%80)

可以自由设定需要移除的属性

```js
const config = {
  ...
	plugins: [
		[
			'taro-plugin-remove',
			{
				components: {
					'view': [
						'hover-stop-propagation',
						'hover-start-time',
						'hover-class',
						'hover-stay-time',
						'animation',
						'bindanimationstart',
						'bindanimationiteration',
						'bindanimationend'
					],
					'scroll-view': [
						'enable-back-to-top',
						'refresher-enabled',
						'refresher-threshold',
						'refresher-default-style',
						'refresher-background',
						'refresher-triggered',
						'bindanimationend',
						'bindanimationiteration',
						'bindanimationstart',
						'binddragend',
						'binddragging',
						'binddragstart',
						'bindlongpress',
						'bindrefresherabort',
						'bindrefresherpulling',
						'bindrefresherrefresh',
						'bindrefresherrestore',
						'bindrefresherwillrefresh',
						'clip',
						'bindtouchcancel',
						'bindtouchend',
						'bindtouchmove',
						'bindtouchstart',
						'bindtransitionend',
						'refresher-two-level-enabled',
						'refresher-two-level-triggered',
						'refresher-two-level-threshold',
						'refresher-two-level-close-threshold',
						'refresher-two-level-scroll-enabled',
						'refresher-ballistic-refresh-enabled',
						'refresher-two-level-pinned',
						'bindrefresherstatuschange',
						'reverse',
						'using-sticky',
						'cache-extent',
						'scroll-into-view-within-extent',
						'scroll-into-view-offset'
					],
					'swiper': [
						'snap-to-edge',
						'display-multiple-items'
					],
					'swiper-item': ['item-id'],
					'input': [
						'name',
						'password',
						'auto-fill',
						'hold-keyboard',
						'safe-password-cert-path',
						'safe-password-length',
						'safe-password-time-stamp',
						'safe-password-nonce',
						'safe-password-salt',
						'safe-password-custom-hash',
						'bindkeyboardheightchange',
						'bindnicknamereview',
						'cursor-spacing',
						'cursor',
						'cursor-color',
						'selection-start',
						'selection-end'
					],
					'button': [
						'form-type',
						'hover-class',
						'hover-stop-propagation',
						'hover-start-time',
						'hover-stay-time',
						'lang',
						'session-from',
						'send-message-title',
						'send-message-path',
						'send-message-img',
						'show-message-card',
						'app-parameter',
						'business-id'
					]
				}
			}
		]
	],
  ...
}
```
