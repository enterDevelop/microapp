using System.Threading.Tasks;
using CurrencyConvert.BAL;
using CurrencyConvert.BAL.ApiClients;
using CurrencyConvert.WebApi.Contracts.V1;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CurrencyConvert.WebApi.Controllers.V1
{
    [Route("api/v1/[controller]")]
    public class ConvertController : ControllerBase
    {
        private readonly IApiClient _currencyLayerApiClient;

        public ConvertController(IApiClient client)
        {
            _currencyLayerApiClient = client;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]CurencyConvert value)
        {
            var data = await _currencyLayerApiClient.Get($"currencies={value.InputCurrency}&source={value.OutputCurrency}&format=1");

            dynamic result = JsonConvert.DeserializeObject(await data.Content.ReadAsStringAsync());
            
            return Ok(new { result.quotes.USDRUB });
        }
    }
}
