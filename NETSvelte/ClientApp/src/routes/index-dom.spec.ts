/**
 * Testing environment set up using `npx apply rossyman/svelte-add-jest # --no-ssh`
 * @see https://github.com/rossyman/svelte-add-jest
 */

/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import type { RenderResult } from "@testing-library/svelte";
import index from './index.svelte';

/**
 * An example test suite outlining the usage of
 * `describe()`, `beforeEach()`, `test()` and `expect()`
 *
 * @see https://jestjs.io/docs/getting-started
 * @see https://github.com/testing-library/jest-dom
 */

describe('index', () => {
    let renderedComponent: RenderResult;

    beforeEach(() => {
        renderedComponent = render(index);
    });

    describe('once the component has been rendered', () => {
        test('should show the proper heading', () => {
            expect(renderedComponent.getByText(/Hello, world!/)).toBeInTheDocument();
        });
    });
});
