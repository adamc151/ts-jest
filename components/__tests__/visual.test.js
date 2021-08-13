import { render } from "@testing-library/react";
import visualSnapshot from '../../test-utils/visualSnapshot';
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })


function SomeComp() {
    return <div>yoooooooooooooooooooooo</div>;
}
;

describe("visual regression testing", () => {

    let page;

    test('full page', async function () {
        await page.waitForSelector('h1')
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'pixel',
            failureThreshold: 5
        })
    })

    describe.only("SomeComp", () => {
        it("renders Hello", async () => {

            const { container } = render(<SomeComp />);
            await visualSnapshot(container.innerHTML);

        });
    })


});