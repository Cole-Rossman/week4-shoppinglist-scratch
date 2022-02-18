import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('renderItem should render an li with information and a complete class when clicked', (expect) => {
    
    const expected = `<li class="complete">Brussels sprouts</li>` ;
    
    const actual = renderItem({ description: 'Brussels sprouts', complete: true });

    expect.equal(actual.outerHTML, expected);
});

test('renderItem should render an li with information without a complete class', (expect) => {
    
    const expected = `<li>Brussels sprouts</li>` ;
    
    const actual = renderItem({ description: 'Brussels sprouts', complete: false });

    expect.equal(actual.outerHTML, expected);
});

