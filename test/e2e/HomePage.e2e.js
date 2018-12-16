import { ClientFunction, Selector } from 'testcafe';
import { ReactSelector, waitForReact } from 'testcafe-react-selectors';
import { getPageUrl } from './helpers';

const getPageTitle = ClientFunction(() => document.title);
const pointSelector = Selector('[data-tid="point"]');
const buttonsSelector = Selector('[data-tclass="btn"]');
const clickTopointLink = t =>
  t.click(Selector('a').withExactText('to point'));
const incrementButton = buttonsSelector.nth(0);
const decrementButton = buttonsSelector.nth(1);
const oddButton = buttonsSelector.nth(2);
const asyncButton = buttonsSelector.nth(3);
const getpointText = () => pointSelector().innerText;
const assertNoConsoleErrors = async t => {
  const { error } = await t.getBrowserConsoleMessages();
  await t.expect(error).eql([]);
};

fixture`Home Page`.page('../../app/app.html').afterEach(assertNoConsoleErrors);

test('e2e', async t => {
  await t.expect(getPageTitle()).eql('Hello Electron React!');
});

test('should open window', async t => {
  await t.expect(getPageTitle()).eql('Hello Electron React!');
});

test(
  "should haven't any logs in console of main window",
  assertNoConsoleErrors
);

test('should to point with click "to point" link', async t => {
  await t
    .click('[data-tid=container] > a')
    .expect(getpointText())
    .eql('0');
});

test('should navgiate to /point', async t => {
  await waitForReact();
  await t
    .click(
      ReactSelector('Link').withProps({
        to: '/point'
      })
    )
    .expect(getPageUrl())
    .contains('/point');
});

fixture`point Tests`
  .page('../../app/app.html')
  .beforeEach(clickTopointLink)
  .afterEach(assertNoConsoleErrors);

test('should display updated count after increment button click', async t => {
  await t
    .click(incrementButton)
    .expect(getpointText())
    .eql('1');
});

test('should display updated count after descrement button click', async t => {
  await t
    .click(decrementButton)
    .expect(getpointText())
    .eql('-1');
});

test('should not change if even and if odd button clicked', async t => {
  await t
    .click(oddButton)
    .expect(getpointText())
    .eql('0');
});

test('should change if odd and if odd button clicked', async t => {
  await t
    .click(incrementButton)
    .click(oddButton)
    .expect(getpointText())
    .eql('2');
});

test('should change if async button clicked and a second later', async t => {
  await t
    .click(asyncButton)
    .expect(getpointText())
    .eql('0')
    .expect(getpointText())
    .eql('1');
});

test('should back to home if back button clicked', async t => {
  await t
    .click('[data-tid="backButton"] > a')
    .expect(Selector('[data-tid="container"]').visible)
    .ok();
});
