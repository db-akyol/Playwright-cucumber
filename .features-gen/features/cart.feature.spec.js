// Generated from: features\cart.feature
import { test } from "playwright-bdd";

test.describe('Alışveriş Sepeti İşlevselliği', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('"standard_user" kullanıcısı ve "secret_sauce" şifresi ile giriş yaptım', null, { page }); 
  });
  
  test('Sepete ürün ekleme', { tag: ['@sepet', '@smoke'] }, async ({ When, Then, page }) => { 
    await When('ilk ürünü sepete ekliyorum', null, { page }); 
    await Then('sepet simgesinde "1" görmeliyim', null, { page }); 
  });

  test('Sepetten ürün çıkarma', { tag: ['@sepet', '@smoke'] }, async ({ Given, When, Then, page }) => { 
    await Given('sepete bir ürün ekledim', null, { page }); 
    await When('ürünü sepetten çıkarıyorum', null, { page }); 
    await Then('sepet boş olmalı', null, { page }); 
  });

  test('Sepete birden fazla ürün ekleme', { tag: ['@sepet'] }, async ({ When, Then, page }) => { 
    await When('sepete "3" ürün ekliyorum', null, { page }); 
    await Then('sepet simgesinde "3" görmeliyim', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@sepet","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given \"standard_user\" kullanıcısı ve \"secret_sauce\" şifresi ile giriş yaptım","isBg":true,"stepMatchArguments":[{"group":{"start":0,"value":"\"standard_user\"","children":[{"start":1,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"secret_sauce\"","children":[{"start":32,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When ilk ürünü sepete ekliyorum","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then sepet simgesinde \"1\" görmeliyim","stepMatchArguments":[{"group":{"start":17,"value":"\"1\"","children":[{"start":18,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":16,"tags":["@sepet","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given \"standard_user\" kullanıcısı ve \"secret_sauce\" şifresi ile giriş yaptım","isBg":true,"stepMatchArguments":[{"group":{"start":0,"value":"\"standard_user\"","children":[{"start":1,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"secret_sauce\"","children":[{"start":32,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given sepete bir ürün ekledim","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When ürünü sepetten çıkarıyorum","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then sepet boş olmalı","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":21,"tags":["@sepet"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given \"standard_user\" kullanıcısı ve \"secret_sauce\" şifresi ile giriş yaptım","isBg":true,"stepMatchArguments":[{"group":{"start":0,"value":"\"standard_user\"","children":[{"start":1,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"secret_sauce\"","children":[{"start":32,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When sepete \"3\" ürün ekliyorum","stepMatchArguments":[{"group":{"start":7,"value":"\"3\"","children":[{"start":8,"value":"3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then sepet simgesinde \"3\" görmeliyim","stepMatchArguments":[{"group":{"start":17,"value":"\"3\"","children":[{"start":18,"value":"3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end