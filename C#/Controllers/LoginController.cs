using Blogger_C_.Models;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Text.Json.Nodes;

namespace Blogger_C_.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //hDYIxpApAeZECKiQ
    public class LoginController : ControllerBase
    {
        private Services.LoginService _loginService;

        public LoginController()
        {
            _loginService=new Services.LoginService();
        }
       
        [HttpPost]
        [Route("password")]
        public IActionResult LoginPassword(LoginModel loginModel)
        {
           var status = _loginService.LoginPassword(loginModel);
            if (status != null)
            {
                return Ok(status);
            }
            return BadRequest("Could not login");
  
        }
        [HttpPost]
        [Route("Create")]

        public IActionResult CreateUser(UserDataModel userDataModel)
        {
            var status = _loginService.CreateUserPassword(userDataModel);
            if (status == true)
            {
                return Ok("user created successfully");
            }
            else if(status ==false)
            {
                return BadRequest("User with similar email exist. Try logging in or use diffrent email");
            }
            return BadRequest("Could not create user");//if null
        }
    }
}
