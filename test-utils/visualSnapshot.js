import fs from 'fs-extra';

const visualSnapshot = async (html) => {

    let page;
    page = await global.__BROWSER__.newPage();
    await fs.writeFile(__dirname + `/yoooo.html`, html);
    await page.goto(`file://${__dirname}/yoooo.html`);
    const image = await page.screenshot();
    await fs.unlink(__dirname + `/yoooo.html`);
    expect(image).toMatchImageSnapshot({
        failureThresholdType: 'pixel',
        failureThreshold: 500
    })

}

export default visualSnapshot;