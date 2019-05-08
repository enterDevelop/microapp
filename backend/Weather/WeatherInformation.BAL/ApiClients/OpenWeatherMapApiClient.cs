using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Polly;

namespace WeatherInformation.BAL.ApiClients
{
    public class OpenWeatherMapApiClient : IApiClient
    {
        private Policy ExponentialRetryPolicy { get; } =
            Policy
                .Handle<Exception>()
                .WaitAndRetryAsync(
                3,
                attempt => TimeSpan.FromMilliseconds(100 * Math.Pow(2, attempt)));

        private readonly string _apiKey;
        private readonly string _hostName;

        public OpenWeatherMapApiClient(IConfiguration config)
        {
            _hostName = config.GetSection("Urls")["WeatherApiUrl"];
            _apiKey = config.GetSection("Urls")["WeatherApiKey"];
        }

        public async Task<HttpResponseMessage> Get(string endpoint) =>
            await ExponentialRetryPolicy.ExecuteAsync(() => SendGet(endpoint));
        
        private async Task<HttpResponseMessage> SendGet(string endpoint)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri($"https://{_hostName}");
                var response = await httpClient.GetAsync($"/data/2.5/weather?appid={_apiKey}&units=metric&q={endpoint}");
                ThrowOnTransientFailure(response);

                return response;
            }
        }

        private void ThrowOnTransientFailure(HttpResponseMessage response)
        {
            if (((int)response.StatusCode) < 200 || ((int)response.StatusCode) > 499)
                throw new Exception(response.StatusCode.ToString());
        }
    }
}
