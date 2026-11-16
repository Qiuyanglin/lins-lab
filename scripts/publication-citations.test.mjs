import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../assets/js/publication-citations.js', import.meta.url),'utf8');
function fixture(clipboard) {
  const text = 'Mingyi Chen, Qiuyang Lin. A 70% example <not markup>. https://doi.org/example';
  const button = {hidden:true,disabled:false,dataset:{copied:'Copied',copyFallback:'Select and copy'},addEventListener(event,fn){this[event]=fn;}};
  const status = {textContent:''};
  const manual = {hidden:true,value:'',focus(){this.focused=true;},select(){this.selected=true;},setSelectionRange(start,end){this.range=[start,end];}};
  const elements = {'[data-copy-citation]':button,'[data-citation-text]':{textContent:text},'[data-citation-status]':status,'.pub-citation-manual':manual};
  const widget = {querySelector:selector=>elements[selector]};
  vm.runInNewContext(source,{document:{querySelectorAll:()=>[widget]},navigator:{clipboard}});
  return {text,button,status,manual};
}
test('copies the exact plain citation, with accessible success status',async()=>{
  let copied;
  const f=fixture({writeText:async value=>{copied=value;}});
  assert.equal(f.button.hidden,false);
  await f.button.click();
  assert.equal(copied,f.text);
  assert.equal(f.status.textContent,'Copied');
  assert.equal(f.manual.hidden,true);
  assert.equal(f.button.disabled,false);
});
test('denied clipboard access exposes and selects a manual-copy field',async()=>{
  const f=fixture({writeText:async()=>{throw new Error('Denied');}});
  await f.button.click();
  assert.equal(f.manual.value,f.text);
  assert.equal(f.manual.hidden,false);
  assert(f.manual.focused && f.manual.selected);
  assert.deepEqual(f.manual.range,[0,f.text.length]);
  assert.equal(f.status.textContent,'Select and copy');
  assert.equal(f.button.disabled,false);
});
test('missing clipboard API takes the same usable fallback path',async()=>{
  const f=fixture(undefined);
  await f.button.click();
  assert.equal(f.manual.value,f.text);
  assert.equal(f.manual.hidden,false);
  assert.equal(f.button.disabled,false);
});
