import MainPage from "../../pages/main.page";
import assert from "assert";

describe("Google title simple test", () => {
    it("should have the right title", () => {
        const mainPage = MainPage;
        const query = "Pavel Ukolov";
        mainPage.open();
        mainPage.fillSearchField(query);
        const resultPage = mainPage.clickOnSearch();
        const actualTitle = resultPage.getTitle();
        const expectedTitle = query + " - Поиск в Google";
        assert.equal(actualTitle, expectedTitle);
    });
    //it("should have ")
});