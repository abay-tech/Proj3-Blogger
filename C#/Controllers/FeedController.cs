using Blogger_C_.Models;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using System.Data.SqlClient;
using System.Diagnostics.Eventing.Reader;
using System.Text;

namespace Blogger_C_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedController : ControllerBase

    {
        private Services.FeedService _feedService;
        public FeedController() { 
            _feedService= new Services.FeedService();   
        }

        [HttpGet("feedlist")]
        public async Task<IActionResult?> GetList(int skipNum,int category_id)
        {
           var data=await _feedService.GetListAsync(skipNum, category_id);
            if (data != null)
            {
                return Ok(data);
            }
            return BadRequest("Something unexpected happened");

        }

        [HttpGet("feedData")]
        public async Task<IActionResult?> GetFeedData(string feedIds)
        {
            var data =await _feedService.GetFeedDataFavAsync(feedIds);
            if (data != null)
            {
                return Ok(data);
            }
            return BadRequest("Something unexpected happened");
        }

        [HttpGet("topfeed")]
        public async Task<IActionResult?> GetTopFeeds()
        {
            var data =await _feedService.GetTopFeedsAsync();
            if (data != null)
            {
                return Ok(data);
            }
            return BadRequest("Something unexpected happened");
        }

        [HttpGet("recieve")]
        public async Task<IActionResult> RecieveImage(int id)
        {
            var data= await _feedService.RecieveAsync(id);
            return Ok(data);
        }

        [HttpPost("send")]
        public async Task<IActionResult> SendImage(ImageModel image)
        {
            var data = await _feedService.SendAsync(image);
            if (data == true)
                return Ok("image uploaded success");
            else 
                return BadRequest("ded");
        }
    }
}
