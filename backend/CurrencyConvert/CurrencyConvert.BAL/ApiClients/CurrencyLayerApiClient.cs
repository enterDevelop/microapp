using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Polly;

namespace CurrencyConvert.BAL.ApiClients
{
    public class CurrencyLayerApiClient : IApiClient
    {
        private Policy ExponentialRetryPolicy { get; } =
            Policy
                .Handle<Exception>()
                .WaitAndRetryAsync(
                3,
                attempt => TimeSpan.FromMilliseconds(100 * Math.Pow(2, attempt)));

        private readonly string _hostName;
        private readonly string _apiKey;

        public CurrencyLayerApiClient(IConfiguration configuration)
        {
            _hostName = configuration.GetSection("Urls")["CurrencyLayerApiUrl"];
            _apiKey = configuration.GetSection("Urls")["CurrencyLayerApiKey"];
        }

        public async Task<HttpResponseMessage> Get(string endpoint) =>
            await ExponentialRetryPolicy.ExecuteAsync(() => SendGet(endpoint));
        

        private async Task<HttpResponseMessage> SendGet(string endpoint)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri($"http://{_hostName}");
                var response = await httpClient.GetAsync($"/api/live?access_key={_apiKey}&{endpoint}");
                ThrowOnTransientFailure(response);

                return response;
            }
        }

        private static void ThrowOnTransientFailure(HttpResponseMessage response)
        {
            if (((int)response.StatusCode) < 200 || ((int)response.StatusCode) > 499)
                throw new Exception(response.StatusCode.ToString());
        }
    }
}
