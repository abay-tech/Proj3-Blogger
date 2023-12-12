using Blogger_C_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace Blogger_C_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private Services.CategoryService _categoryService;
        public CategoryController() { 
        _categoryService=new Services.CategoryService();
        }

        [HttpGet("gettop")]
        public async Task<IActionResult> GetTop()
        {
           var data=await _categoryService.GetTopAsync();
            if(data==null)
                    return BadRequest("Something bad happened");
            return Ok(data);
        }

        [HttpGet("getall")]
        public async Task<IActionResult> GetAll()
        {
            var data= await _categoryService.GetAllAsync();
            if (data == null)
                return BadRequest("Something bad happened");
            return Ok(data);
        }


    }
}
