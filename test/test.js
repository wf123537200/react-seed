import ReactTestUtils from 'react-dom/test-utils';
import Header from 'src/components/Header';
import React from 'React';

describe('Header', () => {
    it('是不是包含【div】', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Header />
        );

        assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('是不是包含【strong】', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Header />
        );

        assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'strong'));
    });
});