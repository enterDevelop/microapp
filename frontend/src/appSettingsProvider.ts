export interface IAppSettings {
    urls: {
        weatherService: string,
        currencyService: string
    }
}

export default new class AppSettingsProvider {
    public readonly weatherService: string = 'http://192.168.99.100:63573'
    public readonly currencyService: string = 'http://192.168.99.100:63574'
}()