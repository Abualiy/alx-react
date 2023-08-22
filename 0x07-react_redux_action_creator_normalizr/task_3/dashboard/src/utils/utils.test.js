import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

discribe("getFullYear", () => {
  it("should return the correct year", () => {
    const presentyear = new Date().getFullYear();
    expect(getFullYear).toEqual(presentyear);
  });
});

discribe(" getFooterCopy is true or false", () => {
  it('should return "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });
  it('should return "Holberton School main dashboard" when isIndex is true', () => {
    expectgetFooterCopy(false).toEqual("Holberton School main dashboard");
  });
});

discribe("Checking the returned string", () => {
  it("should return expected string", () => {
    const expectedString =
      "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification).toEqual(expectedString);
  });
});
