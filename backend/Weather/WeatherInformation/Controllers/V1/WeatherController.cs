using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WeatherInformation.BAL;
using WeatherInformation.BAL.ApiClients;

namespace WeatherInformation.Controllers.V1
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly IApiClient _openWeatherMapApiClient;

        public WeatherController(IApiClient client)
        {
            _openWeatherMapApiClient = client;
        }

        [HttpGet]
        public async Task<ActionResult> Get(string city)
        {
            var response = await _openWeatherMapApiClient.Get(city);

            dynamic data = JsonConvert.DeserializeObject(await response.Content.ReadAsStringAsync());

            return Ok(new { city = data.name, data.main.temp });
        }
    }
}
