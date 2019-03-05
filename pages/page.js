export default class BasePage {

    get baseUrl() {
        return "https://google.com";
    }

    open(path) {
        let url = (path) ? this.baseUrl + path : this.baseUrl;
        browser.url(url);
    }

    getTitle() {
        return browser.getTitle();
    }

    getCurrentUrl() {
        return browser.getUrl;
    }

    //waitAndClick()

    //...with circle

    getBrowser() {
        return browser;
    }

    isPageLoaded(element) {
        let result;
        try {
            browser.isElementDisplayed("//body");
            result = true;
        }
        catch {
            result = false;
        }
        return result;
    }

}