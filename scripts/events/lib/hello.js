'use strict';

module.exports = (hexo) => {
  const isZh = hexo.config.language.search(/zh-CN/i) !== -1;
  if (isZh) {
    hexo.log.info(`
------------------------------------------------
|                                              |
|     ________  __            _        __      |
|    |_   __  |[  |          (_)      |  ]     |
|      | |_ \\_| | | __   _   __   .--.| |      |
|      |  _|    | |[  | | | [  |/ /'\`\\' |      |
|     _| |_     | | | \\_/ |, | || \\__/  |      |
|    |_____|   [___]'.__.'_/[___]'.__.;__]     |
|                                              |
|             感谢使用 Fluid 主题 !            |
|    文档: https://hexo.fluid-dev.com/docs/    |
|                                              |
------------------------------------------------
`);
  } else {
    hexo.log.info(`
------------------------------------------------
|                                              |
|     ________  __            _        __      |
|    |_   __  |[  |          (_)      |  ]     |
|      | |_ \\_| | | __   _   __   .--.| |      |
|      |  _|    | |[  | | | [  |/ /'\`\\' |      |
|     _| |_     | | | \\_/ |, | || \\__/  |      |
|    |_____|   [___]'.__.'_/[___]'.__.;__]     |
|                                              |
|       Thank you for using Fluid theme !      |
|   Docs: https://hexo.fluid-dev.com/docs/en/  |
|                                              |
------------------------------------------------
`);
  }

};
