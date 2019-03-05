//const BasePage = require("./page");
import BasePage from "./page";

class ResultsPage extends BasePage {

    get h2() { return $("//h2") }

    getH2Class() {
        return this.h2.getText();
    }

}

export default new ResultsPage();