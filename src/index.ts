import type { IPluginContext } from '@tarojs/service';

interface IOptions {
   components: {
      [key: string]: string[];
   };
}

export default (ctx: IPluginContext, options: IOptions) => {
   ctx.modifyBuildAssets(({ assets }) => {
      const baseXml = assets['base.wxml'].source();
      let result = baseXml;
      for (const [key, value] of Object.entries(options.components)) {
         for (const property of value) {
            result = result.replace(new RegExp(`(<${key}\\b[^>]*?)\\s+${property}="(?:{{[^"]*}}|eh)"`, 'g'), '$1');
         }
      }

      assets['base.wxml'] = {
         size: () => result.length,
         source: () => result,
      };
   });
};
