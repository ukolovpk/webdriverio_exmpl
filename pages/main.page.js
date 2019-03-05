import BasePage from "./page";
import ResultsPage from "./results.page";

class MainPage extends BasePage {

    get searchField() { return $("//input[@type='text']"); }
    get searchButton() { return $("//input[@name='btnK']"); }
    get willLucky() { return $("//input[@name='btnI']"); }
    get body() { return $("//body"); }

    // @ifPageIsLoaded
    fillSearchField(query) {
        this.searchField.setValue(query);
    }

    // @ifPageIsLoaded
    clickOnSearch() {
        // wait for element is visible OR waitAndClick method from basePage
        this.searchButton.click();
        return ResultsPage;
    }

}

export default new MainPage();