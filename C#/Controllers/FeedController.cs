using Blogger_C_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using System.Data.SqlClient;
using System.Diagnostics.Eventing.Reader;

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
        public IActionResult? GetList(int skipNum,int category_id)
        {
           var data=_feedService.GetList(skipNum, category_id);
            if (data != null)
            {
                return Ok(data);
            }
            return BadRequest("Something unexpected happened");

        }

        [HttpGet("feedData")]
        public IActionResult? GetFeedData(string feedIds)
        {
            var data = _feedService.GetFeedDataFav(feedIds);
            if (data != null)
            {
                return Ok(data);
            }
            return BadRequest("Something unexpected happened");
        }

        [HttpGet("topfeed")]
        public IActionResult? GetTopFeeds()
        {
            var data = _feedService.GetTopFeeds();
            if (data != null)
            {
                return Ok(data);
            }
            return BadRequest("Something unexpected happened");
        }
    }
}
