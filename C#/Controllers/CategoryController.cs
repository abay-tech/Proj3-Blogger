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
        public IActionResult GetTop()
        {
           var data=_categoryService.GetTop();
            if(data==null)
                    return BadRequest("Something bad happened");
            return Ok(data);
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var data = _categoryService.GetAll();
            if (data == null)
                return BadRequest("Something bad happened");
            return Ok(data);
        }


    }
}
