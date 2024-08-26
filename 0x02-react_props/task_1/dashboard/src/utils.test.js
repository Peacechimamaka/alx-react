import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy returns the correct string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
});

test('getLatestNotification returns the correct string', () => {
    const expectedString = "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toBe(expectedString);
});
