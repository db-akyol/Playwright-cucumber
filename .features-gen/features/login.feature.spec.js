// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Giriş İşlevselliği', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('giriş sayfasındayım', null, { page }); 
  });
  
  test('Geçerli bilgilerle başarılı giriş', { tag: ['@giris', '@smoke', '@pozitif'] }, async ({ When, Then, And, page }) => { 
    await When('kullanıcı adı olarak "standard_user" giriyorum', null, { page }); 
    await And('şifre olarak "secret_sauce" giriyorum', null, { page }); 
    await And('giriş butonuna tıklıyorum', null, { page }); 
    await Then('ürünler sayfasına yönlendirilmeliyim', null, { page }); 
    await And('ürünler başlığını görmeliyim', null, { page }); 
  });

  test('Yanlış şifre ile başarısız giriş', { tag: ['@giris', '@negatif'] }, async ({ When, Then, And, page }) => { 
    await When('kullanıcı adı olarak "standard_user" giriyorum', null, { page }); 
    await And('şifre olarak "yanlis_sifre" giriyorum', null, { page }); 
    await And('giriş butonuna tıklıyorum', null, { page }); 
    await Then('"Epic sadface: Username and password do not match any user in this service" hata mesajını görmeliyim', null, { page }); 
  });

  test('Kilitli kullanıcı ile başarısız giriş', { tag: ['@giris', '@negatif'] }, async ({ When, Then, And, page }) => { 
    await When('kullanıcı adı olarak "locked_out_user" giriyorum', null, { page }); 
    await And('şifre olarak "secret_sauce" giriyorum', null, { page }); 
    await And('giriş butonuna tıklıyorum', null, { page }); 
    await Then('"Epic sadface: Sorry, this user has been locked out." hata mesajını görmeliyim', null, { page }); 
  });

  test.describe('Farklı kullanıcı tipleri için giriş doğrulaması', () => {

    test('Example #1', { tag: ['@giris', '@negatif'] }, async ({ When, Then, And, page }) => { 
      await When('kullanıcı adı olarak "standard_user" giriyorum', null, { page }); 
      await And('şifre olarak "secret_sauce" giriyorum', null, { page }); 
      await And('giriş butonuna tıklıyorum', null, { page }); 
      await Then('"basarili" sonucunu görmeliyim', null, { page }); 
    });

    test('Example #2', { tag: ['@giris', '@negatif'] }, async ({ When, Then, And, page }) => { 
      await When('kullanıcı adı olarak "problem_user" giriyorum', null, { page }); 
      await And('şifre olarak "secret_sauce" giriyorum', null, { page }); 
      await And('giriş butonuna tıklıyorum', null, { page }); 
      await Then('"basarili" sonucunu görmeliyim', null, { page }); 
    });

    test('Example #3', { tag: ['@giris', '@negatif'] }, async ({ When, Then, And, page }) => { 
      await When('kullanıcı adı olarak "locked_out_user" giriyorum', null, { page }); 
      await And('şifre olarak "secret_sauce" giriyorum', null, { page }); 
      await And('giriş butonuna tıklıyorum', null, { page }); 
      await Then('"kilitli_hata" sonucunu görmeliyim', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@giris","@smoke","@pozitif"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given giriş sayfasındayım","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When kullanıcı adı olarak \"standard_user\" giriyorum","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And şifre olarak \"secret_sauce\" giriyorum","stepMatchArguments":[{"group":{"start":13,"value":"\"secret_sauce\"","children":[{"start":14,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And giriş butonuna tıklıyorum","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then ürünler sayfasına yönlendirilmeliyim","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And ürünler başlığını görmeliyim","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":19,"tags":["@giris","@negatif"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given giriş sayfasındayım","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When kullanıcı adı olarak \"standard_user\" giriyorum","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And şifre olarak \"yanlis_sifre\" giriyorum","stepMatchArguments":[{"group":{"start":13,"value":"\"yanlis_sifre\"","children":[{"start":14,"value":"yanlis_sifre","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And giriş butonuna tıklıyorum","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then \"Epic sadface: Username and password do not match any user in this service\" hata mesajını görmeliyim","stepMatchArguments":[{"group":{"start":0,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":1,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":26,"tags":["@giris","@negatif"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given giriş sayfasındayım","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When kullanıcı adı olarak \"locked_out_user\" giriyorum","stepMatchArguments":[{"group":{"start":21,"value":"\"locked_out_user\"","children":[{"start":22,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And şifre olarak \"secret_sauce\" giriyorum","stepMatchArguments":[{"group":{"start":13,"value":"\"secret_sauce\"","children":[{"start":14,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And giriş butonuna tıklıyorum","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then \"Epic sadface: Sorry, this user has been locked out.\" hata mesajını görmeliyim","stepMatchArguments":[{"group":{"start":0,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":1,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":41,"tags":["@giris","@negatif"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given giriş sayfasındayım","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When kullanıcı adı olarak \"standard_user\" giriyorum","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And şifre olarak \"secret_sauce\" giriyorum","stepMatchArguments":[{"group":{"start":13,"value":"\"secret_sauce\"","children":[{"start":14,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And giriş butonuna tıklıyorum","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then \"basarili\" sonucunu görmeliyim","stepMatchArguments":[{"group":{"start":0,"value":"\"basarili\"","children":[{"start":1,"value":"basarili","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":41,"pickleLine":42,"tags":["@giris","@negatif"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given giriş sayfasındayım","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When kullanıcı adı olarak \"problem_user\" giriyorum","stepMatchArguments":[{"group":{"start":21,"value":"\"problem_user\"","children":[{"start":22,"value":"problem_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And şifre olarak \"secret_sauce\" giriyorum","stepMatchArguments":[{"group":{"start":13,"value":"\"secret_sauce\"","children":[{"start":14,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And giriş butonuna tıklıyorum","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then \"basarili\" sonucunu görmeliyim","stepMatchArguments":[{"group":{"start":0,"value":"\"basarili\"","children":[{"start":1,"value":"basarili","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":43,"tags":["@giris","@negatif"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given giriş sayfasındayım","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When kullanıcı adı olarak \"locked_out_user\" giriyorum","stepMatchArguments":[{"group":{"start":21,"value":"\"locked_out_user\"","children":[{"start":22,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And şifre olarak \"secret_sauce\" giriyorum","stepMatchArguments":[{"group":{"start":13,"value":"\"secret_sauce\"","children":[{"start":14,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And giriş butonuna tıklıyorum","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then \"kilitli_hata\" sonucunu görmeliyim","stepMatchArguments":[{"group":{"start":0,"value":"\"kilitli_hata\"","children":[{"start":1,"value":"kilitli_hata","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end