const main = require('../../../../dist/materials/blocks/现有模块中添加 antdv Table 表格/script/src/main');
const {
  context,
} = require('../../../../dist/materials/blocks/现有模块中添加 antdv Table 表格/script/src/context');

module.exports = {
  beforeCompile: (lowcodeContext) => {},
  afterCompile: (lowcodeContext) => {},
  complete: (lowcodeContext) => {
    context.lowcodeContext = lowcodeContext;
    main.handleComplete();
  },
  intColumnsFromOcrText: (lowcodeContext) => {
    let columns = lowcodeContext.params.split('\n');
    columns = columns.map((s) => ({
      slot: false,
      title: s,
      dataIndex: s,
      key: s,
    }));
    lowcodeContext.outputChannel.appendLine(JSON.stringify(columns));
    return { ...lowcodeContext.model, columns };
  },
  askChatGPT: async (lowcodeContext) => {
    context.lowcodeContext = lowcodeContext;
    const res = await main.handleAskChatGPT();
    return res;
  },
  intColumnsFromClipboardImage: async (lowcodeContext) => {
    context.lowcodeContext = lowcodeContext;
    const res = await main.handleIntColumnsFromClipboardImage();
    return res;
  },
  insertPlaceholder: async (lowcodeContext) => {
    context.lowcodeContext = lowcodeContext;
    main.handleInsertPlaceholder();
    return context.model;
  },
};
